const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { User } = require('../database/models');
const { mockUser } = require('./mocks/user');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testa a rota /login', () => {
  describe('POST', () => {

    before(async () => {
      sinon.stub(User, "findOne")
			.onCall(0).resolves(mockUser)
			.onCall(1).resolves(null);
    })
    after(()=>{
      sinon.restore();
    })

    it('O usuário deve conseguir logar', async () => {
      const response = await chai.request(app).post('/login').send({ ...mockUser, password: '$#zebirita#$' });

      expect(response.status).to.equal(200);
    })

    it('Não deve ser possível logar com email inválido', async () => {
      const response = await chai.request(app).post('/login').send({ email: 'test.test.com', password: '$#zebirita#$' });

      expect(response.status).to.equal(400);
    })

    it('Não deve ser possível logar com senha inválida', async () => {
      const response = await chai.request(app).post('/login').send({ ...mockUser, password: 'wrong' });

      expect(response.status).to.equal(400);
    })

    it('Não deve ser possível logar com dados que não estejam no banco', async () => {
      const response = await chai.request(app).post('/login').send({ email: 'wrong@test.com', password: '$#zebirita#$' });

      expect(response.status).to.equal(404);
    })
  });
});
