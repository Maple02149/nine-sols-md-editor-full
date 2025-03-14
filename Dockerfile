FROM node

EXPOSE 3000

WORKDIR /app

COPY ["package*.json", "."]

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "start" ]