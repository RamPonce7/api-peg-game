# Usa la imagen base de Node.js 18
FROM node:18

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia el archivo package.json y yarn.lock (si existe) al directorio de trabajo
COPY package.json yarn.lock ./

# Instala las dependencias del proyecto
RUN yarn install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto en el contenedor
EXPOSE 3030

# Define las variables de entorno
ENV NODE_ENV=production
ENV PORT=3030
ENV ENVIRONMENT=production
ENV MONGO_URL=mongodb://db-peg:27017
ENV MONGO_DB=/pegGame

# Compila la aplicación
RUN yarn build

# Comando para arrancar la aplicación
CMD [ "yarn", "start:prod" ]