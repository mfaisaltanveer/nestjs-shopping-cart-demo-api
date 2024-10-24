# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

COPY .env .env

# Copy all files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the NestJS application in development mode
CMD ["yarn", "run", "start:dev"]
