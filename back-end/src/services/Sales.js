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

    await Promise.all(requestdata.cart.map((produto) => {
      const products = SalesProducts.create({
        saleId: newSale.id,
        productId: produto.id,
        quantity: produto.quantity,
      });
      return products;
    }));
  
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
      },
    });
    return salesByUserId;
  },

  getSalesBySellerId: async (id) => {
    const salesByUserId = await Sale.findAll({
      where: { sellerId: id },
      attributes: {
        exclude: [
          'userId',
          'sellerId',
        ],
      },
    });
    return salesByUserId;
  },

  updateSales: async (id, status) => {
    const updateSale = await Sale.update({ status }, { where: { id } });
    return updateSale;
  },
};

module.exports = SalesService;
