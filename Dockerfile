# Stage 1: Build the app
FROM node:20-alpine AS build-env

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy remaining application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app
FROM gcr.io/distroless/nodejs20 AS runner

# Set working directory
WORKDIR /app

# Environment variables for production
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files from the build stage
COPY --from=build-env /app/next.config.ts ./
COPY --from=build-env /app/public ./public
COPY --from=build-env /app/.next ./.next
COPY --from=build-env /app/lib ./lib
COPY --from=build-env /app/node_modules ./node_modules

EXPOSE 3000
# Run the Next.js app
CMD ["./node_modules/next/dist/bin/next", "start"]
