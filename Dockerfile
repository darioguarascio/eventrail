#FROM    alpine:3.13.6
FROM node:20

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install

COPY src /app/src
COPY tsconfig.json /app

CMD ["npx", "tsx", "src/server.ts" ]

