# Build react client
FROM node:15.13-alpine
WORKDIR /src
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install -g npm@7.20.3
RUN npm i react-scripts
RUN npm run build
CMD ["npm","start"]
