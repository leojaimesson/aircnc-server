#!/bin/bash

SERVER_PORT=3333
MONGO_URI=""
DIRECTORY=$(pwd)

if [$MONGO_URI == ""]; then
echo "ERROR!"
echo "Please, modify the MONGO_URI variable with a valid URI for your database."

else
rm -rf "$DIRECTORY/.env"

echo "Creating Development Environment Variables"

cat > "$DIRECTORY/.env" <<- EOM
SERVER_PORT=${SERVER_PORT}
MONGO_URI=${MONGO_URI}
EOM

echo "Development environment variables created successfully at '${DIRECTORY}'."
fi