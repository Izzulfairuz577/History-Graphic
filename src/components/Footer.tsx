import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">History Graphic</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Desain grafis dengan sentuhan pribadi. Semua karya adalah original 
              dan dibuat dengan dedikasi tinggi untuk memberikan nilai terbaik.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/1zz_fruz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:izzulfairuzmahendra123@gmail.com"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/6285147010112"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'poster', label: 'Poster' },
                { id: 'template', label: 'Template' },
                { id: 'ilustrasi', label: 'Ilustrasi' },
                { id: 'tentang', label: 'Tentang' },
                { id: 'kontak', label: 'Kontak' }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id === 'home' ? '/' : `/${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: izzulfairuzmahendra123@gmail.com</p>
              <p>WhatsApp: 085147010112</p>
              <p>Instagram: @1zz_fruz</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 History Graphic. All rights reserved. Made with ❤️ by Izzul Fairuz Mahendra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;