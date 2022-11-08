import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

export default function NavBar() {
  const navigate = useNavigate();
  const {
    user,
  } = useContext(MainContext);

  return (
    <nav>
      <div className="nav-left">
        <div
          className="nav-button"
        >
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </Link>
        </div>
        <div
          className="nav-button"
        >
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Link>
        </div>
      </div>
      <div
        className="nav-right"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h1>{ user }</h1>
        <button
          type="button"
          className="nav-button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.clear();
            // localStorage.setItem('user', '');
            navigate('/login');
          } }
        >
          SAIR
        </button>
      </div>
    </nav>
  );
}
