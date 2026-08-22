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
# Respuestas – Tarea 3: Investigar las dependencias

## Tabla de Dependencias

## Dependencias del proyecto

### 1. chalk

**Tipo:** `dependencies`

**Propósito:**  
El paquete `chalk` permite agregar colores y diferentes estilos a los mensajes que aparecen en la consola. Por ejemplo, puede utilizarse el color verde para indicar que una operación fue exitosa, rojo para mostrar errores y amarillo para presentar advertencias. Esto facilita que el usuario pueda identificar rápidamente el tipo de mensaje que muestra la aplicación.

**Archivo o script donde se utiliza:**  
Se utiliza principalmente en `src/index.js` y `src/services.js`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `dependencies` porque forma parte del funcionamiento de la aplicación y se utiliza durante su ejecución para presentar información al usuario. Por esta razón, es una dependencia necesaria cuando la aplicación se ejecuta.

---

### 2. dotenv

**Tipo:** `dependencies`

**Propósito:**  
El paquete `dotenv` permite cargar variables de configuración almacenadas en un archivo `.env` y acceder a ellas mediante `process.env`. Esto permite mantener determinadas configuraciones separadas del código fuente y facilita el uso de diferentes configuraciones dependiendo del entorno en el que se ejecute la aplicación.

**Archivo o script donde se utiliza:**  
Se utiliza en `src/config.js`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `dependencies` porque la aplicación necesita estas variables de configuración durante su ejecución. Por lo tanto, `dotenv` forma parte de las dependencias necesarias para que el programa pueda funcionar correctamente.

---

### 3. ora

**Tipo:** `dependencies`

**Propósito:**  
El paquete `ora` permite mostrar indicadores de carga, conocidos como *spinners*, en la terminal mientras se ejecutan operaciones que pueden tardar algunos segundos. De esta manera, el usuario puede saber que la aplicación continúa trabajando y que la operación todavía no ha terminado.

**Archivo o script donde se utiliza:**  
Se utiliza en `src/index.js` y `src/services.js`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `dependencies` porque el indicador de carga forma parte de la interacción normal de la aplicación con el usuario y se utiliza durante la ejecución del programa.

---

### 4. cli-table3

**Tipo:** `dependencies`

**Propósito:**  
El paquete `cli-table3` permite crear tablas organizadas directamente en la terminal, utilizando filas, columnas, bordes y diferentes alineaciones. Esto facilita presentar información como los talleres disponibles, los cupos y los estudiantes inscritos de una manera más clara y ordenada.

**Archivo o script donde se utiliza:**  
Puede utilizarse en `src/services.js` o `src/index.js`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `dependencies` porque se utiliza durante la ejecución de la aplicación para presentar información al usuario. No es solamente una herramienta utilizada para desarrollar o mantener el código, sino que forma parte de la interfaz que utiliza la aplicación en la terminal.

---

### 5. nodemon

**Tipo:** `devDependencies`

**Propósito:**  
El paquete `nodemon` permite reiniciar automáticamente la aplicación cuando detecta cambios en los archivos del proyecto. Esto evita que el programador tenga que detener y volver a ejecutar manualmente el programa después de realizar cada modificación durante el desarrollo.

**Archivo o script donde se utiliza:**  
Se utiliza mediante el script `"dev"` definido en `package.json`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `devDependencies` porque es una herramienta utilizada principalmente durante el desarrollo del proyecto. El usuario final no necesita `nodemon` para ejecutar la aplicación, ya que su función principal es facilitar el trabajo del programador mientras desarrolla y prueba el sistema.

---

### 6. prettier

**Tipo:** `devDependencies`

**Propósito:**  
El paquete `prettier` permite formatear automáticamente el código para mantener una estructura uniforme. Se encarga de aspectos como los espacios, las sangrías, los saltos de línea y el uso de comillas. Esto ayuda a mantener el código limpio, organizado y fácil de leer.

**Archivo o script donde se utiliza:**  
Se utiliza mediante el script `"format"` definido en `package.json`.

