FROM node:13-alpine

WORKDIR /app

ADD package*.json ./

RUN npm i

EXPOSE 3000