function isValidISBN10(isbn) {
  isbn = isbn.replace(/-/g, '');
  if (isbn.length !== 10) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    if (isbn[i] < 0 || isbn[i] > 9) {
      return false;
    }
    sum += (isbn[i] * (10 - i));
  }
  let checksum = isbn[9].toUpperCase();
  sum += (checksum === 'X') ? 10 : parseInt(checksum);
  return (sum % 11 === 0);
}

module.exports = isValidISBN10;  