**Razonamiento de ubicación:**  
Se encuentra dentro de `devDependencies` porque su función principal es ayudar al programador a mantener y organizar el código durante el desarrollo. No es necesario para que la aplicación pueda ejecutarse, por lo que no debe considerarse una dependencia de producción.
## 1. Análisis de `chalk`

### ¿Para qué sirve?

`chalk` es una biblioteca que permite agregar colores y estilos al texto mostrado en la terminal.

Por ejemplo, podemos mostrar un mensaje de éxito en color verde:

```javascript
import chalk from "chalk";

console.log(chalk.green("Taller creado correctamente"));
```

También podemos utilizar otros colores:

```javascript
console.log(chalk.red("Ocurrió un error"));
console.log(chalk.yellow("Advertencia: quedan pocos cupos"));
console.log(chalk.blue("Consultando talleres..."));
```

Esto permite diferenciar visualmente los diferentes tipos de mensajes.

Por ejemplo:

```text
✓ Taller creado correctamente
⚠ Advertencia: quedan pocos cupos
✗ Ocurrió un error
```

### ¿Por qué está en `dependencies`?

Porque `chalk` se utiliza durante la ejecución de la aplicación para presentar información al usuario.

La diferencia sería:

```text
Aplicación ejecutándose
        ↓
Necesita mostrar mensajes
        ↓
chalk agrega formato y colores
        ↓
Usuario observa el resultado
```

Por eso tiene sentido que pertenezca a `dependencies`.

---

## 2. Análisis de `dotenv`

### ¿Para qué sirve?

`dotenv` permite cargar variables almacenadas en un archivo `.env` y utilizarlas dentro de la aplicación mediante `process.env`.

Por ejemplo, podemos tener un archivo:

```env
APP_NAME=Sistema de Talleres
PORT=3000
DELAY_MS=1000
```

Luego podemos acceder a esos valores desde JavaScript:

```javascript
console.log(process.env.APP_NAME);
console.log(process.env.PORT);
```

El resultado sería conceptualmente:

```text
Sistema de Talleres
3000
```

### ¿Por qué es útil?

Una de las ventajas es que no necesitamos escribir directamente valores de configuración dentro del código.

En lugar de hacer:

```javascript
const port = 3000;
```

podemos utilizar:

```javascript
const port = process.env.PORT;
```

Esto permite cambiar la configuración sin modificar directamente el código fuente.

Por ejemplo:

```text
Desarrollo
    ↓
PORT=3000

Producción
    ↓
PORT=8080
```

El código puede permanecer igual y solamente cambia la configuración.

### ¿Por qué está en `dependencies`?

Porque la aplicación necesita acceder a las variables de configuración durante su ejecución.

Por eso `dotenv` se considera una dependencia que participa en el funcionamiento de la aplicación.

---

## 3. Análisis de `ora`

### ¿Para qué sirve?

`ora` permite mostrar un indicador de carga animado en la terminal.

Es especialmente útil cuando una operación tarda cierto tiempo.

Por ejemplo:

```javascript
import ora from "ora";

const spinner = ora("Cargando talleres...").start();

setTimeout(() => {
  spinner.succeed("Talleres cargados correctamente");
}, 2000);
```

Mientras la operación está ejecutándose, el usuario puede observar un indicador similar a:

```text
⠋ Cargando talleres...
```

Y cuando termina:

```text
✔ Talleres cargados correctamente
```

### ¿Qué problema resuelve?

Sin un indicador de carga, el usuario podría ejecutar una operación y pensar que el programa se quedó bloqueado:

```text
$ npm start

Cargando...
```

Con `ora`, el usuario recibe información visual de que la aplicación sigue trabajando:

```text
⠋ Consultando talleres...
```

Esto mejora la experiencia de usuario en la terminal.

### ¿Por qué está en `dependencies`?

Porque `ora` se utiliza durante la ejecución normal de la aplicación para proporcionar información visual al usuario.

---

## 4. Análisis de `nodemon`

### ¿Para qué sirve?

`nodemon` es una herramienta que facilita el desarrollo.

Normalmente, si estamos trabajando con Node.js y modificamos un archivo, tendríamos que detener y volver a iniciar manualmente la aplicación:

