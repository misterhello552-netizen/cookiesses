import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-brown-100 border-t border-brand-brown-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-brand-brown-700">
          <p>&copy; {new Date().getFullYear()} The Cookie Jar. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-brown-900">Facebook</a>
            <a href="#" className="hover:text-brand-brown-900">Instagram</a>
            <a href="#" className="hover:text-brand-brown-900">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
