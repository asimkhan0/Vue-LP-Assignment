FROM node:12.2.0-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
ADD package*.json ./

# install project dependencies
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
# copy project files and folders to the current working directory (i.e. 'app' folder)
ADD . .

RUN npm run test:unit

# build app for production with minification
# RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve" ]