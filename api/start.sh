#!/bin/ash

cd /var/www/amigo/api
npm install
pm2 start -x $APP --name="amigo-api" --no-daemon --watch
