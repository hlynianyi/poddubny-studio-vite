# FROM node:18-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD ["npm", "start"]
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["nodemon", "index.js"]