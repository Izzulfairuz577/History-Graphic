import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryShowcase from './components/CategoryShowcase';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { supabase } from './utils/supabaseClient';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('id, title, description, price_cents, category, image_url, format, size, resolution, license');
      if (error) {
        console.error('Error fetching products:', error.message);
        setProducts([]);
      } else {
        setProducts(
          data.map((item: any) => ({
            id: item.id || "",
            title: item.title || "",
            description: item.description || "",
            price_cents: item.price_cents || 0,
            image_url: item.image_url || "",
            category: item.category || "",
            format: item.format || "",
            size: item.size || "",
            resolution: item.resolution || "",
            license: item.license || ""
          }))
        );
      }
    };
    fetchProducts();
  }, []);

  // Handle URL path changes for navigation
  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname.replace('/', '');
      if (path) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL path
    handlePathChange();

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handlePathChange);
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    
    // Update URL path when navigating
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <FeaturedProducts 
              products={products} 
              onViewDetails={handleViewDetails}
              onNavigate={handleNavigate}
            />
            <CategoryShowcase onNavigate={handleNavigate} />
          </>
        );
      case 'poster':
      case 'template':
      case 'illustration':
      case 'ilustrasi':
        return (
          <ProductGrid
            products={products}
            category={currentPage}
            onViewDetails={handleViewDetails}
          />
        );
      case 'about':
      case 'tentang':
        return <About />;
      case 'contact':
      case 'kontak':
        return <Contact />;
      default:
        return (
          <ProductGrid
            products={products}
            onViewDetails={handleViewDetails}
          />
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onToggleCart={() => setIsCartOpen(true)}
        />
        
        <main>
          {renderPage()}
        </main>
        
        <Footer onNavigate={handleNavigate} />

        {/* Modals */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => setIsCheckoutOpen(true)}
        />
        
        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;