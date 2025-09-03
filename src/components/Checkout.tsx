import React, { useState } from 'react';
import { X, CreditCard, Smartphone, MessageCircle, ArrowLeft } from 'lucide-react';
import { CheckoutForm } from '../types';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const { state, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'whatsapp'
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.paymentMethod === 'whatsapp') {
      handleWhatsAppCheckout();
    } else {
      setStep('payment');
    }
  };

  const handleWhatsAppCheckout = () => {
    const message = `Halo! Saya ingin membeli produk dari History Graphic:

*Detail Pesanan:*
${state.items.map(item => `• ${item.product.title} (${item.quantity}x) - ${formatPrice(item.product.price * item.quantity)}`).join('\n')}

*Total: ${formatPrice(state.total)}*

*Data Pembeli:*
Nama: ${form.name}
Email: ${form.email}
No. HP: ${form.phone}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/6285147010112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    onClose();
  };

  const handlePaymentComplete = () => {
    alert('Terima kasih! Pesanan Anda sedang diproses. Kami akan mengirimkan detail pembayaran melalui email.');
    clearCart();
    onClose();
    setStep('form');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {step === 'payment' && (
              <button
                onClick={() => setStep('form')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h2 className="text-xl font-semibold text-gray-900">
              {step === 'form' ? 'Checkout' : 'Pembayaran'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Ringkasan Pesanan</h3>
                <div className="space-y-2">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span>{item.product.title} ({item.quantity}x)</span>
                      <span>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                </div>
              </div>

              {/* Buyer Form */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Data Pembeli</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Metode Pembayaran</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="whatsapp"
                      checked={form.paymentMethod === 'whatsapp'}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as any })}
                      className="mr-3"
                    />
                    <MessageCircle className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <div className="font-medium">WhatsApp (Recommended)</div>
                      <div className="text-sm text-gray-600">Checkout langsung via WhatsApp</div>
                    </div>
                  </label>

                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={form.paymentMethod === 'bank'}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as any })}
                      className="mr-3"
                    />
                    <CreditCard className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <div className="font-medium">Transfer Bank</div>
                      <div className="text-sm text-gray-600">BCA, BRI, Mandiri</div>
                    </div>
                  </label>

                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="ewallet"
                      checked={form.paymentMethod === 'ewallet'}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as any })}
                      className="mr-3"
                    />
                    <Smartphone className="h-5 w-5 mr-3 text-purple-600" />
                    <div>
                      <div className="font-medium">E-Wallet</div>
                      <div className="text-sm text-gray-600">GoPay, OVO, DANA</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                {form.paymentMethod === 'whatsapp' ? 'Lanjut ke WhatsApp' : 'Lanjut ke Pembayaran'}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instruksi Pembayaran</h3>
                <p className="text-gray-600">Silakan lakukan pembayaran sesuai metode yang dipilih</p>
              </div>

              {form.paymentMethod === 'bank' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Transfer Bank</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>Bank BCA: 1234567890</p>
                    <p>a.n. Izzul Fairuz Mahendra</p>
                    <p className="font-semibold">Jumlah: {formatPrice(state.total)}</p>
                  </div>
                </div>
              )}

              {form.paymentMethod === 'ewallet' && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">E-Wallet</h4>
                  <div className="text-sm text-purple-800 space-y-1">
                    <p>GoPay/OVO/DANA: 085147010112</p>
                    <p>a.n. Izzul Fairuz Mahendra</p>
                    <p className="font-semibold">Jumlah: {formatPrice(state.total)}</p>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  Setelah transfer, kirim bukti pembayaran ke WhatsApp atau email kami. 
                  File akan dikirimkan dalam 1x24 jam.
                </p>
              </div>

              <button
                onClick={handlePaymentComplete}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Selesaikan Pembayaran
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;