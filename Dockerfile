# ── Stage 1: build the React frontend ───────────────────────
FROM node:22-alpine AS frontend
WORKDIR /app
COPY app/package.json app/package-lock.json ./
RUN npm ci
COPY app/ ./
RUN npm run build            # -> /app/dist

# ── Stage 2: install server production deps ──────────────────
FROM node:22-alpine AS server-deps
WORKDIR /server
COPY server/package.json ./
RUN npm install --omit=dev

# ── Stage 3: runtime (Express serves API + uploads + SPA) ────
FROM node:22-alpine AS runtime
WORKDIR /server
COPY --from=server-deps /server/node_modules ./node_modules
COPY server/ ./
# Built SPA goes where index.js looks for it (../public from src/).
COPY --from=frontend /app/dist ./public

ENV NODE_ENV=production
ENV UPLOAD_DIR=/data/uploads
ENV PORT=3000
EXPOSE 3000

# Railway mounts the persistent volume over /data.
RUN mkdir -p /data/uploads

CMD ["node", "src/index.js"]
