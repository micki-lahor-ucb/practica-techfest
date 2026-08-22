# Respuestas - Tarea 2

- **¿Cuál es el punto de entrada de la aplicación?**  
  El punto de entrada es `src/index.js`, ya que en `package.json` el script `"start": "node src/index.js"` lo indica asi.

- **¿Qué comando ejecuta el script start?**  
  `node src/index.js`

- **¿Qué diferencia observa entre dependencies y devDependencies?**  
  `dependencies` son paquetes necesarios para que la aplicación funcione en produccioon.  
  `devDependencies` son paquetes que solo se necesitan durante el desarrollo (por ejemplo, herramientas de formateo, recarga automática, etc.) y no son requeridos en el entorno de produccion.

- **¿Qué responsabilidad parece tener cada archivo de src/?**  
  - `index.js`: Punto de entrada, orquesta la ejecucin en si: carga config, datos, imprime reporte y llama a la sincronización.  
  - `config.js`: Centraliza la lectura de variables de entorno y las expone como un objeto de configuración.  
  - `data.js`: Contiene los datos estáticos de los talleres.  
  - `report.js`: Contiene la función para imprimir una tabla con los talleres usando `cli-table3`.  
  - `services.js`: Contiene funciones auxiliares (como `wait`) y la logica de sincronización asincrona.

- **¿Dónde se encuentran los datos de los talleres?**  
  En `src/data.js`, en el arreglo exportado `workshops`.

- **¿Dónde se leen las variables de entorno?**  
  En `src/config.js`, mediante `process.env`. Además, en `index.js` se importa `'dotenv/config'` para cargar el archivo `.env`.

- **¿En qué archivo se encuentra la operación asíncrona?**  
  En `src/services.js`, la función `synchronizeRegistrations` es `async` y usa `await wait(1200)`.