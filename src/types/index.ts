export interface Product {
  id: string;
  title: string;
  description: string;
  price_cents: number;
  image_url: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  paymentMethod: 'bank' | 'ewallet' | 'whatsapp';
}