const verifyOrder = (req, res, next) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart } = req.body;

  if (!sellerId || !totalPrice || !deliveryAddress || !deliveryNumber || !cart) {
    return res
      .status(400)
      .json({ message: 'Corpo da requisição inválido' });
  }

  next();
};

module.exports = verifyOrder;
