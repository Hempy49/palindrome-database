var PalindromeDatabase = function() {
  this._palindromes = [];
}

PalindromeDatabase.prototype.isPalindrome = function(input) {
  return input === this._reverse(input)
};

PalindromeDatabase.prototype._reverse = function(input) {
  return input.split('').reverse().join('');
};

module.exports = PalindromeDatabase;
