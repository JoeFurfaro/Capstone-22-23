FROM node:16

WORKDIR /usr/src/app

RUN mkdir src
COPY ./src/package.json ./src/package.json

RUN mkdir serve
COPY ./serve/package.json ./serve/package.json

WORKDIR /usr/src/app/src
RUN npm install

WORKDIR /usr/src/app/serve
RUN npm install

WORKDIR /usr/src/app
COPY ./src ./src
COPY ./serve ./serve

WORKDIR /usr/src/app/src
RUN npm run build

WORKDIR /usr/src/app
RUN cp -r ./src/build ./serve/build

WORKDIR /usr/src/app/serve

CMD [ "node", "app.js" ]