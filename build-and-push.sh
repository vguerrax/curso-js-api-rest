#!/bin/bash
npm run build
git add .
read message
echo "Mensagem do commit:"
git commit -am "$message"
git push
