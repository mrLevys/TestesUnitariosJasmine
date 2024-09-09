const isValidISBN10 = require('./js/isbn.js')

describe("isValidISBN10", function() {

  it("deve retornar true para um ISBN-10 válido sem hífens", function() {
    const isbn = "0471958697";
    expect(isValidISBN10(isbn)).toBe(true);
  });

  it("deve retornar true para um ISBN-10 válido com hífens", function() {
    const isbn = "0-471-95869-7";
    expect(isValidISBN10(isbn)).toBe(true);
  });

  it("deve retornar false para um ISBN-10 inválido com dígito de verificação incorreto", function() {
    const isbn = "0471958698";
    expect(isValidISBN10(isbn)).toBe(false);
  });

  it("deve retornar false para um ISBN-10 com comprimento incorreto", function() {
    const isbn = "123456789";
    expect(isValidISBN10(isbn)).toBe(false);
  });

  it("deve retornar true para um ISBN-10 válido com 'X' como dígito de verificação", function() {
    const isbn = "012000030X";
    expect(isValidISBN10(isbn)).toBe(true);
  });

});
