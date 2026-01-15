import { useState } from 'react';
import { Plus } from 'lucide-react';
import { menuItems } from '../mockData';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'shake', label: 'Protein Shakes' },
    { id: 'tea', label: 'Energy Teas' },
    { id: 'food', label: 'Food' },
    { id: 'booster', label: 'Supplements' }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-vital-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-vital-green-100">
            Delicious nutrition made simple. All items available for pickup.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-vital-green text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-charcoal-50 shadow'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden"
            >
              <div className="">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{item.name}</h3>
                <p className="text-charcoal-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sunrise-orange">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-vital-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-vital-green-700 transition-all flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-charcoal-600 text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
