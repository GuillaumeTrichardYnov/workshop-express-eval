var expect = require('chai').expect;
var chai = require('chai');
const app = require('../src/app');
var chaiHttp = require('chai-http');

var http = require('http');

describe('Hello World', function() {
  it('True should be true', function() {
    expect(true).to.be.true;
  });
});

/*describe("GET /foo", function() {
    it('returns something', function(done) {
        chai.request(app)
        .get('http://127.0.0.1:4400/bingo?mynumbers=80,66,44,31,10')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
});*/
