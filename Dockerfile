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
VOLUME /var/www/html
RUN chown -R www-data:www-data /var/www/html
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]