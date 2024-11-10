# Use a Node.js 18 image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Serve the app using 'serve' package
CMD ["npx", "serve", "-s", "build"]
