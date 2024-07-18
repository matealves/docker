FROM node:20.10.0

WORKDIR /tmp/react

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build
RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

VOLUME /var/www/html

WORKDIR /

RUN rm -rf /tmp/react