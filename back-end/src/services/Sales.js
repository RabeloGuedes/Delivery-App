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
    user_id: userId,
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
  });
    return newSale;
  },
  getAll: async () => {
    const sales = await Sale.findAll();
    return sales;
  }
}

module.exports = SalesService;