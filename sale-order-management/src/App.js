import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SaleOrdersPage from './pages/SaleOrdersPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const onLogin = (credentials) => {
    if (credentials.username === 'user' && credentials.password === 'password') {
      setIsAuthenticated(true);
      navigate('/sale-orders');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/sale-orders" element={<PrivateRoute isAuthenticated={isAuthenticated}><SaleOrdersPage /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
