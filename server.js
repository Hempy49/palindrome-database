var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var PalindromeDatabase = require('./app/models/palindromeDatabase');
var palindromeDatabase = new PalindromeDatabase();
var isValid = require('./helper');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function (req, res) {
  res.json({ message: 'Hello World!' });
});

router.route('/palindromes')
  .post(function(req, res) {
    if (!isValid(req.body)) {
      res.status(400).send({ message: 'Input not valid' });
    }
    var isPalindrome = palindromeDatabase.isPalindrome(req.body.palindrome);
    palindromeDatabase.storePalindrome(req.body.palindrome);
    res.send(isPalindrome);
  })
  .get(function(req, res) {
    palindromes = palindromeDatabase.getFilteredPalindromes();
    res.send(palindromes);
  });



app.use('/api', router);

module.exports = app.listen(port);
console.log('server started on: ' + port);
