# Respuestas 

## Tarea 2. Explorar y comprender el proyecto
* **¿Cuál es el punto de entrada de la aplicación?** El archivo `src/index.js` (definido en el `package.json` como el punto principal).
* **¿Qué comando ejecuta el script start?** Ejecuta `node src/index.js` utilizando `node`.
* **¿Qué diferencia observa entre dependencies y devDependencies?** Las `dependencies` son necesarias para que la aplicación funcione en producción, mientras que las `devDependencies` son herramientas de soporte para el desarrollo (como nodemon).
* **¿Qué responsabilidad parece tener cada archivo de src/?** `index.js` coordina la ejecución principal; `config.js` gestiona las variables de entorno; `data.js` provee o simula los datos; `loader.js` procesa los datos y `reporter.js` genera la salida en consola.
* **¿Dónde se encuentran los datos de los talleres?** En el archivo `src/data.js`.
* **¿Dónde se leen las variables de entorno?** En el archivo `src/config.js` usando `process.env`.
* **¿En qué archivo se encuentra la operación asíncrona?** Se encuentra en `src/loader.js` (usando `setTimeout` o promesas para simular la sincronización).

## Tarea 3. Investigar las dependencias

| Nombre del paquete | Tipo (Dependencies / DevDependencies) | ¿Para qué sirve? (Mis propias palabras) | ¿En qué archivo/script se utiliza? | ¿Por qué está en esa categoría? |
| :--- | :--- | :--- | :--- | :--- |
| **dotenv** | dependencies | Carga variables de entorno desde un archivo .env a process.env. | `src/config.js` | Es necesario en tiempo de ejecución para leer la configuración del entorno. |
| **nodemon** | devDependencies | Reinicia automáticamente la app al detectar cambios en el código durante el desarrollo. | Script `dev` en `package.json` | Solo se usa para facilitar la programación local, no se requiere en producción. |
| **chalk** | dependencies | Permite dar color y formato al texto que se imprime en la consola. | `src/reporter.js` (o reportes) | Se encarga de la interfaz visual de salida de la aplicación. |
| **cli-table3** | dependencies | Permite crear tablas formateadas en formato de texto para la consola. | `src/reporter.js` | Resuelve el problema de mostrar los datos de los talleres de forma ordenada y tabular. |