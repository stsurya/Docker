FROM node:18.20.4
WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]