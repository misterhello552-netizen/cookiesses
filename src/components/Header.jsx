import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    color: '#977669'
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-brand-brown-900 tracking-wider">
              The Cookie Jar
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-brand-brown-800 hover:text-brand-brown-600 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-brand-brown-800 hover:text-brand-brown-600 px-3 py-2 rounded-md text-lg font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Our Cookies
              </NavLink>
            </div>
          </nav>
          <div className="ml-4 flex items-center md:ml-6">
            <Link to="/cart" className="relative p-1 rounded-full text-brand-brown-800 hover:text-brand-brown-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View cart</span>
              <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
