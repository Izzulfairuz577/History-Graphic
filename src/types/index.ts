export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'poster' | 'template' | 'illustration';
  image: string;
  format: string;
  size: string;
  resolution: string;
  license: string;
  featured?: boolean;
  popular?: boolean;
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