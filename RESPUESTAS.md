# Respuestas - Tarea 2

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