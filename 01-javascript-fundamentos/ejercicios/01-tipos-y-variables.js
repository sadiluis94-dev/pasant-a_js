/**
 * EJERCICIO 01 — Tipos, igualdad y truthy/falsy
 *
 * Implementa cada función. Borra la línea `throw new Error(...)` cuando la resuelvas.
 * Corre: node --test 01-javascript-fundamentos/tests/01-tipos-y-variables.test.js
 */

/**
 * Devuelve un string describiendo el tipo REAL del valor:
 * "null", "array", "number", "string", "boolean", "undefined", "object", "function".
 * Ojo: typeof null y typeof [] no te dan lo que quieres.
 *
 * @example tipoDe(null) // "null"
 * @example tipoDe([1,2]) // "array"
 */
export function tipoDe(valor) {
  throw new Error("No implementado");
}

/**
 * Devuelve true si el valor es "falsy" en JavaScript, false si es "truthy".
 * Restricción: NO uses un array con la lista de valores falsy. Hay una forma de una línea.
 */
export function esFalsy(valor) {
  throw new Error("No implementado");
}

/**
 * Convierte el valor a número entero.
 * - Si es un string numérico ("42", " 7 ") devuelve el número.
 * - Si es un número con decimales, lo trunca (3.9 → 3, -3.9 → -3).
 * - Si no se puede convertir (ej. "abc", undefined, objetos), devuelve null.
 * Pista: Number(), Number.isNaN(), Math.trunc()
 */
export function aEntero(valor) {
  throw new Error("No implementado");
}

/**
 * Devuelve el valor de la configuración o el valor por defecto
 * SOLO si la configuración es null o undefined.
 * Es decir, 0, "" y false son valores válidos y deben respetarse.
 *
 * @example valorOPorDefecto(0, 10) // 0
 * @example valorOPorDefecto(undefined, 10) // 10
 */
export function valorOPorDefecto(config, porDefecto) {
  throw new Error("No implementado");
}

/**
 * Suma dos montos de dinero y devuelve el resultado redondeado a 2 decimales (como number).
 * @example sumarDinero(0.1, 0.2) // 0.3   (y no 0.30000000000000004)
 * Pista: Math.round(x * 100) / 100 casi funciona... pero prueba con 1.005.
 *        Investiga Number.EPSILON.
 */
export function sumarDinero(a, b) {
  throw new Error("No implementado");
}
