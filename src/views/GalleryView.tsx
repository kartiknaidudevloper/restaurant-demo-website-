import React, { useMemo, useState } from 'react';
import { LightboxModal } from '../components/LightboxModal';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GalleryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'ambience', label: 'Restaurant Ambience' },
    { id: 'private', label: 'Private Dining' },
    { id: 'events', label: 'Events' },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1]">
      {/* Editorial Header */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-gradient-to-b from-[#1c1b1b] to-[#131313] overflow-hidden border-b border-[#574240]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-label-md text-[#e9c349] uppercase tracking-[0.3em] mb-4 text-xs font-semibold">
            Visual Odyssey
          </span>
          <h1 className="font-display-lg text-[#e5e2e1] mb-6 text-4xl lg:text-5xl font-semibold">
            The Royal Gallery
          </h1>
          <p className="font-body-lg text-[#ddc0bd] max-w-2xl mb-12 text-base leading-relaxed">
            Immerse yourself in the breathtaking ambience, masterfully plated culinary art, and exclusive moments that define the Royal Spice experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#e9c349] text-[#241a00] shadow-md'
                      : 'bg-[#2a2a2a] text-[#e5e2e1] hover:text-[#e9c349] hover:bg-[#353534]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full pb-32 pt-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer bg-[#201f1f] ${item.aspectRatio} border border-[#574240]/20 hover:border-[#e9c349]/40 transition-all shadow-lg`}
            >
              <div
                className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
                title={item.alt}
              />
              {/* Overlay with subtle dark gradient and text appearing on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#e9c349] font-label-md mb-1 text-xs uppercase tracking-wider font-semibold">
                  {item.categoryLabel}
                </span>
                <h3 className="font-headline-md text-[#e5e2e1] text-xl font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
