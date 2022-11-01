import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';

function MainProvider({ children }) {
  const [user, setUser] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
  ]);

  // const [selectedListItems, setSelectedListItems] = useState('');
  // const [searchItem, setSearchItem] = useState('');
  // const [btnStatus, setBtnStatus] = useState(true);
  // const [cartItems, setCartItem] = useState([]);
  // const [categorySelected, setCategorySelected] = useState([]);

  // function addToCart(item) {
  //   if (cartItems.length === 0) {
  //     setCartItem([...cartItems, { itemAmount: 1,  itemProduct: item}])
  //   } const isTheProductThere = cartItems.some(({ itemProduct: { id } }) => id === item.id);
  //   if (isTheProductThere) {
  //     const updateProducts = cartItems.map((cartItem) => {
  //       if (cartItem.itemProduct.id === item.id) {
  //         return ({
  //           itemAmount: cartItem.itemAmount + 1,
  //           itemProduct: item,
  //         })
  //       } else return cartItem;
  //     });
  //     setCartItem(updateProducts);
  //   } else {
  //     setCartItem([...cartItems, { itemAmount: 1,  itemProduct: item}])
  //   }
  // };

  // function removeFromCart(item) {
  //   console.log('item', item);
  //   if (cartItems[cartItems.indexOf(item)].itemAmount > 1) {
  //     const updateProducts = cartItems.map((cartItem) => {
  //       if (cartItem.itemProduct.id === item.itemProduct.id ) {
  //         return ({
  //           itemAmount: cartItem.itemAmount -1,
  //           itemProduct: item.itemProduct,
  //         })
  //       } else return cartItem;
  //     });
  //     setCartItem(updateProducts);
  //   } else {
  //     setCartItem(cartItems.filter((cartItem) => cartItem.itemProduct.id !== item.itemProduct.id));
  //   }
  // };
  // function delete(item) {
  // console.log('item', item);
  // setCartItem(cartItems.filter((cartItem) => cartItem.itemProduct.id !== item.itemProduct.id));
  // };
  const value = useMemo(() => ({
    user,
    setUser,
    products,
    setProducts,
    orders,
    setOrders,
  }), [user, products, orders]);

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

// selectedListItems,
// setSelectedListItems,
// searchItem,
// setSearchItem,
// cartItems,
// setCartItem,
// addToCart,
// removeFromCart,
// deleteFromCart,
// btnStatus,
// setBtnStatus,
// categorySelected,
// setCategorySelected,
