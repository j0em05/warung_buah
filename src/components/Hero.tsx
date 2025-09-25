import React from 'react';
import { Leaf, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-yellow-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-500 rounded-full p-4">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Buah Segar
            <span className="text-yellow-500"> Setiap Hari</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan buah-buahan segar berkualitas tinggi langsung dari kebun pilihan. 
            Warung Buah menghadirkan kesegaran untuk keluarga Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Pesan Sekarang
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-colors">
              Lihat Produk
            </button>
          </div>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div>•</div>
            <div>1000+ Pelanggan Puas</div>
            <div>•</div>
            <div>Pengiriman Cepat</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;