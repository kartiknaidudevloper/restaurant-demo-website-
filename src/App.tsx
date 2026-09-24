/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { ConciergeChatModal } from './components/ConciergeChatModal';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ReservationModal } from './components/ReservationModal';
import { CartItem, MenuItem, TabType } from './types';
import { ContactView } from './views/ContactView';
import { GalleryView } from './views/GalleryView';
import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { ReservationsView } from './views/ReservationsView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`${item.name} ($${item.price.toFixed(2)}) added to your order`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e5e2e1]">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
            onOpenReservation={() => setIsReservationModalOpen(true)}
          />
        )}
        {currentTab === 'menu' && (
          <MenuView onAddToCart={handleAddToCart} />
        )}
        {currentTab === 'gallery' && <GalleryView />}
        {currentTab === 'reservations' && (
          <ReservationsView
            onNavigateToMenu={() => {
              setCurrentTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {currentTab === 'contact' && (
          <ContactView onShowToast={showToast} />
        )}
      </main>

      {/* Opulent Footer */}
      <Footer />

      {/* Floating Concierge Chat Trigger Button */}
      <button
        onClick={() => setIsConciergeOpen(!isConciergeOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] hover:text-[#ffe088] rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#241a00]/20"
        aria-label="Royal Concierge Assistance"
        title="Royal Concierge & WhatsApp Desk"
      >
        <span className="material-symbols-outlined text-[28px]">
          {isConciergeOpen ? 'close' : 'chat'}
        </span>
      </button>

      {/* Concierge Popover Dialog */}
      <ConciergeChatModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        onOpenReservation={() => {
          setIsConciergeOpen(false);
          setIsReservationModalOpen(true);
        }}
      />

      {/* Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToMenu={() => {
          setCurrentTab('menu');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Quick Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        onNavigateToFullReservations={() => {
          setCurrentTab('reservations');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#e9c349] text-[#241a00] px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-[#241a00]/30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span className="font-label-md text-xs uppercase tracking-wider font-semibold">
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
}
