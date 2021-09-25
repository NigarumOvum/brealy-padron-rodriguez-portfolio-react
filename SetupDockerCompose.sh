#!/bin/sh
echo Installing form Docker Compose
docker-compose build .
docker-compose run react-portfolio
