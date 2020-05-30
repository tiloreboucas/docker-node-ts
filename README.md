# docker-node-ts

Repo de teste para docker / node / ts

## Versões Utilizadas

-   OSX El Captain Version 10.11.6 (15G31)
-   Docker version 19.03.1, build 74b1e89
-   docker-compose version 1.24.1, build 4667896b
-   docker-machine version 0.16.1, build cce350d7

## Rotina de teste

Ao executar o build da aplicação na configuração citada acima, após o build ele para nos logs e não executa o log do `app.listen` e não e possivel acessar o navegador em `http://localhost:3000`

```
$ docker-compose up --build
```
