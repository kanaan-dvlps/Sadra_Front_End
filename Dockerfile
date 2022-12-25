FROM node:16.13.0 AS build
WORKDIR /app
COPY package*.json /app/
RUN npm ci --only=production
RUN rm -f .npmrc
RUN npm run build

FROM node:16.13.0 as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

EXPOSE 3000
CMD ["npm", "run", "start"]