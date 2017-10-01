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

});
