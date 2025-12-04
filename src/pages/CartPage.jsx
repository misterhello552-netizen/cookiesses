import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-brand-brown-900 mb-4">Your Cart is Empty</h1>
        <p className="text-brand-brown-600 mb-6">Looks like you haven't added any cookies yet.</p>
        <Link
          to="/products"
          className="bg-brand-brown-800 text-white font-bold py-2 px-6 rounded hover:bg-brand-brown-700 transition-colors"
        >
          Browse Cookies
        </Link>
      </div>
    );
  }

  const taxRate = 0.08;
  const tax = total * taxRate;
  const grandTotal = total + tax;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-brand-brown-900 mb-6 border-b border-brand-brown-200 pb-4">
        Your Shopping Cart
      </h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <div className="w-full md:w-1/3">
          <div className="flex justify-between text-lg text-brand-brown-700 py-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg text-brand-brown-700 py-2 border-b border-brand-brown-200">
            <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-2xl font-bold text-brand-brown-900 py-4">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex flex-col space-y-3">
             <Link
                to="/checkout"
                className="w-full text-center bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button 
                onClick={clearCart}
                className="w-full text-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
