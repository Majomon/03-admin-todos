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

## Nota: Usuario por defecto
_usuario:_ test1@gooogle.com
_password:_ 123456

En la version actual de prisma, nextj y next-auth -> Tube que borrar el middleware por errores de "Adapters"
```
    "next": "14.1.4",
    "next-auth": "^5.0.0-beta.16",
    "prisma": "^5.12.1",

    https://authjs.dev/getting-started/adapters/prisma
``` 

