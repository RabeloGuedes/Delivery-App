import Proptypes from 'prop-types';
import { Trash } from 'phosphor-react';
import StyledCheckoutProduct from './StyledCheckoutProduct';

export default function CheckoutProduct({
  id,
  name,
  quantity,
  price,
  subTotal,
  setCart,
  index,
  className,
}) {
  const removeItem = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <StyledCheckoutProduct key={ id } className={ className }>
      <td>
        <p
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          { index + 1 }
        </p>
      </td>
      <td>
        <p
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          { name }
        </p>
      </td>
      <td>
        <p
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          { quantity }
        </p>
      </td>
      <td>
        <p
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { Number(price).toFixed(2).replace('.', ',') }
        </p>
      </td>
      <td>
        <p
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { subTotal.toFixed(2).replace('.', ',') }
        </p>
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ removeItem }
        >
          <Trash size={ 32 } />
        </button>
      </td>
    </StyledCheckoutProduct>
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
