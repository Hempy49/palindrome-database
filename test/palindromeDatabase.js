var chai = require('chai');
var expect = chai.expect;
var PalindromeDatabase = require('../app/models/palindromeDatabase');
var tk = require('timekeeper');
var time = new Date(1506889956249);

describe('PalindromeDatabase', function() {

  palindromeDatabase = new PalindromeDatabase();

  beforeEach(function() {
    tk.freeze(time);
  });

  describe('#getFilteredPalindromes', function() {
    it('returns the filtered stored palindromes', function () {
      palindromeDatabase.storePalindrome('ABBA');
      palindromeDatabase.storePalindrome('mom');
      expect(palindromeDatabase.getFilteredPalindromes()).to.include('ABBA', 'mom');
    });

    it('only returns the last ten palindromes', function() {
      palindromeDatabase.storePalindrome('Eva, Can I Stab Bats In A Cave?');
      palindromeDatabase.storePalindrome('Nurses run');
      palindromeDatabase.storePalindrome('Was it a car or a cat I saw?');
      palindromeDatabase.storePalindrome('Dammit I\'m Mad');
      palindromeDatabase.storePalindrome(' A Man, A Plan, A Canal-Panama!');
      palindromeDatabase.storePalindrome('Yo, banana boy!');
      palindromeDatabase.storePalindrome('Murder for a jar of red rum.');
      palindromeDatabase.storePalindrome('Taco cat');
      palindromeDatabase.storePalindrome('A Santa Lived As a Devil At NASA');
      palindromeDatabase.storePalindrome('Do Geese See God?');
      palindromeDatabase.storePalindrome('Never Odd Or Even');
      expect(palindromeDatabase.getFilteredPalindromes()).to.not.include('Eva, Can I Stab Bats In A Cave?');
    });

    it('only returns the palindromes saved in the last ten minutes', function() {
      palindromeDatabase.storePalindrome('Nurses run');
      tk.reset();
      palindromeDatabase.storePalindrome('Yo, banana boy!');
      expect(palindromeDatabase.getFilteredPalindromes()).to.not.include('Nurses run');
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
      tk.freeze(time);
      palindromeDatabase.storePalindrome('eve')
      expect(palindromeDatabase._palindromes.pop()).to.include({ palindrome: 'eve', date: 1506889956249})
    });
  });

  afterEach(function() {
    tk.reset();
  });

});
