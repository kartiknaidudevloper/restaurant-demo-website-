import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationsViewProps {
  onNavigateToMenu: () => void;
}

export const ReservationsView: React.FC<ReservationsViewProps> = ({ onNavigateToMenu }) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-09-25');
  const [time, setTime] = useState('07:30 PM');
  const [seatingArea, setSeatingArea] = useState('The Grand Dining Salon');
  const [occasion, setOccasion] = useState('Anniversary');
  const [title, setTitle] = useState('Lady/Lord');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const seatingOptions = [
    {
      id: 'salon',
      name: 'The Grand Dining Salon',
      desc: 'Crystal chandeliers, velvet banquettes, live sitar melodies',
      badge: 'Signature Ambience',
    },
    {
      id: 'maharajah',
      name: 'The Maharajah Suite',
      desc: 'Exclusive private dining chamber for up to 12 esteemed guests',
      badge: 'Private Dining',
    },
    {
      id: 'alcove',
      name: 'The Velvet Alcove',
      desc: 'Romantic semi-private booth draped in imperial burgundy silks',
      badge: 'Intimate Seating',
    },
    {
      id: 'chef',
      name: 'Chef\'s Tasting Counter',
      desc: 'Front-row view of Executive Chef Aarav Sharma plating each course',
      badge: 'Interactive Experience',
    },
  ];

  const timeSlots = [
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RS-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setIsConfirmed(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1]">
      {/* Header Banner */}
      <section className="relative w-full py-20 px-6 lg:px-12 bg-gradient-to-b from-[#1c1b1b] to-[#131313] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-label-md text-[#e9c349] uppercase tracking-[0.3em] mb-4">
            Concierge Seating
          </span>
          <h1 className="font-display-lg text-[#e5e2e1] mb-4">
            Reserve Your Imperial Table
          </h1>
          <p className="font-body-lg text-[#ddc0bd] max-w-2xl">
            Reservations are honored up to 30 days in advance. Step into an evening of bespoke Mughlai royalty, rare aged spices, and impeccable hospitality.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="w-full pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {isConfirmed ? (
            /* Confirmation Card */
            <div className="bg-[#1c1b1b] border border-[#e9c349]/40 rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-[#e9c349]/20 text-[#e9c349] flex items-center justify-center border border-[#e9c349]/50 mb-6">
                <span className="material-symbols-outlined text-[42px]">
                  verified
                </span>
              </div>
              <span className="font-label-md text-[#e9c349] uppercase tracking-[0.25em] mb-2">
                Table Confirmed With Honor
              </span>
              <h2 className="font-headline-lg text-[#e5e2e1] text-3xl mb-2 font-medium">
                Reservation #{reservationCode}
              </h2>
              <p className="text-[#ddc0bd] max-w-lg mb-8 text-sm">
                A warm welcome awaits you, {title} {name}. A formal confirmation dispatch has been sent to <span className="text-[#e9c349] font-medium">{email || 'your email'}</span>.
              </p>

              {/* Reservation Receipt Details */}
              <div className="w-full max-w-md bg-[#201f1f] rounded-xl p-6 border border-[#574240]/40 text-left space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#574240]/30 pb-2">
                  <span className="text-[#ddc0bd]">Sanctuary:</span>
                  <span className="font-medium text-[#e5e2e1]">Royal Spice, Indirapuram</span>
                </div>
                <div className="flex justify-between border-b border-[#574240]/30 pb-2">
                  <span className="text-[#ddc0bd]">Date & Time:</span>
                  <span className="font-medium text-[#e9c349]">{date} at {time}</span>
                </div>
                <div className="flex justify-between border-b border-[#574240]/30 pb-2">
                  <span className="text-[#ddc0bd]">Party Size:</span>
                  <span className="font-medium text-[#e5e2e1]">{guests} Esteemed Guests</span>
                </div>
                <div className="flex justify-between border-b border-[#574240]/30 pb-2">
                  <span className="text-[#ddc0bd]">Chamber / Seating:</span>
                  <span className="font-medium text-[#e5e2e1]">{seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#ddc0bd]">Occasion:</span>
                  <span className="font-medium text-[#e5e2e1]">{occasion}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => setIsConfirmed(false)}
                  className="px-6 py-3 rounded-lg border border-[#e9c349]/40 text-[#e5e2e1] hover:bg-[#201f1f] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Modify Details
                </button>
                <button
                  onClick={onNavigateToMenu}
                  className="px-8 py-3 rounded-lg bg-[#e9c349] text-[#241a00] hover:bg-[#af8d11] text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Pre-Select Dishes From Menu
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form
              onSubmit={handleSubmit}
              className="bg-[#1c1b1b] border border-[#574240]/40 rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col gap-10"
            >
              {/* Step 1: Party Size & Date */}
              <div>
                <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block">
                  Step 1: Party & Date
                </span>
                <h3 className="font-headline-md text-[#e5e2e1] text-xl mb-4 font-medium">
                  Select Guest Count & Evening
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-2 font-medium">
                      Number of Guests
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 4, 6, 8].map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setGuests(count)}
                          className={`py-3 rounded-lg text-sm font-semibold transition-all border ${
                            guests === count
                              ? 'bg-[#e9c349] text-[#241a00] border-[#e9c349] shadow'
                              : 'bg-[#201f1f] text-[#e5e2e1] border-[#574240]/40 hover:border-[#e9c349]/40'
                          }`}
                        >
                          {count} {count === 8 ? '+' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-2 font-medium">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Time Slot */}
              <div>
                <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block">
                  Step 2: Time Selection
                </span>
                <h3 className="font-headline-md text-[#e5e2e1] text-xl mb-4 font-medium">
                  Choose Preferred Seating Hour
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border ${
                        time === slot
                          ? 'bg-[#e9c349] text-[#241a00] border-[#e9c349] shadow-md'
                          : 'bg-[#201f1f] text-[#ddc0bd] border-[#574240]/40 hover:text-[#e5e2e1] hover:border-[#e9c349]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Seating Chamber Preference */}
              <div>
                <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block">
                  Step 3: Atmosphere
                </span>
                <h3 className="font-headline-md text-[#e5e2e1] text-xl mb-4 font-medium">
                  Select Seating Chamber
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {seatingOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSeatingArea(opt.name)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        seatingArea === opt.name
                          ? 'bg-[#201f1f] border-[#e9c349] ring-1 ring-[#e9c349]'
                          : 'bg-[#201f1f]/50 border-[#574240]/30 hover:border-[#e9c349]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-headline-sm text-sm text-[#e5e2e1] font-medium">
                          {opt.name}
                        </h4>
                        <span className="text-[10px] uppercase font-bold text-[#e9c349] bg-[#e9c349]/10 px-2 py-0.5 rounded border border-[#e9c349]/20">
                          {opt.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#ddc0bd]/80">
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Guest Contact Details */}
              <div>
                <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block">
                  Step 4: Esteemed Guest Details
                </span>
                <h3 className="font-headline-md text-[#e5e2e1] text-xl mb-4 font-medium">
                  Contact & Concierge Notes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Honorific
                    </label>
                    <select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    >
                      <option value="Lady/Lord">Lady/Lord</option>
                      <option value="Sir">Sir</option>
                      <option value="Madam">Madam</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Arthur Pendelton"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arthur@pendelton.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Special Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    >
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Birthday">Birthday Festivity</option>
                      <option value="Romantic Dinner">Romantic Candlelit Dinner</option>
                      <option value="Business Entertaining">Business Entertaining</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Casual Evening">Casual Evening</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#ddc0bd] block mb-1">
                      Special Dietary Requests / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian preference, nut allergy, quiet table"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#201f1f] text-sm text-[#e5e2e1] border border-[#574240]/40 rounded-lg p-3 focus:outline-none focus:border-[#e9c349]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#574240]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#ddc0bd]/80">
                  <span className="text-[#e9c349] font-medium">Guarantee:</span> No deposit required. Table held for 20 minutes past reservation time.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] font-semibold rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          )}

          {/* Hospitality Policies */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#ddc0bd]">
            <div className="p-6 bg-[#1c1b1b] rounded-xl border border-[#574240]/30">
              <span className="material-symbols-outlined text-[#e9c349] text-[24px] mb-2 block">
                apparel
              </span>
              <h4 className="font-headline-sm text-sm text-[#e5e2e1] mb-1 font-medium">
                Smart Elegant Dress Code
              </h4>
              <p>We invite guests to dress in sophisticated evening or traditional attire. Athletic garments are respectfully discouraged.</p>
            </div>
            <div className="p-6 bg-[#1c1b1b] rounded-xl border border-[#574240]/30">
              <span className="material-symbols-outlined text-[#e9c349] text-[24px] mb-2 block">
                directions_car
              </span>
              <h4 className="font-headline-sm text-sm text-[#e5e2e1] mb-1 font-medium">
                Complimentary Valet
              </h4>
              <p>Direct white-glove valet service is at your disposal upon arrival at the Indirapuram portico.</p>
            </div>
            <div className="p-6 bg-[#1c1b1b] rounded-xl border border-[#574240]/30">
              <span className="material-symbols-outlined text-[#e9c349] text-[24px] mb-2 block">
                event_available
              </span>
              <h4 className="font-headline-sm text-sm text-[#e5e2e1] mb-1 font-medium">
                Bespoke Tasting Menus
              </h4>
              <p>Parties of 6 or more are eligible for Chef Aarav Sharma’s Imperial 7-Course Degustation with advance request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
