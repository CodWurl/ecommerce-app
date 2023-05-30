import React from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const PaymentPage = () => {
  const handleToken = (token) => {
    // Send the token to your server for processing
    console.log(token);
  };

  return (
    <div>
      <h1>Enter Credit Card Information</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51NAxatLUnhcBn6aERNPvJ6XIPOGfC9iNpZyQ9KIpaSsFpopIrSae1tA73kxbrc7Z0ln2WDW2DDp5e0yK4MGrxBXB00d7DtoT7h"
      />
    </div>
  );
};

export default PaymentPage;
