import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CookieCard = ({ cookie }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-brand-brown-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col">
      <Link to={`/products/${cookie.id}`}>
        <img className="w-full h-56 object-cover" src={cookie.image} alt={cookie.name} />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-brown-900 mb-2">{cookie.name}</h3>
        <p className="text-brand-brown-700 text-sm flex-grow">{cookie.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-bold text-brand-brown-800">${cookie.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(cookie)}
            className="bg-brand-brown-800 text-white font-bold py-2 px-4 rounded hover:bg-brand-brown-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieCard;
