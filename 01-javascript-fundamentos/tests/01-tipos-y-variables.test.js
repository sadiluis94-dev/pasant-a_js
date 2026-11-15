import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  tipoDe,
  esFalsy,
  aEntero,
  valorOPorDefecto,
  sumarDinero,
} from "../ejercicios/01-tipos-y-variables.js";

describe("tipoDe", () => {
  it("detecta null y arrays correctamente", () => {
    assert.equal(tipoDe(null), "null");
    assert.equal(tipoDe([]), "array");
    assert.equal(tipoDe([1, 2]), "array");
  });
  it("detecta tipos primitivos", () => {
    assert.equal(tipoDe(1), "number");
    assert.equal(tipoDe("a"), "string");
    assert.equal(tipoDe(true), "boolean");
    assert.equal(tipoDe(undefined), "undefined");
  });
  it("detecta objetos y funciones", () => {
    assert.equal(tipoDe({}), "object");
    assert.equal(tipoDe(() => {}), "function");
  });
});

describe("esFalsy", () => {
  it("reconoce todos los valores falsy", () => {
    for (const v of [false, 0, -0, 0n, "", null, undefined, NaN]) {
      assert.equal(esFalsy(v), true, `${String(v)} debería ser falsy`);
    }
  });
  it("reconoce valores truthy engañosos", () => {
    for (const v of ["0", "false", [], {}, " ", -1]) {
      assert.equal(esFalsy(v), false, `${JSON.stringify(v)} debería ser truthy`);
    }
  });
});

describe("aEntero", () => {
  it("convierte strings numéricos", () => {
    assert.equal(aEntero("42"), 42);
    assert.equal(aEntero(" 7 "), 7);
  });
  it("trunca decimales", () => {
    assert.equal(aEntero(3.9), 3);
    assert.equal(aEntero(-3.9), -3);
  });
  it("devuelve null si no es convertible", () => {
    assert.equal(aEntero("abc"), null);
    assert.equal(aEntero(undefined), null);
    assert.equal(aEntero({}), null);
  });
});

describe("valorOPorDefecto", () => {
  it("respeta 0, '' y false", () => {
    assert.equal(valorOPorDefecto(0, 10), 0);
    assert.equal(valorOPorDefecto("", "x"), "");
    assert.equal(valorOPorDefecto(false, true), false);
  });
  it("usa el valor por defecto en null/undefined", () => {
    assert.equal(valorOPorDefecto(undefined, 10), 10);
    assert.equal(valorOPorDefecto(null, 10), 10);
  });
});

describe("sumarDinero", () => {
  it("evita errores de punto flotante", () => {
    assert.equal(sumarDinero(0.1, 0.2), 0.3);
    assert.equal(sumarDinero(19.99, 5.01), 25);
    assert.equal(sumarDinero(1.005, 0), 1.01);
  });
});
