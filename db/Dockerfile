FROM postgres:9.6-alpine

ENV POSTGRES_USER amigo
ENV POSTGRES_PASSWORD 'password123'
ENV POSTGRES_DB amigo

ADD create_db_structure.sh /docker-entrypoint-initdb.d
