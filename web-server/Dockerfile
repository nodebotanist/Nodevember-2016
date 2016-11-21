from node:argon

WORKDIR /data
ADD data/server.js server/server.js
ADD data/package.json package.json
RUN npm install i -g nodemon
RUN npm install

EXPOSE 1337:1337

CMD nodemon server/server.js