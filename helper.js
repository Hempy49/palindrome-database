function isValid(body) {
  if (body.palindrome === undefined) {
    return false;
  };
  if (body.palindrome === '') {
    return false;
  };
  return true;
};

module.exports = isValid;
