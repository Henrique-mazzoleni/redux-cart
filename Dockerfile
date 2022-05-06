FROM node:16.14.2-alpine3.15
WORKDIR /usr/src/app

COPY pack*.json ./
RUN npm install
RUN mv node_modules/ ../
COPY . .

CMD ["npm", "start"]