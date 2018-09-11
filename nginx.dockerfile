### Stage 1
FROM node:10.10.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod --aot

### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/langwich /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

