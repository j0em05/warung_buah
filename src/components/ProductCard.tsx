import React from 'react';
import { Plus, Star } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  rating: number;
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  description, 
  rating, 
  isPopular 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
      {isPopular && (
        <div className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg inline-block">
          Terpopuler
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Plus className="h-5 w-5 text-yellow-500" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-500">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
            )}
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