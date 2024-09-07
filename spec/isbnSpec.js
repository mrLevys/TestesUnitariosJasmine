const { isValidISBN10 } = require('./isbn.js'); 

describe("isValidISBN10", function() {
  it("deve retornar true para um ISBN-10 válido sem hífens", function() {
    expect(isValidISBN10("0471958697")).toBe(true);
  });

  it("deve retornar true para um ISBN-10 válido com hífens", function() {
    expect(isValidISBN10("0-471-95869-7")).toBe(true);
  });

  it("deve retornar false para um ISBN-10 inválido com dígito de verificação incorreto", function() {
    expect(isValidISBN10("0471958698")).toBe(false);
  });

  it("deve retornar false para um ISBN-10 com comprimento incorreto", function() {
    expect(isValidISBN10("123456789")).toBe(false);
  });

  it("deve retornar true para um ISBN-10 válido com 'X' como dígito de verificação", function() {
    expect(isValidISBN10("012000030X")).toBe(true);
  });
});
