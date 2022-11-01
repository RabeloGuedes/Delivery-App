import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
