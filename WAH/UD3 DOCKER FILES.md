Dockerfile fitxategi bat Docker irudi bat sortzeko jarraibideak dituen testu-fitxategi bat da. Lehenetsita, Dockerfile deituko diogu eta ez diogu luzapenik emango.

### PAUSOAK
1. Dockerfile izena duen fitxategi bat sortu (luzapenik gabe)
2. Dokumentuan aginduak gehitu
3. Dokumentua erabiliz irudi bat eraiki (docker build)
4. Irudia abiarazi container bat sortzeko

``` 
# Imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /app

# Copia archivos
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
```

Construir la imagen:
```
docker build -t mi_app .
```
Crear y ejecutar el contenedor:
```
docker run -d --name mi_contenedor -p 3000:3000 mi_app
```
