import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  pedidosActivos,
  totalPedido,
  idsConTotalMayorA,
  facturacionTotal,
  clientesUnicos,
  hayPendientes,
  contarPorEstado,
  productoMasVendido,
} from "../ejercicios/03-arrays.js";

const pedidos = [
  {
    id: 1,
    cliente: "Lucía",
    estado: "entregado",
    items: [
      { producto: "Teclado", precio: 50, cantidad: 1 },
      { producto: "Mouse", precio: 20, cantidad: 2 },
    ],
  },
  {
    id: 2,
    cliente: "Andrés",
    estado: "pendiente",
    items: [{ producto: "Monitor", precio: 300, cantidad: 1 }],
  },
  {
    id: 3,
    cliente: "Lucía",
    estado: "cancelado",
    items: [{ producto: "Mouse", precio: 20, cantidad: 10 }],
  },
  {
    id: 4,
    cliente: "Bruno",
    estado: "enviado",
    items: [
      { producto: "Mouse", precio: 20, cantidad: 1 },
      { producto: "Cable USB", precio: 5, cantidad: 4 },
    ],
  },
  {
    id: 5,
    cliente: "Andrés",
    estado: "pendiente",
    items: [],
  },
];

describe("regla: sin bucles", () => {
  it("03-arrays.js no usa for/while", () => {
    const codigo = readFileSync(
      new URL("../ejercicios/03-arrays.js", import.meta.url),
      "utf8",
    )
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    assert.doesNotMatch(codigo, /\b(for|while)\s*\(/, "Usa métodos de array, no bucles");
  });
});

describe("pedidosActivos", () => {
  it("excluye cancelados", () => {
    assert.deepEqual(
      pedidosActivos(pedidos).map((p) => p.id),
      [1, 2, 4, 5],
    );
  });
});

describe("totalPedido", () => {
  it("suma precio * cantidad", () => {
    assert.equal(totalPedido(pedidos[0]), 90);
    assert.equal(totalPedido(pedidos[3]), 40);
  });
  it("un pedido sin items vale 0", () => {
    assert.equal(totalPedido(pedidos[4]), 0);
  });
});

describe("idsConTotalMayorA", () => {
  it("filtra por total", () => {
    assert.deepEqual(idsConTotalMayorA(pedidos, 50), [1, 2, 3]);
    assert.deepEqual(idsConTotalMayorA(pedidos, 1000), []);
  });
});

describe("facturacionTotal", () => {
  it("suma totales sin cancelados", () => {
    assert.equal(facturacionTotal(pedidos), 430);
    assert.equal(facturacionTotal([]), 0);
  });
});

describe("clientesUnicos", () => {
  it("devuelve clientes únicos ordenados", () => {
    assert.deepEqual(clientesUnicos(pedidos), ["Andrés", "Bruno", "Lucía"]);
  });
  it("no muta el array original", () => {
    const copia = structuredClone(pedidos);
    clientesUnicos(pedidos);
    assert.deepEqual(pedidos, copia);
  });
});

describe("hayPendientes", () => {
  it("detecta pendientes", () => {
    assert.equal(hayPendientes(pedidos), true);
    assert.equal(hayPendientes([pedidos[0]]), false);
  });
});

describe("contarPorEstado", () => {
  it("agrupa y cuenta", () => {
    assert.deepEqual(contarPorEstado(pedidos), {
      entregado: 1,
      pendiente: 2,
      cancelado: 1,
      enviado: 1,
    });
  });
});

describe("productoMasVendido", () => {
  it("ignora cancelados", () => {
    // Mouse: 2 + 1 = 3 (los 10 del cancelado no cuentan), Cable USB: 4
    assert.equal(productoMasVendido(pedidos), "Cable USB");
  });
});
