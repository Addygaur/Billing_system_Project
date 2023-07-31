// test/admin.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Assuming you export your app from server.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('Admin API', () => {
  it('should get all orders', (done) => {
    chai
      .request(app)
      .get('/api/admin/orders')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
