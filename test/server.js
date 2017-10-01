var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var server = require('../server');

chai.use(chaiHttp);

describe('Palindromes', function() {
  it('should list all palindromes on /palindromes GET', function(done) {
    chai.request(server)
      .get('/api/palindromes')
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should add one palindrome on /palindromes POST', function() {
    chai.request(server)
      .post('/palindromes')
      .send({'palindrome': 'ABBA'})
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.SUCCESS).to.be.a('object');
        done();
      });
  });
});
