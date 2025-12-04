import React from 'react';
import { useCart } from '../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-brand-brown-200 py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded-md mr-4" />
        <div>
          <h3 className="font-semibold text-brand-brown-900">{item.name}</h3>
          <p className="text-sm text-brand-brown-600">${item.price.toFixed(2)}</for>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            name="quantity"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 p-1 border border-brand-brown-300 rounded-md text-center"
          />
        </div>
        <p className="font-semibold text-brand-brown-800 w-20 text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
