import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const total = getCartTotal();
  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-brand-brown-900 mb-4">Your Cart is Empty</h1>
        <p className="text-brand-brown-600 mb-6">You can't checkout without any cookies!</p>
        <Link
          to="/products"
          className="bg-brand-brown-800 text-white font-bold py-2 px-6 rounded hover:bg-brand-brown-700 transition-colors"
        >
          Find Some Cookies
        </Link>
      </div>
    );
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    clearCart();
  };

  if (isOrderPlaced) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You For Your Order!</h1>
        <p className="text-brand-brown-700 mb-6">Your delicious cookies are on their way. We've sent a confirmation to your email.</p>
        <Link
          to="/"
          className="bg-brand-brown-800 text-white font-bold py-2 px-6 rounded hover:bg-brand-brown-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-brand-brown-900 mb-6">Shipping & Payment</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-brown-700">Full Name</label>
              <input type="text" id="name" required className="mt-1 block w-full border border-brand-brown-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-brown-700">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full border border-brand-brown-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-brown-700">Shipping Address</label>
              <input type="text" id="address" required className="mt-1 block w-full border border-brand-brown-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="card" className="block text-sm font-medium text-brand-brown-700">Credit Card Number</label>
              <input type="text" id="card" placeholder="**** **** **** ****" required className="mt-1 block w-full border border-brand-brown-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Place Order
          </button>
        </form>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-brand-brown-900 mb-6">Order Summary</h2>
        <div className="space-y-3">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center text-brand-brown-700">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-brand-brown-200">
          <div className="flex justify-between font-bold text-xl text-brand-brown-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
