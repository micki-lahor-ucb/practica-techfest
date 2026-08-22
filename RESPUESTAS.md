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

## Tarea 3: Dependencias

| Nombre | Tipo | Descripción | Archivo en que se usa | Justificación de categoría |
| :--- | :--- | :--- | :--- | :--- |
| **dotenv** | dependencies | Carga variables de entorno desde `.env` hacia `process.env` | `src/config.js` | Necesario en producción para leer configuraciones. |
| **chalk** | dependencies | Aplica estilos y colores al texto en consola | `src/report.js` | Modifica la interfaz visual de la app activa. |
| **cli-table3** | dependencies | Genera tablas con formato de texto en la terminal | `src/report.js` | Formatea los datos visibles del reporte final. |
| **nodemon** | devDependencies | Reinicia la app automáticamente ante cambios de código | Script `npm run dev` | Solo sirve para agilizar el desarrollo local. |
| **prettier** | devDependencies | Formatea y limpia el estilo de código | Script de formato | No afecta la lógica de producción. |

### Uso específico de `cli-table3`:
Se utiliza en `src/report.js`. Resuelve el problema de alinear y tabular manualmente los objetos de los talleres, mostrándolos en bordes bien dibujados y columnas estructuradas en la terminal.

## Tarea 4: Configuración vs Código
* **Reflexión:** Modificar `.env` permite alterar la cantidad de elementos o los textos de la app sin reescribir la lógica ni cambiar el código fuente en `src/`. Esto separa los parámetros cambiantes del comportamiento interno del programa.

## Tarea 6: Operaciones Asíncronas
* **Explicación:** Node.js es monohilo pero utiliza el Event Loop y las APIs internas del sistema. Operaciones como `setTimeout` o peticiones HTTP se delegan en segundo plano, permitiendo que el hilo principal no quede congelado durante la espera.