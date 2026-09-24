import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactViewProps {
  onShowToast: (msg: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onShowToast }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Private Dining Event');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast('Inquiry transmitted. Our Maître d\' will contact you within 24 hours.');
  };

  return (
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1]">
      {/* Hero / Header Section */}
      <section className="relative w-full py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#1c1b1b] to-[#131313] overflow-hidden border-b border-[#574240]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e9c349_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-4 text-xs font-semibold">
            Get in Touch
          </span>
          <h1 className="font-display-lg text-[#e5e2e1] mb-6 max-w-3xl text-4xl lg:text-5xl font-semibold">
            Connect With Royal Spice
          </h1>
          <p className="font-body-lg text-[#ddc0bd] max-w-2xl text-base leading-relaxed">
            Whether you wish to reserve a private dining chamber, inquire about bespoke catering, or share your gastronomic experience, our concierge team is at your disposal.
          </p>
        </div>
      </section>

      {/* Contact Information Cards Grid */}
      <section className="w-full py-16 px-6 lg:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Card */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl flex flex-col items-start transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#e9c349]/15">
            <div className="w-12 h-12 rounded-lg bg-[#7a1c1c] flex items-center justify-center mb-6 text-[#ffb3ad]">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
            </div>
            <h3 className="font-headline-sm text-[#e5e2e1] mb-3 text-lg font-medium">
              Our Sanctuary
            </h3>
            <p className="font-body-md text-[#ddc0bd] mb-6 text-sm leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
            <a
              className="mt-auto text-[#e9c349] font-label-md flex items-center gap-2 hover:underline text-xs uppercase tracking-wider font-semibold"
              href="#map-section"
            >
              <span>View on Map</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl flex flex-col items-start transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#e9c349]/15">
            <div className="w-12 h-12 rounded-lg bg-[#7a1c1c] flex items-center justify-center mb-6 text-[#ffb3ad]">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
            </div>
            <h3 className="font-headline-sm text-[#e5e2e1] mb-3 text-lg font-medium">
              Direct Line
            </h3>
            <p className="font-body-md text-[#ddc0bd] mb-6 text-sm leading-relaxed">
              Concierge: {RESTAURANT_INFO.phoneConcierge}
              <br />
              Catering Desk: {RESTAURANT_INFO.phoneCatering}
            </p>
            <a
              className="mt-auto text-[#e9c349] font-label-md flex items-center gap-2 hover:underline text-xs uppercase tracking-wider font-semibold"
              href={`tel:${RESTAURANT_INFO.phoneConcierge.replace(/[^0-9+]/g, '')}`}
            >
              <span>Call Now</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl flex flex-col items-start transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#e9c349]/15">
            <div className="w-12 h-12 rounded-lg bg-[#7a1c1c] flex items-center justify-center mb-6 text-[#ffb3ad]">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                mail
              </span>
            </div>
            <h3 className="font-headline-sm text-[#e5e2e1] mb-3 text-lg font-medium">
              Electronic Mail
            </h3>
            <p className="font-body-md text-[#ddc0bd] mb-6 text-sm leading-relaxed">
              Reservations: {RESTAURANT_INFO.emailReservations}
              <br />
              Events: {RESTAURANT_INFO.emailEvents}
            </p>
            <a
              className="mt-auto text-[#e9c349] font-label-md flex items-center gap-2 hover:underline text-xs uppercase tracking-wider font-semibold"
              href={`mailto:${RESTAURANT_INFO.emailReservations}`}
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl flex flex-col items-start transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#e9c349]/15">
            <div className="w-12 h-12 rounded-lg bg-[#7a1c1c] flex items-center justify-center mb-6 text-[#ffb3ad]">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                schedule
              </span>
            </div>
            <h3 className="font-headline-sm text-[#e5e2e1] mb-3 text-lg font-medium">
              Hours of Grace
            </h3>
            <p className="font-body-md text-[#ddc0bd] mb-6 text-sm leading-relaxed">
              {RESTAURANT_INFO.hours.weekdays}
              <br />
              {RESTAURANT_INFO.hours.weekends}
            </p>
            <span className="mt-auto text-[#e9c349] font-label-md flex items-center gap-2 text-xs uppercase tracking-wider font-semibold">
              <span>Open Daily</span>
              <span className="w-2 h-2 rounded-full bg-[#e9c349] inline-block animate-pulse" />
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Form & Atmosphere Split Section (Bespoke Inquiries) */}
      <section className="w-full py-20 px-6 lg:px-12 bg-[#0e0e0e] border-t border-b border-[#574240]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Context / Imagery */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] text-xs font-semibold">
              Bespoke Inquiries
            </span>
            <h2 className="font-headline-lg text-[#e5e2e1] text-3xl font-medium">
              Plan Your Private Event or Share Feedback
            </h2>
            <p className="font-body-md text-[#ddc0bd] text-sm leading-relaxed">
              From intimate anniversary gatherings to grand corporate celebrations, our private dining coordinators curate flawless experiences tailored to your refined palate. Fill out the inquiry form, and our Maître d' will contact you within 24 hours.
            </p>
            <div className="relative w-full h-80 rounded-xl overflow-hidden mt-4 shadow-xl border border-[#e9c349]/20">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${RESTAURANT_INFO.contactPrivateDiningImg}')` }}
                title="An opulent private dining room inside Royal Spice Restaurant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#201f1f] p-8 lg:p-12 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#e9c349]/20">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e9c349]/20 text-[#e9c349] flex items-center justify-center border border-[#e9c349]/40 mb-2">
                  <span className="material-symbols-outlined text-[36px]">
                    done_all
                  </span>
                </div>
                <h3 className="font-headline-md text-[#e5e2e1] text-2xl font-medium">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#ddc0bd] max-w-md">
                  Thank you, <span className="text-[#e9c349] font-medium">{fullName}</span>. Your inquiry regarding <span className="text-[#e5e2e1]">{inquiryType}</span> has been received with distinction by our concierge.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#e9c349] text-[#241a00] text-xs font-semibold uppercase tracking-wider rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-[#e9c349] uppercase text-xs font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lord/Lady Arthur Pendelton"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-[#2a2a2a] text-[#e5e2e1] px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e9c349] border border-[#574240]/40 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-[#e9c349] uppercase text-xs font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arthur@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#2a2a2a] text-[#e5e2e1] px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e9c349] border border-[#574240]/40 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-[#e9c349] uppercase text-xs font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-[#2a2a2a] text-[#e5e2e1] px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e9c349] border border-[#574240]/40 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-[#e9c349] uppercase text-xs font-semibold">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="bg-[#2a2a2a] text-[#e5e2e1] px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e9c349] border border-[#574240]/40 text-sm"
                    >
                      <option value="Private Dining Event">Private Dining Event</option>
                      <option value="Catering Service">Catering Service</option>
                      <option value="General Feedback">General Feedback</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-[#e9c349] uppercase text-xs font-semibold">
                    Your Message or Event Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please detail your date preferences, guest count, and any specialized dietary requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-[#2a2a2a] text-[#e5e2e1] px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e9c349] border border-[#574240]/40 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#e9c349] hover:bg-[#af8d11] text-[#241a00] hover:text-[#ffe088] py-4 rounded-lg font-label-md uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg font-semibold text-xs active:scale-95"
                >
                  <span>Transmit Inquiry</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Google Maps & Directions Section */}
      <section className="w-full py-20 px-6 lg:px-12 bg-[#131313]" id="map-section">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block text-xs font-semibold">
                Location & Access
              </span>
              <h2 className="font-headline-lg text-[#e5e2e1] text-3xl font-medium">
                Find Royal Spice in Indirapuram
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://maps.google.com/?q=Sector+62,+Indirapuram,+Ghaziabad,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors bg-[#2a2a2a] text-[#e5e2e1] hover:text-[#e9c349] flex items-center gap-2 border border-[#e9c349]/20 shadow"
              >
                <span className="material-symbols-outlined text-[18px]">near_me</span>
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border border-[#e9c349]/20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${RESTAURANT_INFO.mapImg}')` }}
              title="Map location of Sector 62, Indirapuram, Ghaziabad"
            />
            {/* Overlay Floating Card for Quick Directions */}
            <div className="absolute bottom-6 left-6 bg-[#131313]/95 backdrop-blur-md p-6 rounded-xl max-w-sm shadow-2xl border border-[#e9c349]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e9c349] text-[#241a00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    directions_car
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[#e5e2e1] mb-1 text-base font-medium">
                    Valet Parking Available
                  </h4>
                  <p className="font-body-sm text-[#ddc0bd] text-xs leading-relaxed">
                    Complimentary white-glove valet service is provided directly at our main entrance for all esteemed guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Connection Section */}
      <section className="w-full py-16 px-6 lg:px-12 bg-[#1c1b1b] border-t border-[#574240]/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div>
            <span className="text-[#e9c349] font-label-md uppercase tracking-[0.2em] mb-2 block text-xs font-semibold">
              Social Society
            </span>
            <h2 className="font-headline-lg text-[#e5e2e1] mb-3 text-3xl font-medium">
              Follow Our Culinary Journey
            </h2>
            <p className="font-body-md text-[#ddc0bd] max-w-lg text-sm leading-relaxed">
              Immerse yourself in daily captures of our chef's creations, behind-the-scenes masterclasses, and exclusive announcements.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] p-6 rounded-xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 shadow-md group border border-[#e9c349]/15"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-[#241a00] transition-colors">
                <span className="material-symbols-outlined text-[22px]">photo_camera</span>
              </div>
              <span className="font-headline-sm text-[#e5e2e1] font-medium text-base">Instagram</span>
              <span className="font-body-sm text-[#ddc0bd] text-xs">@RoyalSpiceFineDining</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] p-6 rounded-xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 shadow-md group border border-[#e9c349]/15"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-[#241a00] transition-colors">
                <span className="material-symbols-outlined text-[22px]">public</span>
              </div>
              <span className="font-headline-sm text-[#e5e2e1] font-medium text-base">Facebook</span>
              <span className="font-body-sm text-[#ddc0bd] text-xs">/RoyalSpiceOfficial</span>
            </a>

            {/* TripAdvisor */}
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] p-6 rounded-xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 shadow-md group border border-[#e9c349]/15"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-[#241a00] transition-colors">
                <span className="material-symbols-outlined text-[22px]">star</span>
              </div>
              <span className="font-headline-sm text-[#e5e2e1] font-medium text-base">TripAdvisor</span>
              <span className="font-body-sm text-[#ddc0bd] text-xs">Ranked #1 Fine Dining</span>
            </a>

            {/* Zomato */}
            <a
              href="https://zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] p-6 rounded-xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 shadow-md group border border-[#e9c349]/15"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-[#241a00] transition-colors">
                <span className="material-symbols-outlined text-[22px]">restaurant_menu</span>
              </div>
              <span className="font-headline-sm text-[#e5e2e1] font-medium text-base">Zomato</span>
              <span className="font-body-sm text-[#ddc0bd] text-xs">Gold Member Lounge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
