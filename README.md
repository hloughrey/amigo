# Amigo Web Service
This is a web service made up of two docker containers:
* db - (postgres)
* web - (nodejs)

The orchestration of which is controlled by a docker-compose file.

## Getting Started

1. Select the *environment* you want to run and edit the `web.enironment` setting in the `docker-compose.yml` file to one of the settings below:
| Environment   | Setting         | Description                                                 |
| ------------- |:---------------:| :---------------------------------------------------------- |
| Production    | `NODE_ENV=PROD` | Runs API using PM2 with watch flag disabled                 |
| Development   | `NODE_ENV=DEV`  | Runs API using PM2 with watch flag enabled                  |
| Testing       | `NODE_ENV=TEST` | Runs an automated test suite on the API using mocha & chai  |

2. Run `docker-compose build`
3. Run `docker-compose up`

## Calling th API
The API runs on `http://localhost:3000` and has 3 methods

* POST message - `http://localhost:3000/messages/FOOBAR`
* GET messages - `http://localhost:3000/messages/`
* GET message - `http://localhost:3000/messages/1`

## Inspect Postgres database
Once th environment is up and running you can inspect the database by inspecting the docker container for the databases host:
* `docker inspect amigo_db_1`
and connecting to the database via PGAdmin using the `IPAddress` and the following username and password:

* Username: amigo
* password: password123
