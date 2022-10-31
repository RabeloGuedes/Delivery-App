import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function CardProduct() {
  const {
    email,
  } = useContext(MainContext);
  return (
    <div>
      <h1>{ email }</h1>
    </div>
  );
}