```text
Modificar código
      ↓
Detener aplicación
      ↓
npm start
      ↓
Volver a probar
```

Con `nodemon`, el proceso es automático:

```text
Modificar código
      ↓
nodemon detecta el cambio
      ↓
Reinicia la aplicación
      ↓
Podemos volver a probar
```

Por ejemplo, en `package.json` podemos encontrar un script similar a:

```json
{
  "scripts": {
    "dev": "nodemon src/index.js"
  }
}
```

Entonces podemos ejecutar:

```bash
npm run dev
```

Si modificamos `src/index.js`, `nodemon` detectará el cambio y reiniciará automáticamente la aplicación.

### ¿Por qué está en `devDependencies`?

Porque `nodemon` es una herramienta para el programador.

El usuario final normalmente no necesita ejecutar:

```bash
nodemon src/index.js
```

Por eso pertenece a:

```text
devDependencies
```

Su función principal es facilitar el desarrollo y las pruebas.

---

## 5. Análisis de `prettier`

### ¿Para qué sirve?

`prettier` es una herramienta que permite formatear automáticamente el código.

Por ejemplo, podríamos escribir código con un formato poco organizado:

```javascript
const usuario={nombre:"Omar",edad:25}
```

Prettier puede transformarlo en una estructura más legible:

```javascript
const usuario = {
  nombre: "Omar",
  edad: 25,
};
```

La funcionalidad del programa no cambia. Lo que cambia es la presentación y organización del código.

### ¿Qué problema resuelve?

Cuando varias personas trabajan en un mismo proyecto, cada una puede utilizar diferentes estilos:

```javascript
const nombre="Juan";
```

o:

```javascript
const nombre = "Juan";
```

Prettier ayuda a establecer un formato uniforme para todo el proyecto.

### ¿Por qué está en `devDependencies`?

Porque Prettier ayuda durante el desarrollo, pero la aplicación no necesita ejecutar Prettier para funcionar.

Podemos utilizarlo antes de guardar o subir el código al repositorio:

```bash
npm run format
```

De esta manera:

```text
Código escrito
      ↓
Prettier
      ↓
Código formateado
      ↓
Código más limpio y consistente
```

Por eso pertenece a `devDependencies`.

---

# Análisis específico de `cli-table3`

## ¿Dónde se utiliza?

`cli-table3` se utiliza en el archivo donde el proyecto construye y muestra las tablas de información en la terminal.

Según la estructura analizada, puede encontrarse en `src/services.js` o `src/index.js`, dependiendo de dónde se realice la importación y creación de la tabla.

Un ejemplo de utilización sería:

```javascript
import Table from "cli-table3";

const table = new Table({
  head: ["Taller", "Cupos", "Inscritos"],
});
```

Después podemos agregar información:

```javascript
table.push(
  ["JavaScript", 20, 15],
  ["Node.js", 25, 10],
  ["Python", 30, 22]
);
```

Y finalmente mostrarla:

```javascript
console.log(table.toString());
```

El resultado sería similar a:

```text
┌────────────┬───────┬───────────┐
│ Taller     │ Cupos │ Inscritos │
├────────────┼───────┼───────────┤
│ JavaScript │ 20    │ 15        │
│ Node.js    │ 25    │ 10        │
│ Python     │ 30    │ 22        │
└────────────┴───────┴───────────┘
```

---

## ¿Qué problema resuelve dentro del proyecto?

`cli-table3` resuelve el problema de presentar información estructurada de una manera clara dentro de la terminal.

Sin utilizar una tabla, podríamos tener algo como:

```text
JavaScript - Cupos: 20 - Inscritos: 15
Node.js - Cupos: 25 - Inscritos: 10
Python - Cupos: 30 - Inscritos: 22
```

Aunque esta información es comprensible, puede resultar más difícil de leer cuando aumenta la cantidad de talleres.

Con `cli-table3`, la información se organiza en filas y columnas:

```text
┌────────────┬───────┬───────────┐
│ Taller     │ Cupos │ Inscritos │
├────────────┼───────┼───────────┤
│ JavaScript │ 20    │ 15        │
│ Node.js    │ 25    │ 10        │
│ Python     │ 30    │ 22        │
└────────────┴───────┴───────────┘
```

