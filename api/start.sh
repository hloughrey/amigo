#!/bin/ash

if [ -z "$NODE_ENV" ]; then
    export NODE_ENV=development
fi

cd /var/www/amigo/api
npm install
pm2 start -x $APP --name="amigo-api" --no-daemon --watch
