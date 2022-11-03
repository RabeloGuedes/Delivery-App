const { Sale } = require('../database/models');

const SalesService = {
  create: async ({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
}) => {
  const newSale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });
    return newSale;
  },
  getAll: async () => {
    const sales = await Sale.findAll();
    return sales;
  },
};

module.exports = SalesService;