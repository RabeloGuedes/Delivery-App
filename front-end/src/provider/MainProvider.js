import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';

function MainProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const value = useMemo(() => ({
    users,
    setUsers,
    products,
    setProducts,
  }), [users, products]);

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
