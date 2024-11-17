FROM node:20-alpine

WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm run build --production

EXPOSE 3000

ENTRYPOINT ["npm", "start"]