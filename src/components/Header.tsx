import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onToggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onToggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'poster', label: 'Poster' },
    { id: 'template', label: 'Template' },
    { id: 'ilustrasi', label: 'Ilustrasi' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'kontak', label: 'Kontak' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
             href="/"
             className="flex items-center cursor-pointer"
             onClick={(e) => {
               e.preventDefault();
               onNavigate('home');
             }}
           >
            <h1 className="text-2xl font-bold text-gray-900">History Graphic</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-600 ${
                  currentPage === item.id ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleCart}
              className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;