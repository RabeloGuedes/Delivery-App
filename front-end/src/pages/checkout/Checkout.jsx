import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/NavBar';
import CheckoutProduct from '../../components/checkout-product/CheckoutProduct';

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const totalPrice = cart.reduce((acc, curr) => Number(acc) + Number(curr.subTotal), 0);

  return (
    <section>
      <Navbar />
      {
        cart.map((item, index) => (
          <CheckoutProduct
            setCart={ setCart }
            { ...item }
            key={ item.id }
            index={ index }
          />
        ))
      }
      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        {
          totalPrice.toFixed(2).replace('.', ',')
        }
      </h3>
      <select
        name=""
        id=""
        data-testid="customer_checkout__select-seller"
      >
        <option>
          Fulano
        </option>
      </select>
      <input
        data-testid="customer_checkout__input-address"
        id="adress"
        type="text"
        placeholder="Rua Avenida Brasil"
      />
      <input
        data-testid="customer_checkout__input-address-number"
        id="adress-number"
        type="number"
        placeholder="100"
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => navigate('/customer/orders/1') }
      >
        Finaliza compra
      </button>
    </section>
  );
}
