// netlify/functions/torn-proxy.js
// Secure proxy for Torn API v2 item market calls.
// The API key comes from the client (per-user), never stored server-side.

const TORN_API_BASE = 'https://api.torn.com/v2';

// Torn API keys are 16 alphanumeric characters.
const KEY_PATTERN = /^[A-Za-z0-9]{16}$/;

export async function handler(event) {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { itemId, key } = body;

  if (!itemId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing itemId' }),
    };
  }

  if (!key || typeof key !== 'string') {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing API key' }),
    };
  }

  // Validate key format before forwarding.
  if (!KEY_PATTERN.test(key)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid API key format (expected 16 alphanumeric characters)' }),
    };
  }

  const url = `${TORN_API_BASE}/market/${encodeURIComponent(itemId)}/itemmarket?key=${encodeURIComponent(key)}&limit=20`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Torn returns HTTP 200 even for API errors; check the payload.
    if (data.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.error.error || 'Torn API error' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Failed to reach Torn API' }),
    };
  }
}
