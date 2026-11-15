/**
 * EJERCICIO 04 — Objetos, desestructuración, spread e inmutabilidad
 *
 * ⚠️ NINGUNA función puede mutar sus parámetros. Los tests lo verifican.
 */

/**
 * Recibe un usuario y devuelve un string "Nombre Apellido (email)".
 * Usa desestructuración en la firma de la función.
 * Si no tiene email, devuelve solo "Nombre Apellido".
 */
export function formatearUsuario(usuario) {
  throw new Error("No implementado");
}

/**
 * Devuelve un NUEVO usuario con los cambios aplicados.
 * @example actualizarUsuario({ nombre: "Ana", edad: 20 }, { edad: 21 })
 *          // { nombre: "Ana", edad: 21 }
 */
export function actualizarUsuario(usuario, cambios) {
  throw new Error("No implementado");
}

/**
 * Devuelve un NUEVO objeto solo con las claves indicadas (si existen).
 * @example elegir({ a: 1, b: 2, c: 3 }, ["a", "c"]) // { a: 1, c: 3 }
 * Pista: Object.entries / Object.fromEntries
 */
export function elegir(objeto, claves) {
  throw new Error("No implementado");
}

/**
 * Devuelve un NUEVO objeto sin las claves indicadas.
 * @example omitir({ a: 1, b: 2, c: 3 }, ["b"]) // { a: 1, c: 3 }
 */
export function omitir(objeto, claves) {
  throw new Error("No implementado");
}

/**
 * Agrega un item a un carrito de forma inmutable.
 * carrito: { items: [{ id, nombre, cantidad }], actualizado: false }
 * - Si el item (por id) ya existe, incrementa su cantidad.
 * - Si no existe, lo agrega con cantidad 1.
 * - Devuelve un NUEVO carrito con `actualizado: true`.
 *
 * Así exactamente se actualiza el estado en React. Este ejercicio es importante.
 */
export function agregarAlCarrito(carrito, item) {
  throw new Error("No implementado");
}

/**
 * Lee de forma segura una propiedad anidada usando una ruta "a.b.c".
 * Si algo en el camino no existe, devuelve `porDefecto`.
 * @example leerRuta({ a: { b: { c: 5 } } }, "a.b.c") // 5
 * @example leerRuta({ a: {} }, "a.b.c", "N/A")       // "N/A"
 */
export function leerRuta(objeto, ruta, porDefecto = undefined) {
  throw new Error("No implementado");
}
