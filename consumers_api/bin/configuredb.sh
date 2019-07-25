#!/bin/bash

database="consumersdb"

echo "Configuring database: $database"

dropdb -U node_user consumersdb
createdb -U node_user consumersdb

psql -U node_user consumersdb < ./consumers_api/bin/sql/consumers.sql

echo "$database configured"
