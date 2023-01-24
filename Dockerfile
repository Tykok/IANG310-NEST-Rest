FROM node:16-alpine

WORKDIR /srv/app
COPY . .

CMD npm run start:dev