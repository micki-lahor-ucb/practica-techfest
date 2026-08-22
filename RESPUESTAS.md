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

# Respuestas - Tarea 3  
| Paquete | Tipo | Proposito | ¿Donde se usa? | ¿Por que esta en ese tipo? |
| :--- | :--- | :--- | :--- | :--- |
| **chalk** | dependencies | Colorear la salida en consola para mejorar la legibilidad. | En `index.js` y `report.js` para dar formato a los mensajes. | Es necesario para la interfaz de usuario en consola, incluso en produccion. |
| **cli-table3** | dependencies | Crear tablas en la consola para mostrar datos estructurados. | En `report.js` para mostrar la lista de talleres. | Es parte de la presentacion de la informacion, necesaria en produccion. |
| **dotenv** | dependencies | Cargar variables de entorno desde un archivo `.env`. | En `index.js` con `import 'dotenv/config'`. | Se necesita en produccion para leer la configuracion del entorno. |
| **nodemon** | devDependencies | Reinicia automaticamente la aplicacion cuando hay cambios en el codigo durante el desarrollo. | No se usa directamente en el codigo, sino como script `dev` en `package.json`. | Solo util durante el desarrollo, no en produccion. |
| **prettier** | devDependencies | Formatea el codigo automaticamente para mantener un estilo consistente. | Se ejecuta con el script `format`. | Solo necesario para desarrollo, no para la ejecucion de la app. |

---

### Pregunta especifica sobre `cli-table3`

**¿Donde se utiliza `cli-table3` y que problema resuelve dentro del proyecto?**

Se utiliza en `src/report.js` para generar una tabla con los datos de los talleres. Resuelve el problema de mostrar informacion tabular de forma legible y organizada en la consola.