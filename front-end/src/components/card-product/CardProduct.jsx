import React from 'react';
import PropTypes from 'prop-types';
// import './CardProduct.css';

export default function CardProduct(props) {
  const { thumbnail, id, productName, price } = props;
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
        { Number(price.replace('.', ',')) }
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
      >
        ADICIONAR AO CARRINHO
      </button>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        REMOVER DO CARRINHO
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
      />
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
