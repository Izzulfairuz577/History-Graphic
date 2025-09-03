import React from 'react';
import { X, ShoppingCart, Download, Shield, Palette } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Detail Produk</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {product.featured && (
                    <span className="bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Unggulan
                    </span>
                  )}
                  {product.popular && (
                    <span className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Populer
                    </span>
                  )}
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Spesifikasi Produk
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Format File:</span>
                    <p className="text-gray-900">{product.format}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Ukuran:</span>
                    <p className="text-gray-900">{product.size}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Resolusi:</span>
                    <p className="text-gray-900">{product.resolution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Lisensi:</span>
                    <p className="text-gray-900">{product.license}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    Download instan setelah pembayaran
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Tambahkan ke Keranjang
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    Pembayaran aman dan terpercaya
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;