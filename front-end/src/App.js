import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
