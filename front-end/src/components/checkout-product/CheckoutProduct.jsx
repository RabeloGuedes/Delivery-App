import Proptypes from 'prop-types';

export default function CheckoutProduct({
  id,
  name,
  quantity,
  price,
  subTotal,
  setCart,
}) {
  const removeItem = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <div>
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        { id }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        { name }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
      >
        { quantity }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        { price }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        { (subTotal).toFixed(2) }
      </p>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${id}` }
        type="button"
        onClick={ removeItem }
      >
        REMOVER
      </button>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string,
  quantity: Proptypes.string,
  price: Proptypes.number,
  subTotal: Proptypes.number,
  setCart: Proptypes.func,
}.isRequired;
