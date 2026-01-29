FROM node:18-alpine AS builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/server ./server
COPY --from=builder /app/build ./build
COPY --from=builder /app/config ./config
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 8080

CMD ["node", "server/server.js"]
