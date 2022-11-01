import React, { useContext } from 'react';
import NavBar from '../../components/navbar/NavBar';
import CardProduct from '../../components/card-product/CardProduct';
import MainContext from '../../context/MainContext';

const populateProducts = (products) => products.map((product) => (
  <div
    key={ product.id }
  >
    <CardProduct
      id={ product.id }
      productName={ product.name }
      price={ product.price }
    />
  </div>
));

export default function Products() {
  const {
    products,
  } = useContext(MainContext);

  return (
    <div>
      <NavBar />
      <div className="">
        { populateProducts(products) }
      </div>
    </div>
  );
}
