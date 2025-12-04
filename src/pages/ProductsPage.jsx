import React from 'react';
import { cookies } from '../data/cookies';
import CookieCard from '../components/CookieCard';

const ProductsPage = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-brand-brown-900">Our Delicious Selection</h1>
        <p className="text-lg text-brand-brown-600 mt-2">Every cookie is a piece of happiness.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cookies.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
