# Módulo 1 — JavaScript para desarrolladores C#

Ya sabes programar: variables, bucles, clases y lógica no son nuevos para ti. Lo que tienes que
aprender son **las diferencias** y **las trampas**. Este módulo está pensado justamente así.

> Ejecuta cualquier ejemplo guardándolo en un `.js` y corriendo `node archivo.js`,
> o escribe `node` en la terminal para abrir una consola interactiva (REPL). Para salir: `.exit`.

---

## 1. Tipado dinámico

```csharp
// C#
int edad = 25;
edad = "veinticinco"; // ❌ error de compilación
```

```js
// JavaScript
let edad = 25;
edad = "veinticinco"; // ✅ válido (y peligroso)
```

En JS **los valores tienen tipo, las variables no**. Tipos primitivos:

| Tipo | Ejemplo | Equivalente aproximado en C# |
|---|---|---|
| `number` | `42`, `3.14`, `NaN`, `Infinity` | `double` (¡no hay `int`!) |
| `bigint` | `123n` | `BigInteger` |
| `string` | `"hola"`, `'hola'`, `` `hola ${x}` `` | `string` |
| `boolean` | `true`, `false` | `bool` |
| `undefined` | variable sin valor | — (no existe) |
| `null` | ausencia intencional | `null` |
| `symbol` | `Symbol("id")` | — |

Todo lo demás (arrays, funciones, fechas…) es **`object`**.

```js
typeof 42;          // "number"
typeof "hola";      // "string"
typeof undefined;   // "undefined"
typeof null;        // "object"  ← bug histórico del lenguaje, memorízalo
typeof [];          // "object"  → usa Array.isArray([]) para saber si es array
0.1 + 0.2;          // 0.30000000000000004 → nunca uses number para dinero sin redondear
```

> 💡 Más adelante aprenderás **TypeScript**, que le agrega tipos estáticos a JS. Te vas a sentir en casa.

---

## 2. `let`, `const` y (no uses) `var`

```js
const PI = 3.14;      // no se puede reasignar (como readonly)
let contador = 0;     // se puede reasignar
var viejo = 1;        // ❌ NO USAR: tiene scope de función, no de bloque. Causa bugs.
```

**Regla del equipo:** usa `const` por defecto. Usa `let` solo si vas a reasignar.

⚠️ `const` no hace inmutable al objeto, solo impide reasignar la variable:

```js
const user = { nombre: "Ana" };
user.nombre = "Luis";   // ✅ válido
user = {};              // ❌ TypeError
```

---

## 3. Igualdad: `===` siempre

```js
0 == "0";        // true   😱 (convierte tipos)
0 === "0";       // false  ✅ (compara valor Y tipo)
null == undefined;  // true
null === undefined; // false
```

**Regla del equipo:** siempre `===` y `!==`. ESLint te lo va a marcar.

### Truthy / Falsy
En C# un `if` exige un `bool`. En JS cualquier valor se convierte. Son **falsy**:
`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. **Todo lo demás es truthy**
(incluido `"0"`, `[]` y `{}`).

```js
if (usuario) { ... }        // "si usuario existe"
const nombre = input || "Anónimo";   // si input es falsy → "Anónimo"
const cantidad = input ?? 10;        // solo si input es null/undefined → 10 (respeta el 0)
```

---

## 4. Funciones: ciudadanas de primera clase

```js
// Declaración clásica
function sumar(a, b) {
  return a + b;
}

// Arrow function (como las lambdas de C#)
const restar = (a, b) => a - b;

// Parámetros por defecto
const saludar = (nombre = "mundo") => `Hola, ${nombre}!`;

// Rest parameters (como params en C#)
const sumarTodo = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);

// Funciones como valores: se pasan, se guardan, se devuelven
const operar = (fn, x, y) => fn(x, y);
operar(sumar, 2, 3); // 5
```

⚠️ JS **no valida la cantidad de argumentos**: `sumar(1)` devuelve `NaN` (1 + undefined) sin error.

---

## 5. Arrays — LINQ, pero con otros nombres

Esta tabla vale oro:

| LINQ (C#) | JavaScript | Devuelve |
|---|---|---|
| `Select` | `.map(x => ...)` | nuevo array |
| `Where` | `.filter(x => ...)` | nuevo array |
| `Aggregate` / `Sum` | `.reduce((acc, x) => ..., inicial)` | un valor |
| `First` / `FirstOrDefault` | `.find(x => ...)` | elemento o `undefined` |
| `Any` | `.some(x => ...)` | boolean |
| `All` | `.every(x => ...)` | boolean |
| `Contains` | `.includes(x)` | boolean |
| `OrderBy` | `.toSorted((a, b) => a - b)` | nuevo array |
| `ForEach` | `.forEach(x => ...)` | nada |
| `Distinct` | `[...new Set(arr)]` | nuevo array |
| `GroupBy` | `Object.groupBy(arr, x => key)` | objeto |

```js
const productos = [
  { nombre: "Teclado", precio: 50, stock: 3 },
  { nombre: "Mouse", precio: 20, stock: 0 },
  { nombre: "Monitor", precio: 300, stock: 5 },
];

