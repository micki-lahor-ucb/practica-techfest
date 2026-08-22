# Tarea 2. Explorar y comprender el proyecto

- **¿Cuál es el punto de entrada de la aplicación?**  
  El punto de entrada de la aplicacion es index.js porque se ejecuta como start

- **¿Qué comando ejecuta el script start?**  
  El script start ejecuta el comando comando: node src/index.js

- **¿Qué diferencia observa entre dependencies y devDependencies?**  
  `dependencies` Son fundamentales para que la aplicación funcione en produccion
  `devDependencies` No son fundamentales para que funcione la aplicacion, solo se requieren
  durante la etapa de desarrollo y pruebas

- **¿Qué responsabilidad parece tener cada archivo de src/?** 
config.js: Carga, centraliza y valida las variables de entorno desde el archivo .env.
data.js: Contiene y exporta los datos iniciales de los talleres
index.js: Es el archivo principal que orquesta todo el flujo invocando a los módulos y renderizandolo para la terminal
report.js: Encargado de formatear y dibujar la tabla visual en la consola usando `cli-table3`  
services.js: Gestiona las operaciones simuladas y asíncronas de sincronización.

- **¿Dónde se encuentran los datos de los talleres?**  
  En data.js, en el array exportado "workshops"

- **¿Dónde se leen las variables de entorno?**  
  En config.js mediante process.env y es gestionado por dotenv

- **¿En qué archivo se encuentra la operación asíncrona?**  
  En services.js dento de "synchronizeRegistrations"

## Tarea 3. Investigar las dependencias

| Nombre del paquete | Tipo | Para qué sirve | En qué archivo/script se utiliza | Por qué está en esa categoría |
|---|---|---|---|---|
| dotenv | dependencies | Para cargar las variables en el archivo .env al entorno de ejecución process.env | En index.js mediante import dotenv/config y en config.js | Se requiere en producción para leer configuraciones del entorno |
| chalk | dependencies | Para aplicar estilos, negritas y colores al texto mostrado en la terminal. | En index.js y report.js summary.js | Es parte de la interfaz de consola que ve el usuario final en ejecución. |
| cli-table3 | dependencies | Para generar y alinear tablas con formato ASCII/Unicode en la consola. | En report.js | Permite construir la interfaz de usuario en terminal. |
| prettier| devDependencies | Para formater automáticamente el código para mantener un estilo homogeneo | En el archivo de configuración .prettierrc| Solo sirve para mantener la calidad y estilo del código durante el desarrollo, no esta involucrado en produccion. |

### cli-table3:
Se utiliza en report.js dentro de la función printWorkshopReport y el problema que resuelve es que automatiza el formato para presentar los datos de una forma mas legible evitando formatear los espacios manualmente

## Tarea 4. Código vs Configuración
Este ejercicio demuestra que al modificar EVENT_NAME o MAX_WORKSHOPS en el archivo .env, el comportamiento y las salidas del sistema cambian sin necesidad de alterar la logica del sistema lo que permite que la misma base de código se ejecute en diferentes entornos solo cambiando sus variables de entorno.