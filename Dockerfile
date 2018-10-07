# Stage 1
FROM node:10 as node
WORKDIR /usr/src/app

# Cache npm
COPY package.json package.json
RUN npm install --verbose

COPY . .

ARG CONFIGURATION=production
RUN node_modules/@angular/cli/bin/ng build --configuration=${CONFIGURATION}


# Stage 2
FROM nginx:1.13-alpine
COPY --from=node /usr/src/app/dist/langwich /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
