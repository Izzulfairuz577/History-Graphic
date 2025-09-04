import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { state, removeFromCart, updateQuantity } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end z-50">
      <div className="bg-white h-full w-full max-w-md shadow-xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Keranjang Belanja</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Keranjang masih kosong</p>
              <p className="text-gray-400 text-sm mt-2">Tambahkan produk untuk memulai belanja</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-3">
                    <img
                      src={item.product.image_url}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        {item.product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {formatPrice(item.product.price_cents)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded-md transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded-md transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(state.total)}
              </span>
            </div>
            <button
              onClick={() => {
                onCheckout();
                onClose();
              }}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Checkout ({state.items.reduce((sum, item) => sum + item.quantity, 0)} item)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;