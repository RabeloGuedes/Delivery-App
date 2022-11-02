const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { User } = require('../database/models');
const { mockRegister, newRegister, mockNewRegister } = require('./mocks/user');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testa a rota /register', () => {
  describe('POST', () => {

    before(async () => {
      sinon.stub(User, "create").resolves(mockNewRegister)
    })
    after(()=>{
      sinon.restore();
    })

    it('O usuário deve conseguir se cadastrar e gerar um Token', async () => {
      const response = await chai.request(app).post('/register').send({...newRegister, password: '123456'});

      expect(response.status).to.equal(201);
    })

    it('Não deve ser possível cadastrar com e-mail e senha já cadastrados', async () => {
      const response = await chai.request(app).post('/register').send(mockRegister);

      expect(response.status).to.equal(409);
    })

    it('Não deve ser possível cadastrar com nome inválido', async () => {
      const response = await chai.request(app).post('/register').send({ ...newRegister, name: 'Hi', password: '123456' });

      expect(response.status).to.equal(400);
    })
  });
});
