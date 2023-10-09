# Use a image base do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY supllyflow-app/package*.json ./

COPY supllyflow-app ./

RUN npm install react-native-safe-area-context

RUN npm install react-native-gesture-handler

# Instale as dependências do projeto
RUN npm install

# Instale o Expo CLI globalmente
RUN npm install -g expo-cli

RUN npm install metro@latest

RUN expo update


# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta 19000 para o Metro Bundler
EXPOSE 19000

# Exponha a porta 19001 para o Expo DevTools
EXPOSE 19001

# Exponha a porta 19002 para o Expo DevTools Web UI
EXPOSE 19002

EXPOSE 8081

# Execute o projeto React Native com Expo
CMD ["npm", "start"]
