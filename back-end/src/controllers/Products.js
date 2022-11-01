const productsService = require('../services/Product');

const productsController = async (req, res) => {
  const getAllProducts = await productsService();

  return res.status(200).json(getAllProducts);
};

module.exports = productsController;
