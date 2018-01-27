#!/usr/bin/env sh

# Clone the docdash repository and generate jsdoc documentation.

# Check if  the documentation theme exists.
if [ ! -d "./docs/docdash" ]; then
git clone https://github.com/clenemt/docdash.git ./docs/docdash
fi 

# Compile jsdoc
jsdoc ./dist/*.js -t ./docs/docdash -d ./docs