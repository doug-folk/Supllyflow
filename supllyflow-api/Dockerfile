FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

COPY src ./src

RUN npm install

RUN npm install -g ts-node typescript ts-node-dev

COPY . .

EXPOSE 3333