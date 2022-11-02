const SalesService = require('../services/Sales');

const SalesController = {
  create: async (req, res) => {
    const { body } = req;
    const newSale = await SalesService.create({ ...body });
    res.status(201).json(newSale);
  }
}

module.exports = SalesController;