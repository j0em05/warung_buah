import React from 'react';
import { Users, TrendingUp, Handshake, Globe } from 'lucide-react';

const PartnerSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Jaringan Luas",
      description: "Bergabung dengan jaringan ribuan mitra di seluruh Indonesia"
    },
    {
      icon: TrendingUp,
      title: "Profit Menarik",
      description: "Dapatkan keuntungan hingga 40% dari setiap penjualan"
    },
    {
      icon: Handshake,
      title: "Dukungan Penuh",
      description: "Pelatihan, marketing support, dan bantuan operasional"
    },
    {
      icon: Globe,
      title: "Brand Terpercaya",
      description: "Manfaatkan reputasi Warung Buah yang sudah dikenal"
    }
  ];

  return (
    <section id="mitra" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bergabung Jadi <span className="text-yellow-500">Mitra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wujudkan impian bisnis Anda bersama Warung Buah. Dapatkan kesempatan emas 
            untuk memiliki usaha buah segar dengan sistem yang sudah terbukti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Siap Memulai Bisnis Buah Anda?
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Modal mulai dari Rp 10 juta sudah bisa memulai</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Pelatihan lengkap dan mentoring berkelanjutan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Sistem POS dan management inventory terintegrasi</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">ROI dapat tercapai dalam 12-18 bulan</p>
                </div>
              </div>
              
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
                Daftar Jadi Mitra Sekarang
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fruit store partner"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-xl"></div>
              
              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-sm text-gray-600">Rata-rata omzet mitra</div>
                <div className="text-2xl font-bold text-gray-900">Rp 50jt/bulan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;