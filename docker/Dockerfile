FROM node:latest

WORKDIR /app_frontend

COPY package*.json ./
RUN npm install

COPY . .


RUN npm run build
EXPOSE 4173

CMD [ "npm", "run", "preview" ]