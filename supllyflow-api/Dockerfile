FROM node:alpine

WORKDIR /api

COPY ./supllyflow-api/package*.json ./

COPY supllyflow-api/prisma ./prisma

COPY supllyflow-api/src ./src

RUN npm install

RUN npm install -g ts-node typescript ts-node-dev


COPY . .

EXPOSE 3333
