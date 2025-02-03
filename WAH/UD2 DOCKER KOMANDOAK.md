``` 
# VER IMAGENES GUARDADAS
docker image 

# PARA DESCARGAR IMAGENES DE DOCKERHUB
docker pull imageName:VERSION
docker pull ubuntu:lastest

# VER CONTENEDORES INICIADOS
docker ps

# VER TODOS LOS CONTENEDORES
docker ps -a
```
# DOCKER ARIKETA
```
# ARGAZKIA DOCKERHUB-etik hartu
docker pull nginx

# IRUDI BATETIK KONTENEDORE BAT ABIARATZEKO
docker run --name mynginx -d -p 8080:80 nginx
	- d: Kontainerra abiarazteko baina kontsolara bueltatuz
	- p: portua mapeatzeko

# Kontenedorea exekutatu (makina birtual bat bezala)
docker exec -it mynginx bash
exit

# Docker stop
docker stop mynginx / docker stop KontainerID

# Docker delete
docker rm mynginx / docker rm KontainerID
```