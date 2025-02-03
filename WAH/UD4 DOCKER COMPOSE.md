**Ontzi anitzeko aplikazioak kudeatzeko**: Docker Compose-ek laguntzen du aplikazio batean hainbat zerbitzu edo ontzi (adibidez, web zerbitzari bat eta aplikazio bat) koordinatzen eta elkarrekin funtzionatzen.

docker-compose.yml
```
version: '3'

services:
  web:
    image: nginx:latest
    container_name: mynginx
    volumes:
      - ./html:/usr/share/nginx/html
    ports:
      - "8080:80"
    networks:
      - webnet
  app:
    image: node:14
    container_name: myapp
    working_dir: /usr/src/app
    volumes:
      - ./app:/usr/src/app
    command: ["npm", "start"]
    networks:
      - webnet

networks:
  webnet:
```

Compose hasieratzeko
```
docker-compose up
```

Docker gelditzeko
```
docker-compose down
```