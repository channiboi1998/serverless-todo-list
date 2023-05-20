FROM node:alpine
WORKDIR '/serverless-todo-list'
COPY ./package.json /serverless-todo-list
RUN npm install
COPY . .
CMD npm start
