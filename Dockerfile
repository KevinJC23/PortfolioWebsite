# Build the Application
FROM node:20-slim AS builder

# Set Working Directory
WORKDIR /app

# Install Dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy All the Files & Build
COPY . .
RUN npm run build

# Run the Application
FROM node:20-slim AS runner

# Set Working Directory
WORKDIR /app

# Copy Necessary Files From Builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Next.js Port
EXPOSE 3000

# Start the App
CMD ["npm", "start"]