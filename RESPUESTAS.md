# Respuestas del Laboratorio - TechFest

## Tarea 2: Análisis del Proyecto
* **Punto de entrada:** `src/index.js` (o el que defina `package.json`).
* **Comando del script `start`:** `node src/index.js`.
* **Diferencia entre dependencies y devDependencies:** `dependencies` son librerías necesarias para el funcionamiento del código en producción (ej. `dotenv`, `chalk`). `devDependencies` solo se usan durante la fase de desarrollo (ej. linters, herramientas de prueba).
* **Responsabilidad de los archivos en `src/`:**
  * `config.js`: Carga y centraliza las variables de entorno.
  * `data.js`: Almacena o gestiona el listado base de talleres.
  * `services.js`: Contiene la lógica síncrona/asíncrona del negocio (simulación de API o sincronización).
  * `report.js`: Formatea la salida gráfica o en consola del informe.
  * `index.js`: Punto de entrada que coordina el flujo principal de ejecución.
* **Ubicación de datos de talleres:** En `src/data.js`.
* **Lectura de variables de entorno:** En `src/config.js` mediante la librería `dotenv`.
* **Operación asíncrona:** En `src/services.js` (función `synchronizeRegistrations` usando `setTimeout`/`Promises`).