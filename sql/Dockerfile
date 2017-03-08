FROM postgres

RUN mkdir -p /opt/sql
COPY ./jee.postgresql.sql /opt/sql/1.struct.sql
COPY ./sample.sql /opt/sql/2.data.sql

COPY in-docker_start.sh docker-entrypoint-initdb.d/