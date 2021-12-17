#!/bin/bash
npm run build
git add .

echo "Mensagem do commit:"
read message

git commit -am "$message"
git push
