# 1️⃣ Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build Next.js app for production
RUN npm run build

# 2️⃣ Production stage (serve with Next.js)
FROM node:20-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy built Next.js app
COPY --from=build /app ./

# Expose port for Next.js
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]
