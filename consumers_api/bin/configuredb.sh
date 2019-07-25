#!/bin/bash

database="consumersdb"

echo "Configuring database: $database"

dropdb -U node_user consumersdb
createdb -U node_user consumersdb

psql -U node_user consumersdb < ./bin/sql/consumers.sql
f
echo "$database configured"
