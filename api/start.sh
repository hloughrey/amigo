#!/bin/ash

cd /var/www/amigo/api
npm install

if [ $NODE_ENV == "PROD" ]
then
    echo 'RUNNING PROD ENVIRONMENT'
    npm run start
elif [ $NODE_ENV == "DEV"  ]
then
    echo 'RUNNING DEV ENVIRONMENT'
    npm run dev
else
    echo 'RUNNING TEST ENVIRONMENT'
    ash -c "sleep 5; npm run test"
fi

