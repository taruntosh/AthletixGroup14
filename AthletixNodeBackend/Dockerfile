# Use an official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Copy the .env file
COPY .env .env

# Expose port 8000
EXPOSE 8000

# Run the backend server
CMD ["node", "index.js"]
