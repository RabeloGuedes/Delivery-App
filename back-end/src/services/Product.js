const { Product } = require('../database/models');

const productsService = async (email, password) => {
  const getAll = await Product.findAll();

  return getAll;
};

module.exports = productsService;
