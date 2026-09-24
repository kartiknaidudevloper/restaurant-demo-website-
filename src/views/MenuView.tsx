import React, { useMemo, useState } from 'react';
import { ALL_MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuViewProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'starters', label: 'Starters' },
    { id: 'main-course', label: 'Main Course' },
    { id: 'chinese', label: 'Chinese Specials' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((dish) => {
      const matchCat =
        selectedCategory === 'all' || dish.categories.includes(selectedCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.ingredients.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1]">
      {/* Top Editorial Header & Search Banner */}
      <section className="w-full bg-[#1c1b1b] py-16 px-6 lg:px-12 relative overflow-hidden border-b border-[#574240]/20">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ffb3ad]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#e9c349]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative z-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[#e9c349] font-label-md tracking-widest uppercase text-xs font-semibold">
              Gastronomic Masterpieces
            </span>
            <h1 className="font-display-lg text-[#e5e2e1] text-4xl lg:text-5xl font-semibold">
              The Royal Menu
            </h1>
            <p className="text-base text-[#ddc0bd] leading-relaxed">
              Carefully curated recipes blending centuries-old imperial heritage with contemporary culinary artistry.
            </p>
          </div>

          {/* Real-time Search Input */}
          <div className="w-full md:w-80 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#e9c349] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by dish or ingredients..."
              className="w-full bg-[#353534] text-[#e5e2e1] placeholder:text-[#ddc0bd]/60 pl-12 pr-10 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e9c349] transition-all border border-[#574240]/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ddc0bd] hover:text-[#e5e2e1] p-1"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Tabs (Sticky below navbar) */}
      <section className="w-full bg-[#131313]/90 py-4 px-6 lg:px-12 sticky top-20 z-40 backdrop-blur-xl border-b border-[#574240]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap uppercase tracking-wider cursor-pointer ${
                  isSelected
                    ? 'bg-[#e9c349] text-[#241a00] shadow-sm'
                    : 'bg-[#353534] text-[#ddc0bd] hover:text-[#e5e2e1] hover:bg-[#393939]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Menu Items Grid Section */}
      <section className="w-full py-16 px-6 lg:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            /* No Results State */
            <div className="flex flex-col items-center justify-center py-24 text-center gap-4 animate-in fade-in duration-300">
              <span className="material-symbols-outlined text-[#e9c349] text-[52px]">
                search_off
              </span>
              <h3 className="font-headline-md text-[#e5e2e1] text-2xl font-medium">
                No culinary matches found
              </h3>
              <p className="text-sm text-[#ddc0bd] max-w-md">
                We couldn't find any dishes matching "{searchQuery}". Please try different keywords or select another category above.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#e9c349] text-[#241a00] text-xs font-semibold uppercase tracking-wider"
              >
                Reset Menu Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  className="flex flex-col bg-[#0e0e0e] rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-[#574240]/25"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <div
                      className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${dish.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#131313]/80 backdrop-blur-md text-[#e9c349] text-[11px] font-bold uppercase tracking-wider border border-[#e9c349]/20">
                        {dish.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                      {dish.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-[#7a1c1c]/90 text-[#ffdad6] text-[11px] font-bold uppercase tracking-wider shadow">
                          {dish.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between gap-6 bg-[#0e0e0e]">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-headline-md text-[#e5e2e1] text-xl font-medium group-hover:text-[#e9c349] transition-colors">
                          {dish.name}
                        </h3>
                        <span className="font-headline-md text-[#e9c349] text-xl font-medium shrink-0">
                          ${dish.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-[#ddc0bd] leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#574240]/30">
                      <span className="text-xs text-[#ddc0bd] flex items-center gap-1">
                        {dish.spiceLevel && (
                          <span
                            className="material-symbols-outlined text-[16px] text-[#e9c349]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {dish.spiceLevel.includes('Spicy')
                              ? 'local_fire_department'
                              : dish.spiceLevel === 'Refreshing'
                              ? 'water_drop'
                              : dish.spiceLevel === 'Chilled'
                              ? 'ac_unit'
                              : 'restaurant'}
                          </span>
                        )}
                        <span>{dish.spiceLevel || 'Chef Special'}</span>
                      </span>

                      <button
                        onClick={() => onAddToCart(dish)}
                        className="bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] hover:text-[#ffe088] px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 active:scale-95 shadow"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          add_shopping_cart
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
