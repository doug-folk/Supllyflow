FROM node:14

WORKDIR /app

COPY supllyflow-app/package*.json ./

COPY supllyflow-app ./

RUN npm install react-native-safe-area-context

RUN npm install react-native-gesture-handler

RUN npm install

RUN npm install -g expo-cli

RUN npm install metro@latest

RUN expo update

COPY . .

EXPOSE 19000

EXPOSE 19001

EXPOSE 19002

EXPOSE 8081

CMD ["npm", "start"]
