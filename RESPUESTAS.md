# Respuestas – Tarea 2: Explorar y comprender el proyecto

## 1. ¿Cuál es el punto de entrada de la aplicación?

El punto de entrada de la aplicación es el archivo `src/index.js`.

Esto significa que `index.js` es el archivo que se ejecuta inicialmente cuando iniciamos la aplicación. Desde este archivo se pueden importar otros módulos, ejecutar funciones y coordinar el funcionamiento general del programa.

Por ejemplo, si el proyecto utiliza Node.js y en `package.json` encontramos:

```json
"scripts": {
  "start": "node src/index.js"
}
```

cuando ejecutamos:

```bash
npm start
```

Node.js comienza ejecutando `src/index.js`.

**Ejemplo sencillo:**

```text
npm start
     ↓
node src/index.js
     ↓
index.js
     ↓
Carga config.js
     ↓
Utiliza services.js
     ↓
Obtiene los datos
     ↓
Muestra el resultado
```

Por lo tanto, `index.js` funciona como el punto desde donde se inicia y se coordina la aplicación.

---

## 2. ¿Qué comando ejecuta el script `start`?

El script `start` ejecuta:

```bash
node src/index.js
```

Esto normalmente se encuentra definido dentro del archivo `package.json`.

Por ejemplo:

```json
{
  "scripts": {
    "start": "node src/index.js"
  }
}
```

Cuando el desarrollador escribe:

```bash
npm start
```

npm busca el script llamado `start` y ejecuta el comando que está asociado a él.

En este caso:

```text
npm start
    ↓
"start": "node src/index.js"
    ↓
Node.js ejecuta src/index.js
```

La ventaja de utilizar scripts es que no necesitamos recordar todos los comandos manualmente. Podemos simplemente utilizar `npm start`.

---

## 3. ¿Qué diferencia observa entre `dependencies` y `devDependencies`?

La principal diferencia está en el propósito de los paquetes.

### `dependencies`

Son las dependencias que la aplicación necesita para funcionar. Generalmente son necesarias también cuando la aplicación se ejecuta en un entorno de producción.

Por ejemplo:

```json
"dependencies": {
  "chalk": "...",
  "dotenv": "...",
  "ora": "..."
}
```

Algunos ejemplos de su utilización serían:

* `chalk`: permite agregar colores y estilos al texto mostrado en la terminal.
* `dotenv`: permite cargar variables de entorno desde un archivo `.env`.
* `ora`: permite mostrar indicadores de carga en la consola.

Por ejemplo, utilizando `chalk`:

```javascript
console.log(chalk.green("Operación realizada correctamente"));
```

El objetivo sería mostrar un mensaje con formato en la terminal.

### `devDependencies`

Son herramientas que ayudan durante el desarrollo del proyecto, pero que normalmente no son necesarias para ejecutar la aplicación final.

Por ejemplo:

```json
"devDependencies": {
  "nodemon": "...",
  "prettier": "..."
}
```

* `nodemon`: reinicia automáticamente la aplicación cuando detecta cambios en los archivos.
* `prettier`: ayuda a mantener el código con un formato consistente.

Podemos resumirlo así:

```text
dependencies
    ↓
Necesarias para que la aplicación funcione

devDependencies
    ↓
Herramientas que ayudan a desarrollar y mantener la aplicación
```

Por ejemplo, `nodemon` puede ser muy útil mientras programamos, pero el usuario final no necesita que `nodemon` esté ejecutándose para utilizar la aplicación.

---

## 4. ¿Qué responsabilidad parece tener cada archivo de `src/`?

Los archivos parecen estar organizados siguiendo una separación de responsabilidades. Esto permite que cada archivo tenga una función específica y evita colocar todo el código dentro de un único archivo.

### `src/index.js`

Es el archivo principal de la aplicación.

Su responsabilidad parece ser:

* Iniciar la aplicación.
* Coordinar el flujo principal.
* Importar los diferentes módulos.
* Ejecutar las funciones necesarias.
* Mostrar información al usuario mediante la consola.

Podríamos considerarlo como el **orquestador** de la aplicación.

Por ejemplo:

```javascript
import { obtenerTalleres } from "./services.js";

const talleres = await obtenerTalleres();

console.log(talleres);
```

En este ejemplo `index.js` no necesariamente contiene toda la lógica para obtener los talleres. Simplemente utiliza una función proporcionada por `services.js`.

---

### `src/config.js`

Su responsabilidad es centralizar la configuración de la aplicación y acceder a las variables de entorno.

Por ejemplo:

```javascript
const API_URL = process.env.API_URL;
```

Esto permite evitar colocar directamente información de configuración dentro del código.

Un archivo `.env` podría contener:

```env
API_URL=https://api.ejemplo.com
```

De esta manera, la aplicación puede obtener la dirección desde `process.env.API_URL`.

La ventaja es que podemos cambiar la configuración sin modificar directamente el código fuente.

---

### `src/services.js`

Este archivo parece encargarse principalmente de la lógica relacionada con los datos y las operaciones asíncronas.

Por ejemplo, podría contener una función como:

```javascript
export async function obtenerTalleres() {
  // Obtener o procesar los talleres
}
```

También puede simular una comunicación con un servidor mediante una espera:

```javascript
await new Promise(resolve => setTimeout(resolve, 1000));
```

Esto representa una operación que tarda cierto tiempo, como podría ocurrir al consultar una API.

