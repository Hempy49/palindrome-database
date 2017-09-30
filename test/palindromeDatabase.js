var chai = require('chai');
var expect = chai.expect;
var PalindromeDatabase = require("../app/models/palindromeDatabase")

describe('PalindromeDatabase', function() {

  palindromeDatabase = new PalindromeDatabase();

  describe('#getPalindromes', function() {
    it("returns the stored palindromes", function () {
      palindromeDatabase.storePalindrome('ABBA');
      palindromeDatabase.storePalindrome('mom');
      expect(palindromeDatabase.getPalindromes()).to.equal(palindromeDatabase._palindromes);
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
    it('saves the palindrome in an array and returns the saved palindrome', function() {
      expect(palindromeDatabase.storePalindrome('eve')).to.equal('eve')
    });
  });
});
