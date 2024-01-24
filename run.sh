#!/bin/bash

# Load NVM
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use the version of node specified in .nvmrc
nvm use

# Start the dev script
npm run dev