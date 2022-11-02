import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './CardProduct.css';

export default function CardProduct(props) {
  const [quantity, setQuantity] = useState(0);
  const { thumbnail, id, productName, price } = props;

  const removeFromCart = () => {
    setQuantity((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart.find((item) => item.id === id)) {
      const newCart = cart.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item,
            quantity: item.quantity - 1,
            subTotal: (Number(item.subTotal) - Number(price)).toFixed(2) };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
      id,
      name: productName,
      price,
      quantity: 1,
      subTotal: price,
    };
    if (cart.find((item) => item.id === id)) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item,
            quantity: Number(item.quantity) + 1,
            subTotal: (Number(item.subTotal) + Number(price)).toFixed(2) };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const handleQuantity = ({ target }) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setQuantity(target.value);
    const product = {
      id,
      name: productName,
      price,
      quantity: target.value,
      subTotal: price * target.value,
    };
    const isThereItem = cart.some((item) => item.id === id);
    if (isThereItem) {
      const newCart = cart.filter((item) => item.id !== id);
      localStorage.setItem('cart', newCart);
    } if (cart.find((item) => item.id === id)) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: target.value,
            subTotal: Number(item.price) * Number(target.value),
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ thumbnail }
        alt={ productName }
      />
      <p>
        { id }
      </p>
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { productName }
      </p>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => {
          setQuantity((prev) => Number(prev) + 1);
          addToCart();
        } }
      >
        ADICIONAR AO CARRINHO
      </button>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => removeFromCart() }
      >
        REMOVER DO CARRINHO
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        value={ quantity }
        onChange={ (e) => handleQuantity(e) }
        min={ 0 }
      />
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
