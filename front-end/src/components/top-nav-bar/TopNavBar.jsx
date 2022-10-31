import React, { useContext } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import MainContext from '../../context/MainContext';

// import { ShoppingCart, MagnifyingGlass } from 'phosphor-react';
import './TopNavBar.css';

export default function TopNavBar() {
  const {
    email,
  } = useContext(MainContext);
  return (
    <div>
      <h1>{ email }</h1>
    </div>
  );
}
