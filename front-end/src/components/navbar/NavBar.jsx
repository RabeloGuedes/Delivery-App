import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useNavigate, useLocation } from 'react-router-dom';
import MainContext from '../../context/MainContext';

export default function NavBar() {
  // const navigate = useNavigate();
  const {
    email,
  } = useContext(MainContext);
  return (
    <div>
      <div className="left">
        <div className="button">PRODUTOS</div>
        <div className="button">MEUS PEDIDOS</div>
      </div>
      <div className="right">
        <h1>{ email }</h1>
        <div
          className="button"
          // onClick={ () => navigate('/') }
        >
          sair
        </div>
      </div>
    </div>
  );
}
