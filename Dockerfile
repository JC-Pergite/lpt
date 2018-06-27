# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.6 as node
WORKDIR /src/app
COPY Dockerfile package*.json ./
RUN npm install --only=production
COPY ./ /src/app
EXPOSE 8080
CMD [ "npm", "start" ]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13
COPY --from=node src/app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# # Stage 0, based on Node.js, to build and compile Angular
# FROM node:8.6 as node
# WORKDIR /src
# COPY package*.json /src/
# RUN npm install
# COPY ./ /src/
# ARG env=prod
# RUN npm run build -- --prod --environment $env

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.13
# COPY --from=node /dist/ /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf