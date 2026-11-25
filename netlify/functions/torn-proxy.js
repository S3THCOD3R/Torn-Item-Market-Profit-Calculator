// netlify/functions/torn-proxy.js
// Unified proxy for Torn API v2. Handles:
//   { type: 'items', key }        → /v2/torn/items
//   { type: 'bazaar', itemId, key } → /v2/market/{itemId}/bazaar
//   { itemId, key, offset }       → /v2/market/{itemId}/itemmarket
// Key comes from the client (per-user), never stored server-side.

const TORN_API_BASE = 'https://api.torn.com/v2';
const KEY_PATTERN = /^[A-Za-z0-9]{16}$/;

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { type, itemId, key, offset } = body;

  if (!key || typeof key !== 'string') {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing API key' }) };
  }
  if (!KEY_PATTERN.test(key)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid API key format (expected 16 alphanumeric characters)' }),
    };
  }

  // ── Route: items catalog ─────────────────────────────
  if (type === 'items') {
    const url = `${TORN_API_BASE}/torn/items?key=${encodeURIComponent(key)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        return { statusCode: 400, body: JSON.stringify({ error: data.error.error || 'Torn API error' }) };
      }
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
        body: JSON.stringify(data),
      };
    } catch {
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to reach Torn API' }) };
    }
  }

  // ── Route: bazaar listings ───────────────────────────
  if (type === 'bazaar') {
    if (!itemId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing itemId' }) };
    }
    const url = `${TORN_API_BASE}/market/${encodeURIComponent(itemId)}/bazaar?key=${encodeURIComponent(key)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        return { statusCode: 400, body: JSON.stringify({ error: data.error.error || 'Torn API error' }) };
      }
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        body: JSON.stringify(data),
      };
    } catch {
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to reach Torn API' }) };
    }
  }

  // ── Route: item market (default) ─────────────────────
  if (!itemId) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing itemId' }) };
  }

  const off = Math.max(0, Math.floor(Number(offset) || 0));
  const url = `${TORN_API_BASE}/market/${encodeURIComponent(itemId)}/itemmarket?key=${encodeURIComponent(key)}&limit=20&offset=${off}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      return { statusCode: 400, body: JSON.stringify({ error: data.error.error || 'Torn API error' }) };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(data),
    };
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to reach Torn API' }) };
  }
}
