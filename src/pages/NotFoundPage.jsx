import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-brand-brown-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-brand-brown-800 mb-4">Oops! Page Not Found</h2>
      <p className="text-lg text-brand-brown-600 mb-8">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-brand-brown-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-brown-700 transition-colors"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
