const RESULT = { status: 400, message: 'Invalid request' };

const verifySellerId = (req, res, next) => {
  const { sellerId } = req.body;

  if (!sellerId && typeof sellerId !== 'number') {
    return res.status(RESULT.status).json({ message: RESULT.message });
  }

  next();
};

const verifyTotalPrice = (req, res, next) => {
  const { totalPrice } = req.body;

  if (!totalPrice && typeof totalPrice !== 'number') {
    return res.status(RESULT.status).json({ message: RESULT.message });
  }

  next();
};

const verifyDeliveryAdress = (req, res, next) => {
  const { deliveryAddress } = req.body;

  if (!deliveryAddress && typeof deliveryAddress !== 'string') {
    return res.status(RESULT.status).json({ message: RESULT.message });
  }

  next();
};

const verifyDeliveryNumber = (req, res, next) => {
  const { deliveryNumber } = req.body;

  if (!deliveryNumber && typeof deliveryNumber !== 'number') {
    return res.status(RESULT.status).json({ message: RESULT.message });
  }

  next();
};

const verifyCart = (req, res, next) => {
  const { cart } = req.body;

  if (!cart && typeof cart !== 'object') {
    return res.status(RESULT.status).json({ message: RESULT.message });
  }

  next();
};

module.exports = {
  verifySellerId,
  verifyTotalPrice,
  verifyDeliveryAdress,
  verifyDeliveryNumber,
  verifyCart,
};
