1¿Cuál es el punto de entrada de la aplicación?

El punto de entrada es "src/index.js". Es el archivo que se ejecuta primero cuando se corre el proyecto, y desde ahí se llama a todo lo demás.



2¿Qué comando ejecuta el script start?

El script "start" ejecuta "node src/index.js", o sea que corre directamente ese archivo con Node.



3¿Qué diferencia observas entre dependencies y devDependencies?

Las "dependencies" (chalk, cli-table3, dotenv) son paquetes que la aplicación necesita para funcionar, se usan dentro del código en tiempo de ejecución. Las "devDependencies" (nodemon, prettier) solo se usan mientras uno está desarrollando, para cosas como reiniciar el servidor automáticamente o formatear el código, pero no son necesarias si la app se sube a producción.



4¿Qué responsabilidad parece tener cada archivo de src/?

\- "index.js": es el archivo principal, arma y ejecuta todo el flujo de la app.

\- "config.js": se encarga de leer las variables de entorno y armar la configuración general.

\- "data.js": guarda la información de los talleres, como si fuera una base de datos de prueba.

\- "report.js": se encarga de mostrar la tabla de talleres en la consola con formato.

\- "services.js": tiene la lógica para sincronizar los datos, incluyendo la parte asíncrona.



5¿Dónde se encuentran los datos de los talleres?

Están en "src/data.js", dentro del arreglo "workshops".



6¿Dónde se leen las variables de entorno?

Se leen en "src/config.js", usando "process.env" para cada variable (por ejemplo "process.env.EVENT\_NAME").



7¿En qué archivo se encuentra la operación asíncrona?

En "src/services.js", en la función "synchronizeRegistrations", que usa "async" y "await" para simular una espera antes de devolver los datos sincronizados.

