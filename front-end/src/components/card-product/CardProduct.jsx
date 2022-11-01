import React from 'react';
import PropTypes from 'prop-types';
// import './CardProduct.css';

export default function CardProduct(props) {
  const { thumbnail, id, productName, price } = props;
  return (
    <div>
      <img src={ thumbnail } alt={ productName } />
      <p>{ id }</p>
      <p>{ productName }</p>
      <p>{ price }</p>
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
