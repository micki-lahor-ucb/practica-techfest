- config.js: lee las variables de entorno con `process.env` y define valores por defecto.
- data.js: archivo que contiene el array estático de talleres 
- report.js imprime en consola una tabla con cli-table3, coloreando el estado con chalk.
- services.js: Simula una sincronización asíncrona (espera y recalcula cupos disponibles).
- index.js: es la entrada principal, carga la config, imprime el reporte de talleres
lo que hace es sincronizar las inscripciones de forma asíncrona y mostrar el resultado final.
Tarea 3 — Dependencias

- chalk: le da color al texto en la salida de la terminal.
- cli-table3: genera tablas con formato para mostrar en consola.
- dotenv: Carga variables de .env a process.env.
- nodemon (dev): reinicia el proceso automáticamente si detecta cambios.
- prettier (dev): da formato automático al código.
Tarea 4 — Configuración de Entorno

Al modificar APP_ENV y MAX_WORKSHOPS en el archivo .env, se logra cambiar el comportamiento de la aplicación sin necesidad de tocar su código fuente.
La razón de que .env esté en .gitignore es evitar subir a la repo configuraciones locales o sensibles.
# Trabajo 8 — Validación de configuración

Se pusieron validaciones en config.js que arrojan error si MAX_WORKSHOPS o
SYNC_DELAY_MS no son números válidos, por lo que la app no puede arrancar con una configuración errónea.