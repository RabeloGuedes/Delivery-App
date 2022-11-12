/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/NavBar';
import CheckoutProduct from '../../components/checkout-product/CheckoutProduct';
import { createSale } from '../../services/APIs';
import StyledCheckout from './StyledCheckout';

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
    const { data: { id } } = await createSale(sale, auth);

    navigate(`/customer/orders/${id}`);
    localStorage.removeItem('cart');
  };

  return (
    <StyledCheckout>
      <Navbar />
      <h2>Finalizar Pedido</h2>
      <div className="card-container">
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          { cart.map((item, index) => (
            <CheckoutProduct
              setCart={ setCart }
              { ...item }
              key={ item.id }
              index={ index }
            />
          ))}
        </table>
        <h3
          data-testid="customer_checkout__element-order-total-price"
        >
          {' '}
          Total: R$
          {
            totalPrice.toFixed(2).replace('.', ',')
          }
        </h3>
      </div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <div>
        <form onSubmit={ handleCheckout }>
          <div className="labels-container">
            <label htmlFor="seller">
              <h4>Pessoa Vendedora Responsável:</h4>
              <select
                name=""
                id="seller"
                data-testid="customer_checkout__select-seller"
              >
                <option>
                  Fulano
                </option>
              </select>
            </label>
            <label htmlFor="adress">
              <h4>Endereço:</h4>
              <input
                data-testid="customer_checkout__input-address"
                value={ deliveryAddress }
                onChange={ (e) => setDeliveryAddress(e.target.value) }
                id="adress"
                type="text"
                placeholder="Nome da Rua"
              />
            </label>
            <label htmlFor="adress-number">
              <h4>Número:</h4>
              <input
                data-testid="customer_checkout__input-address-number"
                value={ deliveryNumber }
                onChange={ (e) => setDeliveryNumber(e.target.value) }
                id="adress-number"
                type="number"
                placeholder="100"
              />
            </label>
          </div>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </StyledCheckout>
  );
}