Por lo tanto, `services.js` puede verse como una capa que se encarga de realizar operaciones o servicios que necesita la aplicación.

---

### `src/data.js`

Si el proyecto dispone de este archivo, su responsabilidad sería almacenar los datos iniciales o de prueba.

Por ejemplo:

```javascript
export const talleres = [
  {
    id: 1,
    nombre: "JavaScript Básico",
    cupos: 20
  },
  {
    id: 2,
    nombre: "Node.js",
    cupos: 15
  }
];
```

En este caso, `data.js` contiene la información de los talleres, mientras que otros archivos pueden utilizar esos datos.

La separación podría quedar así:

```text
index.js
   ↓
Coordina la aplicación

services.js
   ↓
Realiza operaciones con los datos

data.js
   ↓
Contiene los datos

config.js
   ↓
Contiene la configuración
```

---

## 5. ¿Dónde se encuentran los datos de los talleres?

Los datos de los talleres se encuentran almacenados en la estructura de datos definida por el proyecto, principalmente en `src/data.js` si este módulo existe.

Por ejemplo:

```javascript
const talleres = [
  {
    id: 1,
    nombre: "Introducción a JavaScript",
    instructor: "Carlos",
    cupos: 30
  },
  {
    id: 2,
    nombre: "Node.js",
    instructor: "Ana",
    cupos: 20
  }
];
```

Aquí `talleres` es un arreglo que contiene diferentes objetos.

Cada objeto representa un taller y puede tener información como:

* `id`: identificador del taller.
* `nombre`: nombre del taller.
* `instructor`: persona responsable.
* `cupos`: cantidad de espacios disponibles.

Es importante diferenciar **dónde se almacenan los datos** de **dónde se procesan**.

Por ejemplo:

```text
data.js
   ↓
Almacena los talleres

services.js
   ↓
Procesa/consulta los talleres

index.js
   ↓
Utiliza el resultado y lo muestra
```

Si en la versión específica del proyecto los datos están directamente dentro de `services.js`, entonces se debe indicar que están definidos allí.

---

## 6. ¿Dónde se leen las variables de entorno?

Las variables de entorno se leen en `src/config.js` mediante `process.env`.

Por ejemplo:

```javascript
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;
```

Las variables pueden estar definidas en un archivo `.env`:

```env
PORT=3000
API_URL=https://api.ejemplo.com
```

Entonces:

```javascript
process.env.PORT
```

obtendría:

```text
3000
```

y:

```javascript
process.env.API_URL
```

obtendría:

```text
https://api.ejemplo.com
```

Esto es útil porque permite separar la configuración del código.

Por ejemplo, en lugar de escribir directamente:

```javascript
const API_URL = "https://api.ejemplo.com";
```

podemos utilizar:

```javascript
const API_URL = process.env.API_URL;
```

Así, la configuración puede cambiar dependiendo del entorno, por ejemplo:

```text
Desarrollo → API de desarrollo
Pruebas     → API de pruebas
Producción  → API de producción
```

---

## 7. ¿En qué archivo se encuentra la operación asíncrona?

La operación asíncrona se encuentra en `src/services.js`.

Una operación asíncrona es aquella que puede tardar cierto tiempo en completarse y que no necesariamente bloquea inmediatamente la ejecución del resto del programa.

En este proyecto se puede simular este comportamiento utilizando `Promise`, `setTimeout` y `async/await`.

Por ejemplo:

```javascript
function esperar() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos");
    }, 1000);
  });
}
```

Después podemos utilizar `async/await`:

```javascript
async function obtenerDatos() {
  const resultado = await esperar();
  console.log(resultado);
}
```

En este caso:

```text
obtenerDatos()
      ↓
esperar()
      ↓
Espera 1 segundo
      ↓
Promise se resuelve
      ↓
"Datos recibidos"
```

Este comportamiento puede utilizarse para simular lo que ocurriría al realizar una petición a una API o consultar un servidor.

Por ejemplo, una función de servicio podría tener una estructura similar a:

```javascript
async function obtenerTalleres() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return talleres;
}
```

La palabra `async` indica que la función trabaja de manera asíncrona y `await` permite esperar el resultado de una operación que devuelve una `Promise`.

---

# Conclusión

Después de explorar el proyecto, se puede observar que existe una separación básica de responsabilidades entre los diferentes archivos.

`index.js` funciona como punto de entrada y coordina el flujo principal. `config.js` centraliza la configuración y las variables de entorno. `services.js` contiene operaciones relacionadas con la lógica y el procesamiento asíncrono, mientras que `data.js`, cuando está presente, contiene los datos iniciales de los talleres.

Esta organización facilita la comprensión y mantenimiento del proyecto porque cada archivo tiene una responsabilidad determinada.

En términos generales, el flujo de la aplicación puede representarse de la siguiente manera:

```text
             npm start
                 ↓
        src/index.js
                 ↓
      ┌──────────┴──────────┐
      ↓                     ↓
 src/config.js        src/services.js
      ↓                     ↓
Variables de entorno     Procesamiento
                            ↓
                        src/data.js
                            ↓
                    Datos de talleres
                            ↓
                    Resultado a index.js
                            ↓
                     Mostrar información
```

Esta estructura también permite comprender una idea fundamental en el desarrollo de software: **no se debe colocar toda la lógica de una aplicación en un solo archivo**, sino dividirla en módulos con responsabilidades claras.
