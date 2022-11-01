const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { Product } = require('../database/models');
const products = require('./mocks/products');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testa a rota /customer/products', () => {
  describe('GET', () => {

    before(async () => {
      sinon.stub(Product, "findAll").resolves(products)
    })
    after(()=>{
      sinon.restore();
    })

    it('Os produtos devem ser retornardos', async () => {
      const response = await chai.request(app).get('/customer/products').send();

      expect(response.status).to.equal(200);
    })
  });
});
