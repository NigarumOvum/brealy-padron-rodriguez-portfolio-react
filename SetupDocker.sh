#!/bin/sh
echo Installing form Docker 
docker build --tag brealy-react-portfolio .
docker run --publish 3000:3000 brealy-react-portfolio



