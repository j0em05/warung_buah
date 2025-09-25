import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Apel Fuji Premium",
      price: "Rp 25.000",
      originalPrice: "Rp 30.000",
      image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Apel fuji segar dan manis langsung dari kebun pilihan",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 2,
      name: "Jeruk Medan Manis",
      price: "Rp 20.000",
      image: "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Jeruk medan super manis dengan kandungan vitamin C tinggi",
      rating: 4.9
    },
    {
      id: 3,
      name: "Pisang Cavendish",
      price: "Rp 15.000",
      image: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Pisang cavendish matang sempurna, kaya nutrisi",
      rating: 4.7
    },
    {
      id: 4,
      name: "Mangga Harum Manis",
      price: "Rp 35.000",
      originalPrice: "Rp 40.000",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Mangga harum manis premium dengan aroma yang menggoda",
      rating: 4.9,
      isPopular: true
    },
    {
      id: 5,
      name: "Strawberry Segar",
      price: "Rp 45.000",
      image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Strawberry segar pilihan dengan rasa manis asam yang pas",
      rating: 4.8
    },
    {
      id: 6,
      name: "Anggur Hijau",
      price: "Rp 55.000",
      image: "https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Anggur hijau seedless dengan rasa manis dan tekstur renyah",
      rating: 4.6
    }
  ];

  return (
    <section id="produk" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk <span className="text-yellow-500">Pilihan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Buah-buahan segar berkualitas tinggi yang dipilih khusus untuk kesehatan keluarga Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;