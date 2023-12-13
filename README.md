# Operaciones asíncronas

- [Operaciones asíncronas](#operaciones-asíncronas)
  - [Promesas](#promesas)
  - [`async/await`](#asyncawait)
    - [Características](#características)
  - [Elección entre Promesas y `async/await`](#elección-entre-promesas-y-asyncawait)
    - [Compatibilidad](#compatibilidad)
    - [Estilo de código](#estilo-de-código)
    - [Estructuras de control](#estructuras-de-control)
  - [Ejercicios](#ejercicios)
    - [Ejercicio 1](#ejercicio-1)
    - [Ejercicio 2](#ejercicio-2)
    - [Ejercicio 3](#ejercicio-3)
    - [Ejercicio 4](#ejercicio-4)
    - [Ejercicio 5](#ejercicio-5)
  - [Ejemplos de peticiones con fetch](#ejemplos-de-peticiones-con-fetch)
    - [Con promesas](#con-promesas)
    - [Con `async/await`](#con-asyncawait)

## Promesas

Las promesas en JavaScript son una herramienta para manejar operaciones asíncronas.

Una promesa es un objeto que representa la finalización (correcta o incorrectamente) de una operación asíncrona y su resultado asociado. Puede tener uno de los siguientes estados:

1. **Pendiente (*pending*)**: El estado inicial cuando se crea la promesa. La operación aún no se ha completado ni fallado.
2. **Resulta (*Fulfilled*)**: La operación se completó con éxito y se proporciona el resultado.
3. **Rechazada (*Rejected*)**: La operación ha fallado y se proporciona un motivo del fallo.

Las promesas tienen dos partes:

- **Productor (*Producer*)**: Es una función que se ejecuta cuando se crea la promesa. Recibe dos funciones como argumentos: `resolve` y `reject`. El productor realiza la tarea asíncrona y, cuando finaliza, llama a `resolve` con el resultado o a `reject` con el error.

```js
// Función que devuelve una promesa con un timeout
function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.8; // Simula una operación exitosa en un 80% de los casos
      if (exito) {
        resolve('Operación completada con éxito');
      } else {
        reject('La operación falló');
      }
    }, 2000); // Simula un tiempo de espera de 2 segundos
  });
}
```

- **Consumidor(*Consumer*)**: Es el código que maneja el resultado o el error de la promesa. Se realiza mediante los métodos `.then()` para manejar la resolución y `.catch()` para manejar el rechazo.

```js
operacionAsincrona()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
```

## `async/await`

`async/await` es una característica de JavaScript introducida en ES8 que proporciona una forma más clara de escribir código asíncrono. Estas palabras clave permiten trabajar con promesas de una manera más legible, evitando el anidamiento de `callbacks` y mejorando la estructura del código.

Un posible ejemplo básico de cómo se usaría `async/await`:

```js
//función asíncrona que retorna una promesa
async function operacionAsincronaAsync() {
  try {
    const resultado = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = Math.random() < 0.8; // Simula una operación exitosa en un 80% de los casos
        if (exito) {
          resolve('Operación completada con éxito');
        } else {
          reject('La operación falló');
        }
      }, 2000); // Simula un tiempo de espera de 2 segundos
    });

    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

// Llamada a la función asíncrona
operacionAsincronaAsync();
```

### Características

- **Funciones asíncronas (`async`)**:
  - Se utiliza la palabra clave `async` antes de la palabra clave `function` en la definición de la función.
  - Esto indica que la función retornará una promesa y puede contener `await`.
- **Palabra clave `await`**:
  - Se utiliza dentro de una función asíncrona para esperar la resolución de una promesa.
  - Hace que la ejecución de la función se detenga hasta que la promesa se resuelva o se rechace.
- **Control de errores (`try/catch`)**:
  - `try` hace referencia al fragmento de código que se va a intentar ejecutar.
  - `catch` se ejecuta en caso de que el código dentro del bloque `try` lance un error.
- Las funciones que utilizan `async` siempre retornarn una promesa, incluso si no hay una palabra clave `return`.

## Elección entre Promesas y `async/await`

### Compatibilidad

`async/await` es una herramienta más reciente y puede ser que no sea [compatible con entornos o navegadores más antiguos](https://caniuse.com/async-functions). Las promesas son más compatibles.

### Estilo de código

`async/await` suele considerarse más legible y fácil de entender, especialmente para operaciones asíncronas complejas o secuenciales.

### Estructuras de control

`async/await` utiliza `try/catch` para manejar errores, lo que puede hacer que el código sea más limpio y estructurado.

## Ejercicios

Todos los ejercicios que se muestran a continuación se puede realizar usando promesas y `async/await`.

### Ejercicio 1

Crea una promesa que se resuelva después de 2 segundos.

<details>
  <summary>Solución</summary>

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/b401d4294cb5930fbbfd42981445e292ffe0e9b1/ejercicio1.js#L1-L5

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/b401d4294cb5930fbbfd42981445e292ffe0e9b1/ejercicio1.js#L12-L17

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/b401d4294cb5930fbbfd42981445e292ffe0e9b1/ejercicio1.js#L23-L32

</details>

### Ejercicio 2

Crea una promesa que reciba un número por parámetro y que se resuelva si el número pasado por parámetro es par y se rechace si es impar.

<details>
  <summary>Solución</summary>

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/286cbe98400df47c15c743aba64cd856cd561717/ejercicio2.js#L1-L9

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/286cbe98400df47c15c743aba64cd856cd561717/ejercicio2.js#L16-L21

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/e84f2f669e450887068a3b4baa4ad8605291c4ef/ejercicio2.js#L27-L36

</details>

### Ejercicio 3

Simula una operación asíncrona que se resuelve después de 1 segundo y una vez que se devuelva está, se devuelva otra.

<details>
  <summary>Solución</summary>

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/80f5d14ad9a9f93e65fbed6827090c0f0ba8e5ac/ejercicio3.js#L1-L5

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/80f5d14ad9a9f93e65fbed6827090c0f0ba8e5ac/ejercicio3.js#L7-L12

https://github.com/ipererol/Operaciones-Asincronas-JS/blob/80f5d14ad9a9f93e65fbed6827090c0f0ba8e5ac/ejercicio3.js#L14-L25

</details>

### Ejercicio 4

Simular dos operaciones asíncronas que se resuelven después de un segundo cada una y posteriormente se ejecuten ambas promesas simultáneamente con [`Promise.all`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

### Ejercicio 5

Crea una promesa que se resuelve después de un tiempo de espera aleatorio (entre 1 y 5 segundos)

## Ejemplos de peticiones con fetch

### Con promesas

```js
const obtenerDatosConPromesas = () => {
  return fetch('https://api.example.com/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Datos obtenidos:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

obtenerDatosConPromesas();
```

### Con `async/await`

```js
// Función asincrónica que utiliza fetch con async/await
const obtenerDatosConAsyncAwait = async () => {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const data = await response.json();
    console.log('Datos obtenidos:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Llamada a la función asincrónica
obtenerDatosConAsyncAwait();
```
