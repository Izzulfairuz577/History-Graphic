import React from 'react';
import { ArrowRight, Image, Layout, Brush } from 'lucide-react';

interface CategoryShowcaseProps {
  onNavigate: (page: string) => void;
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: 'poster',
      title: 'Poster Digital',
      description: 'Koleksi poster dengan tema modern, retro, dan minimalis',
      icon: Image,
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'template',
      title: 'Template Desain',
      description: 'Template untuk presentasi, media sosial, dan branding',
      icon: Layout,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'ilustrasi',
      title: 'Ilustrasi',
      description: 'Ilustrasi digital bergaya unik dan original',
      icon: Brush,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kategori Produk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai kategori produk digital yang kami tawarkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <a
                key={category.id}
                href={`/${category.id}`}
                className="group cursor-pointer block"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(category.id);
                }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <IconComponent className="h-12 w-12 mx-auto mb-2" />
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Lihat koleksi</span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;