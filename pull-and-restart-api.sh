#!/bin/bash
git pull

npm i

pm2 restart API
