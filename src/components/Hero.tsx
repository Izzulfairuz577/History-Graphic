import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            History Graphic
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desain grafis dengan sentuhan pribadi
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Temukan koleksi poster digital, template desain, dan ilustrasi original 
            yang dibuat khusus untuk kebutuhan kreatif Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/poster"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('poster');
              }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Jelajahi Produk
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/tentang"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('tentang');
              }}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Tentang Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;