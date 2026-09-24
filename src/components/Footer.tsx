import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1c1b1b] py-16 border-t border-[#574240]/30 text-[#e5e2e1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={RESTAURANT_INFO.logo}
              alt="Royal Spice"
              className="h-7 w-auto rounded-full"
            />
            <span className="font-headline-md text-[#e5e2e1] text-xl font-medium">
              Royal Spice Restaurant
            </span>
          </div>
          <p className="text-xs text-[#ddc0bd] leading-relaxed max-w-sm">
            Opulent gastronomic experiences rooted in tradition and elevated with modern culinary mastery.
          </p>
          <p className="text-xs text-[#ddc0bd]/80 mt-1">
            {RESTAURANT_INFO.address}
          </p>
        </div>

        {/* Column 2: Hours */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-[#e5e2e1] text-lg font-medium">
            Hours of Operation
          </span>
          <p className="text-xs text-[#ddc0bd] leading-relaxed">
            {RESTAURANT_INFO.hours.weekdays}
            <br />
            {RESTAURANT_INFO.hours.weekends}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#e9c349]">
            <span className="w-2 h-2 rounded-full bg-[#e9c349] animate-pulse"></span>
            <span>Concierge Desk Active Daily</span>
          </div>
        </div>

        {/* Column 3: Social & Press */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-[#e5e2e1] text-lg font-medium">
            Connect With Us
          </span>
          <div className="flex items-center gap-6 text-sm text-[#ddc0bd]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e9c349] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e9c349] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e9c349] transition-colors"
            >
              TripAdvisor
            </a>
          </div>
          <p className="text-xs text-[#ddc0bd]/70">
            For bespoke private event inquiries:{' '}
            <a
              href={`mailto:${RESTAURANT_INFO.emailEvents}`}
              className="text-[#e9c349] hover:underline"
            >
              {RESTAURANT_INFO.emailEvents}
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#574240]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ddc0bd]/80">
        <span>© 2024 Royal Spice Restaurant. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span className="text-[#e9c349]">Michelin Guide Recommended</span>
          <span>Terms of Hospitality</span>
          <span>Privacy & Discretion</span>
        </div>
      </div>
    </footer>
  );
};
