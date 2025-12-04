import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cookies } from '../data/cookies';
import { useCart } from '../context/CartContext';
import NotFoundPage from './NotFoundPage';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedMessageVisible, setAddedMessageVisible] = useState(false);

  const cookie = cookies.find(c => c.id === parseInt(id));

  if (!cookie) {
    return <NotFoundPage />;
  }
  
  const handleAddToCart = () => {
    addToCart(cookie, quantity);
    setAddedMessageVisible(true);
    setTimeout(() => {
        setAddedMessageVisible(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={cookie.image} alt={cookie.name} className="w-full h-auto rounded-lg object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-brand-brown-900 mb-4">{cookie.name}</h1>
          <p className="text-2xl font-semibold text-brand-brown-800 mb-6">${cookie.price.toFixed(2)}</p>
          <p className="text-brand-brown-700 text-lg mb-6">{cookie.description}</p>
          
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="font-semibold text-brand-brown-800 mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="w-20 p-2 border border-brand-brown-300 rounded-md text-center"
            />
          </div>
          
          <div className="flex items-center space-x-4">
             <button
              onClick={handleAddToCart}
              className="bg-brand-brown-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-brown-700 transition-colors duration-300 text-lg"
            >
              Add to Cart
            </button>
             <Link
              to="/products"
              className="text-brand-brown-800 hover:text-brand-brown-900 font-semibold"
            >
              &larr; Back to Cookies
            </Link>
          </div>
          {addedMessageVisible && (
              <p className="mt-4 text-green-600 font-semibold">
                {quantity} {cookie.name}{quantity > 1 ? 's' : ''} added to cart!
              </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
