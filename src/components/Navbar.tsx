import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { TabType } from '../types';

interface NavbarProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#574240]/20 shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer text-left group"
        >
          <img
            src={RESTAURANT_INFO.logo}
            alt="Royal Spice Logo"
            className="h-9 w-auto object-contain rounded-full shadow-md group-hover:scale-105 transition-transform"
          />
          <span className="font-headline-lg text-[#e5e2e1] tracking-wider font-medium text-2xl">
            Royal Spice
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-all duration-200 cursor-pointer text-sm font-medium ${
                  isActive
                    ? 'bg-[#7a1c1c] text-[#ffdad6] font-bold rounded-lg px-3.5 py-1.5 shadow-sm'
                    : 'text-[#ddc0bd] hover:text-[#e5e2e1] hover:bg-[#201f1f]/60 px-3 py-1.5 rounded-lg'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Cart, Reserve Table, User Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg bg-[#201f1f] text-[#e9c349] hover:bg-[#2a2a2a] transition-colors border border-[#e9c349]/20"
            title="View Order"
            aria-label="View Order"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#e9c349] text-[#241a00] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Reserve Table Button */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center justify-center bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] hover:text-[#ffe088] px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow hover:shadow-lg active:scale-95"
          >
            Reserve Table
          </button>

          {/* User Icon Avatar */}
          <div
            className="w-8 h-8 rounded-full bg-[#ffb3ad] flex items-center justify-center text-[#640b0f] shadow select-none cursor-pointer"
            title="Guest Profile"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e5e2e1] hover:text-[#e9c349]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c1b1b] border-b border-[#574240]/40 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#7a1c1c] text-[#ffdad6] font-bold'
                    : 'text-[#ddc0bd] hover:text-[#e5e2e1]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#574240]/30 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenReservation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#e9c349] text-[#241a00] font-semibold py-2.5 rounded-lg text-xs uppercase tracking-wider text-center"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
