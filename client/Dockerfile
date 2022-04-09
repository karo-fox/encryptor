# syntax=docker/dockerfile:1
FROM node:17-alpine3.14
WORKDIR /front
COPY package*.json /
RUN npm install
COPY . .