var PalindromeDatabase = function() {
  this._palindromes = [];
}

PalindromeDatabase.prototype.getFilteredPalindromes = function() {
  var lastAddedPalindromes = this._filterByTimeDifference(600000);
  return this._filterLastElements(lastAddedPalindromes, 10).map(function(palindrome) {
    return palindrome.palindrome;
  });
};

PalindromeDatabase.prototype.isPalindrome = function(input) {
  input = input.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s/g,'');
  return input === this._reverse(input);
};

PalindromeDatabase.prototype.storePalindrome = function(palindrome) {
  if (this.isPalindrome(palindrome)) {
    this._palindromes.push({ palindrome: palindrome, date: Date.now() });
  };
};

PalindromeDatabase.prototype._reverse = function(input) {
  return input.split('').reverse().join('');
};

PalindromeDatabase.prototype._filterByTimeDifference = function(timeDifferenceMilliseconds) {
  return this._palindromes.filter(function(palindrome) {
    return ((new Date() - palindrome.date) <= timeDifferenceMilliseconds);
  });
};

PalindromeDatabase.prototype._filterLastElements = function(palindromes, elementsNumber) {
  var length = palindromes.length;
  if (length <= elementsNumber) {
    return palindromes;
  };
  return palindromes.slice(length - elementsNumber, length);
};

module.exports = PalindromeDatabase;
