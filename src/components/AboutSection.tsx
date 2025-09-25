import React from 'react';
import { Shield, Truck, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Semua buah dipilih dengan standar kualitas tinggi dan kebersihan terjaga"
    },
    {
      icon: Truck,
      title: "Pengiriman Cepat",
      description: "Pengiriman same day untuk wilayah Jakarta dan sekitarnya"
    },
    {
      icon: Heart,
      title: "Kesehatan Keluarga",
      description: "Kami peduli dengan kesehatan keluarga Indonesia melalui buah segar"
    },
    {
      icon: Award,
      title: "Berpengalaman",
      description: "Lebih dari 10 tahun pengalaman dalam menyediakan buah segar"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-yellow-500">Warung Buah</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Warung Buah adalah toko buah terpercaya yang telah melayani masyarakat Indonesia 
              selama lebih dari 10 tahun. Kami berkomitmen untuk menyediakan buah-buahan segar 
              berkualitas tinggi dengan harga yang terjangkau.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Dengan jaringan petani lokal yang luas, kami memastikan setiap buah yang sampai ke 
              tangan Anda adalah yang terbaik. Kepuasan pelanggan adalah prioritas utama kami.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <feature.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-yellow-100 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh fruits display"
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan Setia</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">4.9★</div>
                <div className="text-sm text-gray-600">Rating Toko</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;