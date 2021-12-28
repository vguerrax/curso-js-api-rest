# API REST
Este projeto foi criado para estudo da linguagem Javascript seguindo o curso "Javascript e Typescript do básico ao avançado" da Udemy.

## Depêndencias
* NodeJS 16.13.0+
* NPM 8.1.0+

### Base de Dados
Para execução deste projeto é necessário que tenha um banco MariaDB devidamente configurado.

### Váriaveis de Ambiente
Para execução deste projeto é necessário que as seguintes váriaveis de ambiente estejam configuradas, seja pelo arquivo .env ou por linha de comando.
```
DATABASE=<nome_do_schema>
DATABASE_HOST=<host>
DATABASE_PORT=<port>
DATABASE_USERNAME=<username>
DATABASE_PASSWORD=<password>

TOKEN_SECRET=<token_secret>
TOKEN_EXPIRATION=1d

APP_URL=<url_aplicacao>
APP_PORT=<porta_aplicacao>
CORS_WHITELIST=<URLs_para_liberacao_no_CORS_separadas_por_virgula>
```
