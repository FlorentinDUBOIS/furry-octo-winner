#!/bin/bash
set -e

#
# Execute all sql script in /opt/sql on funnyApp database 
#

for sql in /opt/sql/*; do \
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d funnyApp -f $sql \
; done;
