import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onNavigate: (page: string) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products, 
  onViewDetails, 
  onNavigate 
}) => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi terbaik dari karya digital original kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        <div className="text-center">
          <a
             href="/poster"
             onClick={(e) => {
               e.preventDefault();
               onNavigate('poster');
             }}
             className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
           >
             Lihat Semua Produk
             <ArrowRight className="h-5 w-5" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;