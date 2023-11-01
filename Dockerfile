# Use the official Cypress image as a base image
FROM cypress/included:13.4.0

# Set the working directory in the container
WORKDIR /e2e

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy other project files
COPY cypress.config.ts .
COPY tsconfig.json .
COPY cypress/ cypress/

