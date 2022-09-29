# syntax=docker/dockerfile:1
FROM node:18-alpine3.15
WORKDIR /front
COPY package*.json /
RUN npm install
COPY . .