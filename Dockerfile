FROM node:15.13-alpine
WORKDIR /brealy-react-app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build