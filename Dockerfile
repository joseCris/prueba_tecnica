FROM node:carbon-alpine
RUN mkdir /prueba_tecnica
COPY index.js /prueba_tecnica
COPY package.json /prueba_tecnica
WORKDIR /prueba_tecnica
RUN npm install
EXPOSE 8080
CMD node index.js