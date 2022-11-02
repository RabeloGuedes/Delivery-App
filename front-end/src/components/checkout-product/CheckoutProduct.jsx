import Proptypes from 'prop-types';

export default function CheckoutProduct({
  id,
  name,
  quantity,
  price,
  subTotal,
  setCart,
  index,
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
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { Number(price).toFixed(2).replace('.', ',') }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { subTotal.toFixed(2).replace('.', ',') }
      </p>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
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
