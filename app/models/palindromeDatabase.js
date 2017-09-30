var PalindromeDatabase = function() {
  this._palindromes = [];
}

PalindromeDatabase.prototype.getPalindromes = function() {
  return this._palindromes;
};

PalindromeDatabase.prototype.isPalindrome = function(input) {
  return input === this._reverse(input)
};

// to be amended. it needs to store the time too.
PalindromeDatabase.prototype.storePalindrome = function(palindrome) {
  if (this.isPalindrome(palindrome)) {
    this._palindromes.push(palindrome)
    return palindrome;
  };
};

PalindromeDatabase.prototype._reverse = function(input) {
  return input.split('').reverse().join('');
};

module.exports = PalindromeDatabase;