De esta manera, el usuario puede comparar rápidamente los datos.

Por ejemplo, puede observar:

* JavaScript tiene 20 cupos y 15 inscritos.
* Node.js tiene 25 cupos y 10 inscritos.
* Python tiene 30 cupos y 22 inscritos.

Por lo tanto, `cli-table3` **no se encarga de almacenar los talleres ni de realizar la lógica de negocio**. Su función principal es presentar los datos de forma organizada en la terminal.

---

# ¿Por qué algunas dependencias están en `dependencies` y otras en `devDependencies`?

La diferencia principal puede entenderse mediante esta comparación:

```text
                 package.json
                      │
          ┌───────────┴───────────┐
          │                       │
    dependencies            devDependencies
          │                       │
          ↓                       ↓
 Funcionamiento de          Desarrollo del
 la aplicación              proyecto
          │                       │
          ├─ chalk                ├─ nodemon
          ├─ dotenv               └─ prettier
          ├─ ora
          └─ cli-table3
```

### `dependencies`

Son paquetes que participan en el funcionamiento de la aplicación.

Ejemplos:

```text
chalk
    → Presentación de mensajes

dotenv
    → Configuración mediante variables de entorno

ora
    → Indicadores de carga

cli-table3
    → Tablas en la terminal
```

### `devDependencies`

Son herramientas utilizadas principalmente por el desarrollador.

Ejemplos:

```text
nodemon
    → Reinicia la aplicación automáticamente

prettier
    → Formatea el código
```

---

# Conclusión

Después de investigar las dependencias, se puede observar que cada paquete tiene una responsabilidad diferente dentro del proyecto.

`chalk`, `dotenv`, `ora` y `cli-table3` están relacionados con diferentes aspectos de la ejecución de la aplicación: presentación de mensajes, configuración, indicadores de carga y organización de datos en tablas.

Por otro lado, `nodemon` y `prettier` están orientados principalmente al proceso de desarrollo. `nodemon` facilita las pruebas al reiniciar automáticamente la aplicación cuando se detectan cambios, mientras que `prettier` ayuda a mantener un formato uniforme y limpio en el código.

En resumen:

```text
dependencies
      ↓
Necesarias para el funcionamiento
de la aplicación

chalk
dotenv
ora
cli-table3


devDependencies
      ↓
Herramientas para facilitar
el desarrollo

nodemon
prettier
```

La correcta separación de estas dependencias permite mantener el proyecto organizado y facilita comprender qué paquetes son necesarios para ejecutar la aplicación y cuáles solamente ayudan al desarrollador durante la creación y mantenimiento del proyecto.

## Tarea 4: Configuración del entorno

### ¿Qué demuestra este ejercicio sobre la diferencia entre código y configuración?

Este ejercicio demuestra que **el código y la configuración cumplen funciones diferentes dentro de una aplicación**. El código contiene la lógica que indica cómo debe funcionar el programa, mientras que la configuración contiene valores que pueden cambiar dependiendo del entorno o de las necesidades de la aplicación.

Por ejemplo, imaginemos que una aplicación tiene un límite de **10 talleres** disponibles. Si este valor estuviera escrito directamente en el código, sería necesario modificar el archivo fuente cada vez que se quisiera cambiar el límite. En cambio, si el valor se almacena en un archivo `.env`, por ejemplo:

```env
MAX_TALLERES=10
```

el programa puede obtener ese valor mediante `process.env.MAX_TALLERES`. De esta manera, si posteriormente se necesita aumentar el límite a 20 talleres, solamente se modifica la configuración:

```env
MAX_TALLERES=20
```

sin necesidad de modificar la lógica principal del programa.

## Por lo tanto, este ejercicio demuestra que **separar la configuración del código permite desarrollar aplicaciones más reutilizables, mantenibles y fáciles de adaptar**. La misma aplicación puede utilizar diferentes configuraciones para distintos entornos, como desarrollo, pruebas o producción, sin tener que cambiar su código fuente.