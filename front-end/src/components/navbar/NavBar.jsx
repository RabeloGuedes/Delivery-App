import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import StyledNavBar from './StyledNavBar';

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname.split('/')[1];

  return (
    <StyledNavBar>
      <div className="nav-left">
        { role === 'customer' && (
          <>
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
          </>
        )}
        { role === 'seller' && (

          <div
            className="nav-button"
          >
            <Link
              to="/seller/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              PEDIDOS
            </Link>
          </div>

        )}
        { role === 'admin' && (

          <div
            className="nav-button"
          >
            <Link
              to="/seller/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              GERENCIAR USUÁRIOS
            </Link>
          </div>

        )}
      </div>
      <div
        className="nav-right"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h3>{ JSON.parse(localStorage.getItem('user')).name }</h3>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.clear();
            navigate('/login');
          } }
        >
          SAIR
        </button>
      </div>
    </StyledNavBar>
  );
}
