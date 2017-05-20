FROM node:7.10.0-alpine
MAINTAINER hugh.loughrey@gmail.com

# Install pm2 to run Node application
RUN npm install pm2 -g

# Create Volume to hold application
VOLUME ["/var/www/amigo/api"]

# Add start script for application
ADD start.sh /start.sh
RUN chmod 755 /start.sh

ENV APP server.js

EXPOSE 3000

CMD ["/start.sh"]