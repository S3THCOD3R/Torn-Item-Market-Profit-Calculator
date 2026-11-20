// netlify/functions/torn-proxy.js
// Secure proxy for Torn API v2 item market calls.
// Keeps your API key server-side and bypasses browser CORS restrictions.

const TORN_API_BASE = 'https://api.torn.com/v2';

export async function handler(event) {
  const { itemId } = event.queryStringParameters || {};

  if (!itemId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing itemId parameter' }),
    };
  }

  // Read key from Netlify environment variables (never hardcode).
  const apiKey = process.env.TORN_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server API key not configured' }),
    };
  }

  const url = `${TORN_API_BASE}/market/${itemId}/itemmarket?key=${apiKey}&limit=20`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Torn returns HTTP 200 even for API errors; check the payload.
    if (data.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.error.error }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30', // Cache for 30s to reduce API calls
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
