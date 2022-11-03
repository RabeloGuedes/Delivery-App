const { Sale } = require('../database/models');
const { SalesProducts, Product } = require('../database/models');

const SalesService = {
  create: async (requestdata) => {
    const newSale = await Sale.create({
      ...requestdata,
    });

    requestdata.cart.forEach(async (produto) => {
      await SalesProducts.create({
        saleId: newSale.id,
        productId: produto.productId,
        quantity: produto.quantity,
      });
    });
  
    return newSale;
  },

  getAll: async () => {
    const sales = await Sale.findAll();
    return sales;
  },

  getSaleById: async (id) => {
    const saleById = await Sale.findOne({
      where: { id },
      include: [
        {
        model: Product,
        as: 'sale',
        },
      ],
    });
    return saleById;
  },
};

module.exports = SalesService;
