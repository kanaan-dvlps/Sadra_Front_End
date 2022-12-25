FROM node:16.13.0 AS dependencies
WORKDIR /app
COPY package*.json /app/
RUN npm ci --only=production
RUN rm -f .npmrc

FROM node:16.13.0 as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:16.13.0 as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]