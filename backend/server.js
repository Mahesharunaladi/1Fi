import { createServer } from 'node:http';
import { products } from './data/products.js';

const port = Number(process.env.PORT || 3001);

const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  response.end(JSON.stringify(body));
};

const server = createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    });
    return response.end();
  }

  if (request.method === 'GET' && request.url === '/api/health') {
    return sendJson(response, 200, { status: 'ok' });
  }

  if (request.method === 'GET' && request.url === '/api/products') {
    return sendJson(response, 200, { data: products });
  }

  return sendJson(response, 404, { error: 'Route not found' });
});

server.listen(port, () => {
  console.log(`1Fi Marketplace API listening on http://localhost:${port}`);
});
