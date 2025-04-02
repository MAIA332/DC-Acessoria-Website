FROM node:18-alpine

# Define diretório de trabalho no container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install  --legacy-peer-deps

# Copia o restante do código para o container
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta interna 3000 do container
EXPOSE 3000

# Comando para rodar o projeto
CMD ["npm", "run", "start"]