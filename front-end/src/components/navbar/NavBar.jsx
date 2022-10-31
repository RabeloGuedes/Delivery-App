import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import './NavBar.css';

export default function NavBar() {
  const {
    user,
  } = useContext(MainContext);
  return (
    <div>
      <div className="left">
        <div className="button">PRODUTOS</div>
        <div className="button">MEUS PEDIDOS</div>
      </div>
      <div className="right">
        <h1>{ user }</h1>
        <div
          className="button"
        >
          sair
        </div>
      </div>
    </div>
  );
}
