import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullReservations: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFullReservations,
}) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-09-25');
  const [time, setTime] = useState('07:30 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RS-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedCode(code);
  };

  const handleReset = () => {
    setConfirmedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0e0e0e]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="w-full max-w-lg bg-[#1c1b1b] border border-[#e9c349]/40 rounded-2xl shadow-2xl p-6 sm:p-8 relative text-[#e5e2e1] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#2a2a2a] text-[#ddc0bd] hover:text-[#e9c349] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {confirmedCode ? (
          <div className="py-6 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#e9c349]/20 text-[#e9c349] flex items-center justify-center border border-[#e9c349]/40">
              <span className="material-symbols-outlined text-[32px]">
                verified
              </span>
            </div>
            <span className="font-label-md text-[#e9c349] uppercase tracking-widest text-[11px]">
              Table Confirmed
            </span>
            <h3 className="font-headline-md text-2xl font-medium text-[#e5e2e1]">
              Reservation #{confirmedCode}
            </h3>
            <p className="text-xs text-[#ddc0bd] leading-relaxed max-w-xs">
              Thank you, <span className="text-[#e9c349] font-medium">{name}</span>. Your party of {guests} is booked for {date} at {time}.
            </p>
            <div className="w-full bg-[#201f1f] rounded-xl p-3 border border-[#574240]/40 text-left text-xs space-y-1.5 mt-2">
              <div className="flex justify-between">
                <span className="text-[#ddc0bd]">Seating:</span>
                <span className="text-[#e5e2e1]">The Grand Dining Salon</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#ddc0bd]">Location:</span>
                <span className="text-[#e5e2e1]">Sector 62, Indirapuram</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 w-full py-3 bg-[#e9c349] text-[#241a00] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[#af8d11] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="border-b border-[#574240]/30 pb-3">
              <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] text-[11px] block font-semibold">
                Quick Reservation
              </span>
              <h3 className="font-headline-md text-xl font-medium text-[#e5e2e1]">
                Reserve Your Imperial Table
              </h3>
            </div>

            <div>
              <label className="text-xs text-[#ddc0bd] block mb-1">Guests</label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 4, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-2 rounded-lg text-xs font-semibold border ${
                      guests === num
                        ? 'bg-[#e9c349] text-[#241a00] border-[#e9c349]'
                        : 'bg-[#201f1f] text-[#e5e2e1] border-[#574240]/40'
                    }`}
                  >
                    {num} {num === 8 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#ddc0bd] block mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] p-2.5 rounded-lg border border-[#574240]/40 focus:border-[#e9c349] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-[#ddc0bd] block mb-1">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] p-2.5 rounded-lg border border-[#574240]/40 focus:border-[#e9c349] focus:outline-none"
                >
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                  <option value="08:30 PM">08:30 PM</option>
                  <option value="09:30 PM">09:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-[#ddc0bd] block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Lord/Lady Arthur Pendelton"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] p-2.5 rounded-lg border border-[#574240]/40 focus:border-[#e9c349] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-[#ddc0bd] block mb-1">Contact Phone *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#201f1f] text-xs text-[#e5e2e1] p-2.5 rounded-lg border border-[#574240]/40 focus:border-[#e9c349] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-lg"
              >
                Confirm Reservation
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToFullReservations();
                }}
                className="text-center text-[11px] text-[#ddc0bd] hover:text-[#e9c349] py-1 underline"
              >
                Open Full Concierge Booking Chamber
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