const totalInventario = productos
  .filter((p) => p.stock > 0)
  .map((p) => p.precio * p.stock)
  .reduce((acc, valor) => acc + valor, 0); // 1650
```

⚠️ **Trampa clásica:** `.sort()` *muta* el array original y por defecto **ordena como texto**:
```js
[10, 9, 1].sort();               // [1, 10, 9]  😱
[10, 9, 1].toSorted((a, b) => a - b); // [1, 9, 10] ✅ y no muta el original
```

---

## 6. Objetos — sin clases de por medio

En C# necesitas una clase para tener un objeto. En JS los creas directo (*object literal*):

```js
const usuario = {
  nombre: "Ana",
  edad: 28,
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
};

usuario.nombre;          // "Ana"
usuario["edad"];         // 28 (acceso dinámico, como un Dictionary)
usuario.email = "a@b.c"; // agregar propiedades en cualquier momento
delete usuario.email;    // eliminarlas
usuario.direccion?.calle; // optional chaining: undefined en vez de NullReferenceException
```

### Desestructuración y spread (los vas a ver en TODO el código React)

```js
const { nombre, edad } = usuario;          // extrae propiedades
const [primero, segundo] = [10, 20];       // extrae de arrays

const actualizado = { ...usuario, edad: 29 }; // copia con cambios (inmutabilidad)
const todos = [...lista1, ...lista2];         // concatenar arrays
```

### Recorrer objetos
```js
Object.keys(usuario);    // ["nombre", "edad", "saludar"]
Object.values(usuario);
Object.entries(usuario); // [["nombre","Ana"], ["edad",28], ...]
```

⚠️ Objetos y arrays se pasan **por referencia** (como las clases en C#). Para no mutar el
original, crea copias con spread. Esto es *crítico* en React.

---

## 7. Strings

```js
const nombre = "Ana";
`Hola ${nombre}, tienes ${2 + 3} mensajes`; // interpolación (como $"..." en C#)
"hola".toUpperCase();
"  hola  ".trim();
"a,b,c".split(",");      // ["a","b","c"]
["a","b"].join("-");     // "a-b"
"hola mundo".includes("mundo");
"hola".at(-1);           // "a"
"5".padStart(3, "0");    // "005"
```

---

## 8. Módulos (los `using`/`namespace` de JS)

```js
// math.js
export function sumar(a, b) { return a + b; }
export const PI = 3.14;
export default function multiplicar(a, b) { return a * b; }

// app.js
import multiplicar, { sumar, PI } from "./math.js";
```

Así están hechos los ejercicios: tú implementas y **exportas** funciones, los tests las **importan**.

---

👉 Ahora ve a [`ejercicios/`](./ejercicios) y lee la sección siguiente.

## 📝 Tarea 01 — Ejercicios

**Tiempo estimado:** 1–2 semanas
**Rama:** `tarea/01-fundamentos`

Hay 4 archivos en `ejercicios/`. Cada función tiene un comentario explicando qué debe hacer y
lanza `Error("No implementado")`. Tu trabajo es implementarlas **sin modificar los tests**.

```bash
npm run test:01                                       # corre todos los tests del módulo
node --test 01-javascript-fundamentos/tests/03-arrays.test.js   # solo un archivo
npm run test:watch                                    # modo watch mientras trabajas
```

Al principio verás todo en rojo ❌. Ese es el punto: **TDD**. Ve de a uno hasta tenerlo todo en verde ✅.

### Reglas
1. Nada de `var`. Nada de `==`.
2. En `03-arrays.js` está **prohibido** usar `for` / `while`: solo métodos de array (`map`, `filter`, `reduce`, …).
3. En `04-objetos.js` **no se puede mutar** los parámetros de entrada.
4. Un commit por ejercicio resuelto (ej. `feat(01): implementa ejercicios de arrays`).
5. Abre el PR cuando todos los tests pasen. En la descripción, cuéntame qué fue lo que más te costó.

### Preguntas para responder en el PR (sin buscar, con tus palabras)
1. ¿Por qué `typeof null` es `"object"` y cómo verificarías si algo es `null`?
2. ¿Diferencia entre `||` y `??`? Da un ejemplo donde den resultados distintos.
3. ¿Por qué en React se insiste tanto en no mutar objetos/arrays? (Intuición, aún no vimos React.)
