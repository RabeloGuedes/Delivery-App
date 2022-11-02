import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Products from './pages/products/Products';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer">
        <Route path="products" element={ <Products /> } />
        <Route path="checkout" element={ <Checkout /> } />
      </Route>
    </Routes>
  );
}

export default App;
