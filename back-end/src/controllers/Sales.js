const SalesService = require('../services/Sales');

const SalesController = {
  create: async (req, res) => {
    const { body, user: { id } } = req;
    // console.log('user', user);
    const newSale = await SalesService.create({ ...body, status: 'Pendente', userId: id });
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
  getSalesByUserId: async (req, res) => {
    const { id } = req.user;
    const sales = await SalesService.getSalesByUserId(id);
    res.status(200).json(sales);
  },
  getSalesBySellerId: async (req, res) => {
    const { id } = req.user;
    const sales = await SalesService.getSalesBySellerId(id);
    res.status(200).json(sales);
  },
  updateSales: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updateSale = await SalesService.updateSales(id, status);
    res.status(200).json({message: 'Status updated'});
  },
};

module.exports = SalesController;