import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  saludar,
  promedio,
  repetir,
  crearContador,
  pipe,
} from "../ejercicios/02-funciones.js";

describe("saludar", () => {
  it("usa valores por defecto", () => {
    assert.equal(saludar(), "Hola, mundo!");
  });
  it("saluda por nombre en español", () => {
    assert.equal(saludar("Ana"), "Hola, Ana!");
  });
  it("saluda en inglés", () => {
    assert.equal(saludar("Ana", "en"), "Hello, Ana!");
    assert.equal(saludar(undefined, "en"), "Hello, mundo!");
  });
});

describe("promedio", () => {
  it("calcula el promedio de n números", () => {
    assert.equal(promedio(1, 2, 3), 2);
    assert.equal(promedio(10), 10);
    assert.equal(promedio(1, 2), 1.5);
  });
  it("devuelve 0 sin argumentos", () => {
    assert.equal(promedio(), 0);
  });
});

describe("repetir", () => {
  it("devuelve una función", () => {
    assert.equal(typeof repetir(() => 1, 2), "function");
  });
  it("ejecuta fn n veces al llamarse, no antes", () => {
    let llamadas = 0;
    const fn = () => ++llamadas;
    const ejecutar = repetir(fn, 3);
    assert.equal(llamadas, 0, "no debe ejecutar fn hasta que se llame");
    assert.deepEqual(ejecutar(), [1, 2, 3]);
  });
  it("con n = 0 devuelve array vacío", () => {
    assert.deepEqual(repetir(() => 1, 0)(), []);
  });
});

describe("crearContador", () => {
  it("empieza en 0 por defecto", () => {
    assert.equal(crearContador().valor(), 0);
  });
  it("incrementa y decrementa", () => {
    const c = crearContador(5);
    assert.equal(c.incrementar(), 6);
    assert.equal(c.incrementar(), 7);
    assert.equal(c.decrementar(), 6);
    assert.equal(c.valor(), 6);
  });
  it("contadores independientes no comparten estado", () => {
    const a = crearContador();
    const b = crearContador();
    a.incrementar();
    assert.equal(a.valor(), 1);
    assert.equal(b.valor(), 0);
  });
  it("solo expone las tres funciones (estado privado)", () => {
    assert.deepEqual(Object.keys(crearContador()).sort(), [
      "decrementar",
      "incrementar",
      "valor",
    ]);
  });
});

describe("pipe", () => {
  const doble = (x) => x * 2;
  const masUno = (x) => x + 1;
  it("compone de izquierda a derecha", () => {
    assert.equal(pipe(doble, masUno)(5), 11);
    assert.equal(pipe(masUno, doble)(5), 12);
  });
  it("sin funciones devuelve el valor tal cual", () => {
    assert.equal(pipe()(5), 5);
  });
});
