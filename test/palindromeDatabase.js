var chai = require('chai');
var expect = chai.expect;
var PalindromeDatabase = require("../app/models/palindromeDatabase")

describe('PalindromeDatabase', function() {

  palindromeDatabase = new PalindromeDatabase();

  describe('#isPalindrome', function() {
    it('returns true if the input is a palindrome', function() {
      expect(palindromeDatabase.isPalindrome('ABBA')).to.equal(true);
    });
  });
});
