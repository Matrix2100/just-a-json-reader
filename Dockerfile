FROM node:17.8.0-alpine3.15
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .