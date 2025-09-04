import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  category?: string;
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, category, onViewDetails }) => {
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'price-low' | 'price-high'>('latest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = category ? products.filter(p => p.category === category) : products;
    
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      case 'price-low':
        return filtered.sort((a, b) => a.price_cents - b.price_cents);
      case 'price-high':
        return filtered.sort((a, b) => b.price_cents - a.price_cents);
      default:
        return filtered;
    }
  }, [products, category, sortBy]);

  const getCategoryTitle = () => {
    switch (category) {
      case 'poster': return 'Poster Digital';
      case 'template': return 'Template Desain';
      case 'illustration': return 'Ilustrasi';
      default: return 'Semua Produk';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{getCategoryTitle()}</h2>
          <p className="text-gray-600">{filteredProducts.length} produk tersedia</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
          >
            <option value="latest">Terbaru</option>
            <option value="popular">Terpopuler</option>
            <option value="price-low">Harga: Rendah ke Tinggi</option>
            <option value="price-high">Harga: Tinggi ke Rendah</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Tidak ada produk ditemukan</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;