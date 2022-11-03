const SalesService = require('../services/Sales');

const SalesController = {
  create: async (req, res) => {
    const { body } = req;
    const newSale = await SalesService.create({ ...body });
    res.status(201).json(newSale);
  },
  getAll: async (_req, res) => {
    const sales = await SalesService.getAll();
    res.status(200).json(sales);
  }
}

module.exports = SalesController;