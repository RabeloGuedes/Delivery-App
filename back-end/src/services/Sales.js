const {
  sales_products: SalesProducts,
  Product,
  Sale,
  User,
} = require('../database/models');

const SalesService = {
  create: async (requestdata) => {
    const newSale = await Sale.create({
      ...requestdata,
    });

    requestdata.cart.forEach(async (produto) => {
      await SalesProducts.create({
        saleId: newSale.id,
        productId: produto.id,
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
        {
          model: User,
          as: 'sellers',
          attributes: {
            exclude: ['password', 'id', 'email', 'role'],
          },
        },
      ],
    });
    return saleById;
  },

  getSalesByUserId: async (id) => {
    const salesByUserId = await Sale.findAll({
      where: { userId: id },
      attributes: {
        exclude: [
          'userId',
          'sellerId',
          'deliveryAddress',
          'deliveryNumber',
        ],
      }
    });
    return salesByUserId;
  },
};

module.exports = SalesService;
