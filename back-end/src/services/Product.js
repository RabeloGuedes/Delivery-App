const { Product } = require('../database/models');

const productsService = async () => {
  const getAll = await Product.findAll();
  return getAll;
};

module.exports = productsService;
