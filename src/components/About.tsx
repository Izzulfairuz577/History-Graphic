import React from 'react';
import { Heart, Palette, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Tentang History Graphic
        </h1>
        <p className="text-lg text-gray-600">
          Cerita di balik setiap karya digital yang kami ciptakan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Creative workspace"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Selamat datang di toko pribadi saya</h2>
          <p className="text-gray-600 leading-relaxed">
            History Graphic adalah toko digital pribadi yang menyediakan berbagai macam 
            karya grafis original buatan saya sendiri. Setiap produk yang ditawarkan 
            merupakan hasil dari dedikasi dan kreativitas tinggi untuk memberikan 
            solusi desain terbaik bagi kebutuhan Anda.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dengan pengalaman dalam dunia desain grafis, saya berkomitmen untuk 
            menciptakan karya-karya yang tidak hanya estetik, tetapi juga fungsional 
            dan bermanfaat untuk berbagai keperluan pribadi maupun komersial.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="bg-gray-900 text-white p-3 rounded-full w-fit mx-auto mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Karya Original</h3>
          <p className="text-gray-600">
            Semua desain adalah hasil karya original tanpa plagiarisme
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="bg-gray-900 text-white p-3 rounded-full w-fit mx-auto mb-4">
            <Palette className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Kualitas Tinggi</h3>
          <p className="text-gray-600">
            Setiap produk dibuat dengan standar kualitas profesional
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="bg-gray-900 text-white p-3 rounded-full w-fit mx-auto mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Solusi Kreatif</h3>
          <p className="text-gray-600">
            Memberikan solusi desain yang estetik dan bermanfaat
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Memberikan karya grafis yang estetik, berkualitas tinggi, dan bermanfaat 
          untuk membantu individu dan bisnis dalam mencapai tujuan kreatif mereka 
          dengan desain yang memorable dan impactful.
        </p>
      </div>
    </div>
  );
};

export default About;