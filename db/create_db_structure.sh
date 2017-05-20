#! /bin/sh

psql -d amigo -c "CREATE SCHEMA amigo;"
psql -d amigo -c "
    CREATE TABLE amigo.contacts (
        id SERIAL PRIMARY KEY,
        message TEXT
    );"