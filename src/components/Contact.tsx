import React from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-600">
          Siap membantu Anda dengan kebutuhan desain grafis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Mari Berkolaborasi</h2>
          <p className="text-gray-600 leading-relaxed">
            Punya pertanyaan tentang produk kami? Butuh desain custom? 
            Atau ingin berbagi feedback? Jangan ragu untuk menghubungi kami 
            melalui salah satu cara di bawah ini.
          </p>
          
          <div className="space-y-4">
            <a
              href="https://instagram.com/1zz_fruz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Instagram</h3>
                <p className="text-gray-600">@1zz_fruz</p>
              </div>
            </a>

            <a
              href="mailto:izzulfairuzmahendra123@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="bg-red-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">izzulfairuzmahendra123@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/6285147010112"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="bg-green-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">085147010112</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-gray-600 text-white p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telepon</h3>
                <p className="text-gray-600">085147010112</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Waktu Respon</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">WhatsApp</span>
              <span className="font-medium">&lt; 2 jam</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Email</span>
              <span className="font-medium">&lt; 24 jam</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Instagram DM</span>
              <span className="font-medium">&lt; 6 jam</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="font-semibold mb-2">Jam Kerja</h4>
            <p className="text-gray-300 text-sm">
              Senin - Jumat: 09:00 - 17:00 WIB<br />
              Sabtu: 09:00 - 15:00 WIB<br />
              Minggu: Libur
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Butuh Desain Custom?
        </h3>
        <p className="text-gray-600 mb-6">
          Kami juga menerima pesanan desain custom sesuai kebutuhan Anda. 
          Hubungi kami untuk konsultasi gratis!
        </p>
        <a
          href="https://wa.me/6285147010112?text=Halo! Saya tertarik dengan jasa desain custom"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
        >
          <MessageCircle className="h-5 w-5" />
          Konsultasi Gratis
        </a>
      </div>
    </div>
  );
};

export default Contact;