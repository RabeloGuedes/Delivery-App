import React, { useContext } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import MainContext from '../../context/MainContext';

import './NavBar.css';

export default function NavBar() {
  const {
    email,
  } = useContext(MainContext);
  return (
    <div>
      <h1>{ email }</h1>
    </div>
  );
}
