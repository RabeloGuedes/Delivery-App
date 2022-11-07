import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/NavBar';
import CheckoutProduct from '../../components/checkout-product/CheckoutProduct';
import { createSale } from '../../services/APIs';

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const totalPrice = cart.reduce((acc, curr) => Number(acc) + Number(curr.subTotal), 0);
  const { token } = JSON.parse(localStorage.getItem('user'));

  const handleCheckout = async (e) => {
    e.preventDefault();

    const sale = {
      sellerId: 2,
      totalPrice,
      deliveryAddress,
      deliveryNumber: Number(deliveryNumber),
      cart,
    };

    const auth = {
      Authorization: token,
    };
    // console.log(token);
    const { data: { id } } = await createSale(sale, auth);

    navigate(`/customer/orders/${id}`);
    localStorage.removeItem('cart');
  };

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
      <form onSubmit={ handleCheckout }>
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
          value={ deliveryAddress }
          onChange={ (e) => setDeliveryAddress(e.target.value) }
          id="adress"
          type="text"
          placeholder="Rua Avenida Brasil"
        />
        <input
          data-testid="customer_checkout__input-address-number"
          value={ deliveryNumber }
          onChange={ (e) => setDeliveryNumber(e.target.value) }
          id="adress-number"
          type="number"
          placeholder="100"
        />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar compra
        </button>
      </form>
    </section>
  );
}
