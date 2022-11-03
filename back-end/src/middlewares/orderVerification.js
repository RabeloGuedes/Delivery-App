const verifyOrder = (req, res, next) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = req.body;

  if (!userId || !sellerId || !totalPrice || !deliveryAddress || !deliveryNumber ) {
    return res
      .status(400)
      .json({ message: 'Corpo da requisição inválido' });
  }

  next();
};

module.exports = verifyOrder;
