/**
 * EJERCICIO 02 — Funciones
 *
 * Arrow functions, parámetros por defecto, rest params y funciones de orden superior.
 */

/**
 * Devuelve un saludo. Si no se pasa nombre, usa "mundo".
 * Si se pasa idioma "en" usa "Hello", si no, "Hola".
 * @example saludar() // "Hola, mundo!"
 * @example saludar("Ana", "en") // "Hello, Ana!"
 */
export const saludar = (nombre, idioma) => {
  throw new Error("No implementado");
};

/**
 * Recibe cualquier cantidad de números y devuelve el promedio.
 * Si no recibe ninguno, devuelve 0.
 * @example promedio(1, 2, 3) // 2
 */
export const promedio = (...numeros) => {
  throw new Error("No implementado");
};

/**
 * Función de orden superior: recibe una función `fn` y un número `n`,
 * y devuelve una NUEVA función que, al llamarse, ejecuta `fn` `n` veces
 * y devuelve un array con los resultados.
 *
 * @example
 *   const tirarDado = () => 4;
 *   const tirar3 = repetir(tirarDado, 3);
 *   tirar3(); // [4, 4, 4]
 */
export const repetir = (fn, n) => {
  throw new Error("No implementado");
};

/**
 * Crea un contador (closure). Devuelve un objeto con tres funciones:
 *  - incrementar(): suma 1 y devuelve el nuevo valor
 *  - decrementar(): resta 1 y devuelve el nuevo valor
 *  - valor(): devuelve el valor actual
 * El valor inicial es `inicio` (por defecto 0).
 * El contador NO debe ser accesible desde afuera (no expongas una propiedad `count`).
 *
 * Este concepto (closures) es la base de los hooks de React. Tómatelo en serio.
 */
export const crearContador = (inicio) => {
  throw new Error("No implementado");
};

/**
 * Compone funciones de izquierda a derecha (pipe).
 * @example
 *   const doble = x => x * 2;
 *   const masUno = x => x + 1;
 *   pipe(doble, masUno)(5) // 11  → doble(5)=10, masUno(10)=11
 *   pipe()(5) // 5
 */
export const pipe = (...fns) => {
  throw new Error("No implementado");
};
