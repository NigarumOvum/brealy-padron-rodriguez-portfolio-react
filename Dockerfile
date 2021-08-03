# Dockerfile for React client

# Build react client
FROM node:16-alpine3.14

# Working directory be app
# WORKDIR /usr/src/app
WORKDIR /

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 4000

CMD ["npm","start"]

RUN echo "localhost:4000"