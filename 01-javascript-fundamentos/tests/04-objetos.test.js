import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  formatearUsuario,
  actualizarUsuario,
  elegir,
  omitir,
  agregarAlCarrito,
  leerRuta,
} from "../ejercicios/04-objetos.js";

/** Congela profundamente un objeto: si la función intenta mutarlo, lanza TypeError. */
const congelar = (obj) => {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") congelar(v);
  });
  return Object.freeze(obj);
};

describe("formatearUsuario", () => {
  it("con email", () => {
    assert.equal(
      formatearUsuario({ nombre: "Ana", apellido: "Pérez", email: "ana@mail.com" }),
      "Ana Pérez (ana@mail.com)",
    );
  });
  it("sin email", () => {
    assert.equal(formatearUsuario({ nombre: "Ana", apellido: "Pérez" }), "Ana Pérez");
  });
});

describe("actualizarUsuario", () => {
  it("devuelve un objeto nuevo con los cambios", () => {
    const original = congelar({ nombre: "Ana", edad: 20 });
    const nuevo = actualizarUsuario(original, { edad: 21 });
    assert.deepEqual(nuevo, { nombre: "Ana", edad: 21 });
    assert.notEqual(nuevo, original);
  });
});

describe("elegir / omitir", () => {
  const obj = congelar({ a: 1, b: 2, c: 3 });
  it("elegir", () => {
    assert.deepEqual(elegir(obj, ["a", "c"]), { a: 1, c: 3 });
    assert.deepEqual(elegir(obj, ["z"]), {});
  });
  it("omitir", () => {
    assert.deepEqual(omitir(obj, ["b"]), { a: 1, c: 3 });
    assert.deepEqual(omitir(obj, []), { a: 1, b: 2, c: 3 });
  });
});

describe("agregarAlCarrito", () => {
  const carrito = congelar({
    items: [{ id: 1, nombre: "Teclado", cantidad: 1 }],
    actualizado: false,
  });

  it("incrementa cantidad si el item existe", () => {
    const nuevo = agregarAlCarrito(carrito, { id: 1, nombre: "Teclado" });
    assert.deepEqual(nuevo, {
      items: [{ id: 1, nombre: "Teclado", cantidad: 2 }],
      actualizado: true,
    });
  });

  it("agrega con cantidad 1 si no existe", () => {
    const nuevo = agregarAlCarrito(carrito, { id: 2, nombre: "Mouse" });
    assert.deepEqual(nuevo.items, [
      { id: 1, nombre: "Teclado", cantidad: 1 },
      { id: 2, nombre: "Mouse", cantidad: 1 },
    ]);
  });

  it("devuelve nuevas referencias (clave en React)", () => {
    const nuevo = agregarAlCarrito(carrito, { id: 2, nombre: "Mouse" });
    assert.notEqual(nuevo, carrito);
    assert.notEqual(nuevo.items, carrito.items);
  });
});

describe("leerRuta", () => {
  const datos = { a: { b: { c: 5, d: 0 } }, lista: [{ x: "hola" }] };
  it("lee rutas anidadas", () => {
    assert.equal(leerRuta(datos, "a.b.c"), 5);
    assert.equal(leerRuta(datos, "lista.0.x"), "hola");
  });
  it("respeta valores falsy existentes", () => {
    assert.equal(leerRuta(datos, "a.b.d", "N/A"), 0);
  });
  it("devuelve el valor por defecto si la ruta no existe", () => {
    assert.equal(leerRuta(datos, "a.x.c", "N/A"), "N/A");
    assert.equal(leerRuta(datos, "z"), undefined);
  });
});
