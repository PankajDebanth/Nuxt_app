# Step 1: Build Stage
FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production Stage
FROM node:16-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app /app
EXPOSE 3000
CMD ["npm", "run", "start"]
