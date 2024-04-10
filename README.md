# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker compose up -d
```
# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
2. Crear una copia del .env.template, y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando de ```npm install```
5. Ejecutar el comando de ```npm run dev```
6. Ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
``` 
7. Ejecutar el seed [para crear la base de datos local](localhost:3000/api/seed)

# Prod


# Stage