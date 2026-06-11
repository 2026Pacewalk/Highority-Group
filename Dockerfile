# ── Build stage ─────────────────────────────────────────────
# The Vite + React app lives in the app/ subdirectory.
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies (use the lockfile for reproducible builds)
COPY app/package.json app/package-lock.json ./
RUN npm ci

# Build the static site -> /app/dist
COPY app/ ./
RUN npm run build

# ── Runtime stage ───────────────────────────────────────────
# Serve the built static files with SPA fallback (required for
# client-side routing / BrowserRouter — unknown paths -> index.html).
FROM node:22-alpine AS runtime
WORKDIR /srv

RUN npm install -g serve@14

COPY --from=build /app/dist ./dist

# Railway provides $PORT; default to 3000 for local docker runs.
ENV PORT=3000
EXPOSE 3000

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
