import React from 'react';
import { FEATURED_DISHES, HERITAGE_PHOTOS, RESTAURANT_INFO, TESTIMONIALS } from '../data/restaurantData';
import { MenuItem, TabType } from '../types';

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenReservation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onAddToCart,
  onOpenReservation,
}) => {
  return (
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1]">
      {/* 1. Stunning Hero Section */}
      <section className="relative w-full h-[921px] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with mix-blend-overlay and zoom animation */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${RESTAURANT_INFO.heroBg}')` }}
          data-alt="A luxurious high-end restaurant dining room with dim atmospheric lighting, crystal chandeliers, velvet seating, polished mahogany tables set with fine silverware, and an opulent gold and deep burgundy color palette."
        />
        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-16">
          <span className="inline-block py-1 px-4 rounded-full bg-[#2a2a2a] text-[#e9c349] font-label-md tracking-widest uppercase border border-[#e9c349]/20 shadow-sm">
            Welcome to Royal Spice
          </span>
          <h1 className="font-display-lg text-[#e5e2e1] tracking-tight max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold">
            Experience Fine Dining Like Never Before
          </h1>
          <p className="font-body-lg text-[#ddc0bd] max-w-2xl font-light text-base md:text-lg">
            Delicious Food, Elegant Ambience, Memorable Moments
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] font-label-md px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 font-semibold uppercase tracking-wider text-xs"
            >
              Reserve a Table
            </button>
            <button
              onClick={() => {
                onNavigate('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-transparent hover:bg-[#2a2a2a] text-[#e5e2e1] font-label-md px-8 py-4 rounded-lg border border-[#e9c349]/40 transition-all duration-300 font-semibold uppercase tracking-wider text-xs"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* 2. About Us Section (Our Heritage & Craft) */}
      <section className="w-full py-24 bg-[#0e0e0e] px-6 lg:px-12 border-t border-b border-[#574240]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[#e9c349] font-label-md tracking-widest uppercase text-xs font-semibold">
              Our Heritage & Craft
            </span>
            <h2 className="font-headline-lg text-[#e5e2e1] text-3xl lg:text-4xl font-medium">
              A Symphony of Ancient Recipes and Modern Mastery
            </h2>
            <p className="font-body-lg text-[#ddc0bd] leading-relaxed text-base">
              Founded on the principles of royal hospitality, Royal Spice bridges centuries-old culinary traditions with cutting-edge gastronomy. Every dish is a tribute to the grand kitchens of erstwhile emperors, meticulously recreated using rare spices imported directly from artisanal farms.
            </p>
            <div className="grid grid-cols-2 gap-6 my-4">
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#201f1f] border border-[#574240]/30 shadow-md">
                <span className="font-headline-md text-[#e9c349] text-2xl font-semibold">25+</span>
                <span className="font-body-sm text-[#ddc0bd] text-xs">Master Spice Blends</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#201f1f] border border-[#574240]/30 shadow-md">
                <span className="font-headline-md text-[#e9c349] text-2xl font-semibold">Chef's Choice</span>
                <span className="font-body-sm text-[#ddc0bd] text-xs">Award-Winning Menu</span>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-headline-sm text-[#e5e2e1] font-medium text-lg">Aarav Sharma</span>
                <span className="font-body-sm text-[#e9c349] text-xs font-semibold uppercase tracking-wider">
                  Executive Chef & Founder
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg transition-transform duration-500 hover:scale-[1.02] border border-[#574240]/20"
                style={{ backgroundImage: `url('${HERITAGE_PHOTOS.chefPlating.url}')` }}
                title={HERITAGE_PHOTOS.chefPlating.alt}
              />
              <div
                className="w-full h-40 rounded-xl bg-cover bg-center shadow-lg transition-transform duration-500 hover:scale-[1.02] border border-[#574240]/20"
                style={{ backgroundImage: `url('${HERITAGE_PHOTOS.diningInterior.url}')` }}
                title={HERITAGE_PHOTOS.diningInterior.alt}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="w-full h-40 rounded-xl bg-cover bg-center shadow-lg transition-transform duration-500 hover:scale-[1.02] border border-[#574240]/20"
                style={{ backgroundImage: `url('${HERITAGE_PHOTOS.copperHandis.url}')` }}
                title={HERITAGE_PHOTOS.copperHandis.alt}
              />
              <div
                className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg transition-transform duration-500 hover:scale-[1.02] border border-[#574240]/20"
                style={{ backgroundImage: `url('${HERITAGE_PHOTOS.cocktailBar.url}')` }}
                title={HERITAGE_PHOTOS.cocktailBar.alt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes Section (Culinary Masterpieces) */}
      <section className="w-full py-24 bg-[#131313] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[#e9c349] font-label-md tracking-widest uppercase font-semibold text-xs">
                Culinary Masterpieces
              </span>
              <h2 className="font-headline-lg text-[#e5e2e1] text-3xl font-medium">
                Signature Selections
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#e9c349] hover:text-[#ffe088] font-label-md flex items-center gap-2 group text-xs uppercase tracking-wider font-semibold cursor-pointer w-fit"
            >
              <span>Explore Full Menu</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_DISHES.map((dish) => (
              <div
                key={dish.id}
                className="group bg-[#201f1f] rounded-xl overflow-hidden flex flex-col justify-between border border-[#574240]/20 hover:border-[#e9c349]/40 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${dish.image}')` }}
                  />
                  {dish.badge && (
                    <span className="absolute top-4 right-4 bg-[#131313]/80 backdrop-blur-md text-[#e9c349] font-label-md px-3 py-1 rounded-full border border-[#e9c349]/20 text-[11px] font-bold uppercase tracking-wider">
                      {dish.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h3 className="font-headline-md text-[#e5e2e1] group-hover:text-[#e9c349] transition-colors text-xl font-medium">
                        {dish.name}
                      </h3>
                      <span className="font-headline-md text-[#e9c349] text-xl font-medium">
                        ${dish.price}
                      </span>
                    </div>
                    <p className="font-body-md text-[#ddc0bd] text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onAddToCart(dish)}
                    className="w-full mt-4 bg-[#2a2a2a] hover:bg-[#e9c349] hover:text-[#241a00] text-[#e5e2e1] py-3 rounded-lg font-label-md transition-colors border border-[#e9c349]/20 font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section (Guest Experiences) */}
      <section className="w-full py-24 bg-[#1c1b1b] px-6 lg:px-12 border-t border-[#574240]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-[#e9c349] font-label-md tracking-widest uppercase font-semibold text-xs">
              Guest Experiences
            </span>
            <h2 className="font-headline-lg text-[#e5e2e1] text-3xl font-medium">
              Praise for Royal Spice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#131313] p-8 rounded-xl flex flex-col justify-between border border-[#574240]/20 shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-[#e9c349]">
                    {[...Array(t.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-lg text-[#ddc0bd] italic text-base leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#574240]/30">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-[#e9c349]/30"
                    style={{ backgroundImage: `url('${t.image}')` }}
                  />
                  <div>
                    <span className="font-headline-sm text-[#e5e2e1] block font-medium text-base">
                      {t.name}
                    </span>
                    <span className="font-body-sm text-[#ddc0bd] text-xs">
                      {t.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Reservation Banner */}
      <section className="w-full py-24 bg-[#131313] px-6 lg:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url('${RESTAURANT_INFO.reservationBg}')` }}
        />
        <div className="relative z-10 max-w-5xl mx-auto bg-[#201f1f] border border-[#e9c349]/30 rounded-2xl p-8 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-[#e9c349] font-label-md tracking-widest uppercase font-semibold text-xs">
              Secure Your Table
            </span>
            <h2 className="font-headline-lg text-[#e5e2e1] text-2xl lg:text-3xl font-medium">
              An Unforgettable Evening Awaits You
            </h2>
            <p className="font-body-md text-[#ddc0bd] text-sm leading-relaxed">
              Reservations open 30 days in advance. Secure your spot for an extraordinary gastronomic journey through royal Indian heritage.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto text-center bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] font-label-md px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap font-semibold uppercase tracking-wider text-xs"
            >
              Book Your Table Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
