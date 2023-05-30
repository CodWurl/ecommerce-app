import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to the E-commerce Store!</h1>
      <Link to="/payment">
        <button>Pay Now</button>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default MainPage;
