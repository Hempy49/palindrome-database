var chai = require('chai');
var expect = chai.expect;
var PalindromeDatabase = require('../app/models/palindromeDatabase')

describe('PalindromeDatabase', function() {

  palindromeDatabase = new PalindromeDatabase();

  describe('#getFilteredPalindromes', function() {
    it('returns the filtered stored palindromes', function () {
      palindromeDatabase.storePalindrome('ABBA');
      palindromeDatabase.storePalindrome('mom');
      expect(palindromeDatabase.getFilteredPalindromes()).to.include('ABBA', 'mom');
    });
  });

  describe('#isPalindrome', function() {
    it('returns true if the input is a palindrome', function() {
      expect(palindromeDatabase.isPalindrome('ABBA')).to.equal(true);
    });

    it('returns false if the input is not a palindrome', function() {
      expect(palindromeDatabase.isPalindrome('Voldemort')).to.equal(false);
    });
  });

  describe('#storePalindrome', function() {
    it('saves the palindrome with time of creation as object in an array', function() {
      palindromeDatabase.storePalindrome('eve')
      expect(palindromeDatabase._palindromes.pop()).to.include({ palindrome: 'eve'})
    });
  });
});
