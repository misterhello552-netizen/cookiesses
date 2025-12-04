import React from 'react';
import { Link } from 'react-router-dom';
import { cookies } from '../data/cookies';
import CookieCard from '../components/CookieCard';

const HomePage = () => {
  const featuredCookies = cookies.filter(cookie => cookie.featured);

  return (
    <div>
      <div className="bg-brand-brown-50 rounded-lg p-10 mb-12 text-center shadow-inner" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/lined-paper.png')"}}>
        <h1 className="text-5xl font-bold text-brand-brown-900 mb-4 tracking-tight">
          Freshly Baked, Just for You
        </h1>
        <p className="text-xl text-brand-brown-700 mb-8 max-w-2xl mx-auto">
          Discover a world of delightful cookies, crafted with the finest ingredients and a whole lot of love.
        </p>
        <Link
          to="/products"
          className="bg-brand-brown-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-brown-700 transition-transform transform hover:scale-105"
        >
          Shop All Cookies
        </Link>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-brown-900">Our Featured Cookies</h2>
        <p className="text-brand-brown-600 mt-2">Handpicked favorites that are sure to please.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCookies.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
