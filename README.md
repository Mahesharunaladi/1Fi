# 1Fi Marketplace

A mobile-first 1Fi Marketplace experience with a separated frontend and backend.

## Project structure

- `frontend/` — Vite + React UI, styling, product browsing, product details, and EMI selection.
- `backend/` — Node.js API server and Marketplace product data.

## Run locally

Install frontend dependencies from `frontend/`, then start the UI with `npm run dev`.

Start the API separately from `backend/` with `npm start`.

The product endpoint is available at `GET http://localhost:3001/api/products`.