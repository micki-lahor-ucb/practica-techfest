# Respuestas 

## Tarea 2. Explorar y comprender el proyecto
* **¿Cuál es el punto de entrada de la aplicación?** El archivo `src/index.js` (definido en el `package.json` como el punto principal).
* **¿Qué comando ejecuta el script start?** Ejecuta `node src/index.js` utilizando `node`.
* **¿Qué diferencia observa entre dependencies y devDependencies?** Las `dependencies` son necesarias para que la aplicación funcione en producción, mientras que las `devDependencies` son herramientas de soporte para el desarrollo (como nodemon).
* **¿Qué responsabilidad parece tener cada archivo de src/?** `index.js` coordina la ejecución principal; `config.js` gestiona las variables de entorno; `data.js` provee o simula los datos; `loader.js` procesa los datos y `reporter.js` genera la salida en consola.
* **¿Dónde se encuentran los datos de los talleres?** En el archivo `src/data.js`.
* **¿Dónde se leen las variables de entorno?** En el archivo `src/config.js` usando `process.env`.
* **¿En qué archivo se encuentra la operación asíncrona?** Se encuentra en `src/loader.js` (usando `setTimeout` o promesas para simular la sincronización).