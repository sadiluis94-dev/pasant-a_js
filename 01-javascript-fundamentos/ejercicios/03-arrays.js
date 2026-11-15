/**
 * EJERCICIO 03 — Arrays (LINQ en JavaScript)
 *
 * ⚠️ PROHIBIDO usar for, while o do-while. Solo métodos de array.
 *
 * Todas las funciones reciben un array de pedidos con esta forma:
 * {
 *   id: number,
 *   cliente: string,
 *   estado: "pendiente" | "enviado" | "entregado" | "cancelado",
 *   items: [{ producto: string, precio: number, cantidad: number }]
 * }
 * Mira el archivo de test para ver datos de ejemplo.
 */

/** Devuelve solo los pedidos NO cancelados. */
export function pedidosActivos(pedidos) {
  throw new Error("No implementado");
}

/** Devuelve el total (precio * cantidad sumado) de UN pedido. */
export function totalPedido(pedido) {
  throw new Error("No implementado");
}

/** Devuelve un array con los ids de los pedidos cuyo total supera `minimo`. */
export function idsConTotalMayorA(pedidos, minimo) {
  throw new Error("No implementado");
}

/** Devuelve la facturación total: suma de totales de los pedidos NO cancelados. */
export function facturacionTotal(pedidos) {
  throw new Error("No implementado");
}

/**
 * Devuelve la lista de clientes únicos, ordenada alfabéticamente.
 * No debe mutar el array original.
 */
export function clientesUnicos(pedidos) {
  throw new Error("No implementado");
}

/** Devuelve true si algún pedido está "pendiente". */
export function hayPendientes(pedidos) {
  throw new Error("No implementado");
}

/**
 * Devuelve un objeto con la cantidad de pedidos por estado.
 * @example { pendiente: 2, enviado: 1, entregado: 1, cancelado: 1 }
 * Solo incluye los estados que aparecen.
 */
export function contarPorEstado(pedidos) {
  throw new Error("No implementado");
}

/**
 * Devuelve el nombre del producto más vendido (mayor suma de cantidades)
 * considerando solo pedidos NO cancelados.
 * Pista: flatMap + reduce.
 */
export function productoMasVendido(pedidos) {
  throw new Error("No implementado");
}
