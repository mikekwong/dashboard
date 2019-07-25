#!/bin/bash

database="consumersdb"

echo "Configuing database: $database"

dropdb -U node_user consumersdb
createdb -U node_user consumersdb

psql -U node_user consumersdb < ./bin/sql/consumers.sql

echo "$database configured"
