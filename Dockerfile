FROM node:15-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm", "start"]