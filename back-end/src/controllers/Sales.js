const SalesService = require('../services/Sales');

const SalesController = {
  create: async (req, res) => {
    const { body, user } = req;
    // console.log('user', user);
    const newSale = await SalesService.create({ ...body, status: 'pendente', userId: user });
    res.status(201).json(newSale);
  },
  getAll: async (_req, res) => {
    const sales = await SalesService.getAll();
    res.status(200).json(sales);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const sale = await SalesService.getSaleById(id);
    res.status(200).json(sale);
  },
};

module.exports = SalesController;