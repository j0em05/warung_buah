import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-yellow-500">Warung Buah</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
            <a href="#produk" className="text-gray-700 hover:text-yellow-500 transition-colors">Produk</a>
            <a href="#tentang" className="text-gray-700 hover:text-yellow-500 transition-colors">Tentang Kami</a>
            <a href="#mitra" className="text-gray-700 hover:text-yellow-500 transition-colors">Jadi Mitra</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-yellow-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <button className="md:hidden p-2 text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;