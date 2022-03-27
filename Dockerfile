FROM node:12
WORKDIR /prueba_tecnica
COPY index.js /prueba_tecnica
COPY package.json /prueba_tecnica
RUN npm install
EXPOSE 8080
CMD ["npm","start"]