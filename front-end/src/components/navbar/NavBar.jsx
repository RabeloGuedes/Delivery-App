import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/MainContext';

export default function NavBar() {
  const {
    user,
  } = useContext(MainContext);
  return (
    <nav>
      <div className="nav-left">
        <div
          className="nav-button"
          datatestid="customer_products__element-navbar-link-products"
        >
          <Link to="/customer/products">
            PRODUTOS
          </Link>
        </div>
        <div
          className="nav-button"
          datatestid="customer_products__element-navbar-link-orders"
        >
          <Link to="/customer/products">
            MEUS PEDIDOS
          </Link>
        </div>
      </div>
      <div
        className="nav-right"
        datatestid="customer_products__element-navbar-user-full-name"
      >
        <h1>{ user }</h1>
        <button
          type="button"
          className="nav-button"
          datatestid="customer_products__element-navbar-link-logout"
          // onClick={ () => localStorage.clear() }
        >
          SAIR
        </button>
      </div>
    </nav>
  );
}
