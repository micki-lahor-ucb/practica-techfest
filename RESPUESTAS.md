\## Tarea 2 - Explorar y comprender el proyecto
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



\## Tarea 3 - Investigar las dependencias



| Paquete | Tipo | Propósito | ¿Dónde se usa? | ¿Por qué está en ese tipo? |

|---|---|---|---|---|

| chalk | dependencies | Colorear la salida en consola para mejorar la legibilidad. | En index.js y report.js para dar formato a los mensajes. | Es necesario para la interfaz de usuario en consola, incluso en producción. |

| cli-table3 | dependencies | Crear tablas en la consola para mostrar datos estructurados. | En report.js para mostrar la lista de talleres. | Es parte de la presentación de la información, necesaria en producción. |

| dotenv | dependencies | Cargar variables de entorno desde un archivo .env. | En index.js con import 'dotenv/config'. | Se necesita en producción para leer la configuración del entorno. |

| nodemon | devDependencies | Reinicia automáticamente la aplicación cuando hay cambios en el código durante el desarrollo. | No se usa directamente en el código, sino como script dev en package.json. | Solo útil durante el desarrollo, no en producción. |

| prettier | devDependencies | Formatea el código automáticamente para mantener un estilo consistente. | Se ejecuta con el script format. | Solo necesario para desarrollo, no para la ejecución de la app. |



\*\*¿Dónde se utiliza cli-table3 y qué problema resuelve dentro del proyecto?\*\*

Se utiliza en src/report.js para generar una tabla con los datos de los talleres. Resuelve el problema de mostrar información tabular de forma legible y organizada en la consola.



\## Tarea 4 - Configuración del entorno



Al cambiar EVENT\_NAME en el archivo .env, el nombre del evento mostrado en la aplicación cambió de "TechFest UCB" a "Fabricio Fest" sin tocar ningún archivo de código.



Al cambiar MAX\_WORKSHOPS de 3 a 2, la aplicación pasó de mostrar 3 talleres a mostrar solo 2 en la tabla, también sin modificar data.js ni la lógica del reporte.



Esto demuestra que la configuración (variables de entorno) y la lógica del programa están separadas: se puede cambiar el comportamiento de la app simplemente editando el .env, sin necesidad de tocar el código fuente. Esto es útil porque permite usar la misma aplicación en distintos entornos (desarrollo, producción, etc.) solo cambiando la configuración.


## Tarea 6 - Configurar el tiempo de sincronización



Probé la aplicación con SYNC\_DELAY=1200 y SYNC\_DELAY=3000. Con 3000 la pausa antes de "Sincronización completada" fue claramente más larga y notoria.



La función synchronizeRegistrations usa await wait(delay), donde wait() devuelve una Promise que se resuelve con setTimeout. Aunque parece una espera, no es una espera bloqueante como un bucle que consume CPU. El await solo pausa la ejecución de esa función asíncrona en particular, cediendo el control al event loop de Node.js mientras tanto. Esto significa que, si hubiera otras tareas u operaciones esperando ejecutarse, Node podría atenderlas durante esa espera, en vez de quedar completamente congelado. Es la diferencia entre una espera "activa" (bloqueante) y una espera "pasiva" basada en el event loop (no bloqueante).

