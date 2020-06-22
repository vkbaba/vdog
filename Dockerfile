FROM node:10 as build-stage

WORKDIR /app
COPY package*.json /app/

RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist/out --configuration production

FROM nginx:1.17
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html