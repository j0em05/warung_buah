import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../services/api';

interface ProductCardProps {
  product: Product;
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isPopular }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Generate random rating between 4.5 and 5.0
  const rating = (4.5 + Math.random() * 0.5).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
      {isPopular && (
        <div className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg inline-block">
          Terpopuler
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={product["Url_gambar"]} 
          alt={product["Nama"]}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Plus className="h-5 w-5 text-yellow-500" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product["Nama"]}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{product["Deskripsi"]}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-500">{formatPrice(product["Harga"])}</span>
          </div>
          
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;