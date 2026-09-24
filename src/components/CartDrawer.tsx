import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onNavigateToMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToMenu,
}) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [tableNumber, setTableNumber] = useState('Table 14');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    setOrderConfirmed(true);
  };

  const handleDone = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0e0e0e]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1c1b1b] border-l border-[#574240]/40 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#574240]/30 flex items-center justify-between bg-[#131313]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c349] text-[24px]">
                room_service
              </span>
              <div>
                <h3 className="font-headline-sm text-[#e5e2e1] text-lg font-medium">
                  Your Gastronomic Order
                </h3>
                <span className="text-xs text-[#ddc0bd]">
                  {cart.reduce((a, b) => a + b.quantity, 0)} items selected
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#2a2a2a] text-[#e5e2e1] hover:text-[#e9c349] flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderConfirmed ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#e9c349]/20 text-[#e9c349] flex items-center justify-center border border-[#e9c349]/40 mb-2 animate-bounce">
                  <span className="material-symbols-outlined text-[36px]">
                    check
                  </span>
                </div>
                <span className="font-label-md text-[#e9c349] uppercase tracking-widest">
                  Order Received With Honor
                </span>
                <h4 className="font-headline-md text-[#e5e2e1] text-2xl font-medium">
                  Order #{Math.floor(100000 + Math.random() * 900000)}
                </h4>
                <p className="text-sm text-[#ddc0bd] leading-relaxed max-w-xs">
                  Executive Chef Aarav Sharma and the royal culinary brigade are now meticulously preparing your dishes.
                </p>
                <div className="w-full bg-[#201f1f] p-4 rounded-xl border border-[#574240]/30 text-left text-xs space-y-2 mt-4 text-[#e5e2e1]">
                  <div className="flex justify-between">
                    <span className="text-[#ddc0bd]">Service Target:</span>
                    <span className="font-semibold text-[#e9c349]">{tableNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ddc0bd]">Total Amount:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#ddc0bd]">Estimated Time:</span>
                    <span>20 - 25 minutes</span>
                  </div>
                </div>
                <button
                  onClick={handleDone}
                  className="mt-6 w-full py-3 bg-[#e9c349] text-[#241a00] font-semibold rounded-lg text-xs uppercase tracking-wider hover:bg-[#af8d11] transition-colors"
                >
                  Return to Menu
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-20 flex flex-col items-center text-center gap-4">
                <span className="material-symbols-outlined text-[#e9c349]/40 text-[56px]">
                  shopping_cart
                </span>
                <h4 className="font-headline-sm text-[#e5e2e1] text-xl">
                  Your Order is Empty
                </h4>
                <p className="text-xs text-[#ddc0bd] max-w-xs">
                  Explore our imperial appetizers, rich slow-cooked curries, and artisanal desserts.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToMenu();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#e9c349] text-[#241a00] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[#af8d11] transition-colors"
                >
                  Explore The Royal Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#201f1f] rounded-xl border border-[#574240]/20 items-center justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-[#574240]/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-headline-sm text-sm text-[#e5e2e1] truncate font-medium">
                        {item.name}
                      </h5>
                      <span className="text-xs text-[#e9c349] font-semibold">
                        ${(item.price * quantity).toFixed(2)}
                      </span>
                      <span className="text-[11px] text-[#ddc0bd]/60 block truncate">
                        ${item.price.toFixed(2)} each
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-[#2a2a2a] px-2 py-1 rounded-lg border border-[#574240]/30 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-[#ddc0bd] hover:text-[#e9c349] w-6 h-6 flex items-center justify-center font-bold"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-[#e5e2e1] px-1">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-[#ddc0bd] hover:text-[#e9c349] w-6 h-6 flex items-center justify-center font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#ddc0bd]/60 hover:text-[#ffb4ab] transition-colors p-1"
                      title="Remove item"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                ))}

                {/* Additional Instructions */}
                <div className="pt-4 border-t border-[#574240]/30 space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e9c349] block mb-1">
                      Dining Option / Table
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-2.5 focus:border-[#e9c349] focus:outline-none"
                    >
                      <option value="Dine-in: Table 14 (Salon)">Dine-in: Table 14 (The Grand Salon)</option>
                      <option value="Dine-in: Private Suite 2">Dine-in: Private Suite 2</option>
                      <option value="Royal Takeaway Collection">Royal Takeaway Collection (Pick-up)</option>
                      <option value="Valet Delivery to Suite">Valet Delivery to Local Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e9c349] block mb-1">
                      Chef Special Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra mild, no onions, gluten sensitive"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-2.5 focus:border-[#e9c349] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {!orderConfirmed && cart.length > 0 && (
            <div className="p-6 bg-[#131313] border-t border-[#574240]/30 space-y-4">
              <div className="space-y-1.5 text-xs text-[#ddc0bd]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#e5e2e1] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Culinary Hospitality Tax (5%)</span>
                  <span className="text-[#e5e2e1] font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#e5e2e1] pt-2 border-t border-[#574240]/30">
                  <span className="font-headline-sm">Grand Total</span>
                  <span className="text-[#e9c349] font-headline-md">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full py-3.5 bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] font-semibold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Transmit Order to Kitchen</span>
                <span className="material-symbols-outlined text-[18px]">restaurant</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
