import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MainPage from './MainPage';
import PaymentPage from './PaymentPage';

const App = () => {
  return (
    <Router>
      <nav>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
