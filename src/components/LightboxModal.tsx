import React, { useEffect } from 'react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#131313]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-[#2a2a2a] text-[#e5e2e1] hover:text-[#e9c349] hover:bg-[#353534] rounded-full flex items-center justify-center transition-colors shadow-lg z-50"
        aria-label="Close Lightbox"
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#2a2a2a]/80 text-[#e5e2e1] hover:text-[#e9c349] hover:bg-[#353534] rounded-full flex items-center justify-center transition-colors shadow-xl z-50"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#2a2a2a]/80 text-[#e5e2e1] hover:text-[#e9c349] hover:bg-[#353534] rounded-full flex items-center justify-center transition-colors shadow-xl z-50"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      )}

      {/* Modal Content */}
      <div
        className="max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-h-[70vh] flex items-center justify-center mb-6 overflow-hidden rounded-xl border border-[#e9c349]/20 shadow-2xl bg-[#0e0e0e]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full max-h-[70vh] object-contain rounded-xl"
          />
        </div>

        <div className="text-center max-w-2xl px-4">
          <span className="font-label-md text-[#e9c349] uppercase tracking-[0.2em] mb-2 block">
            {item.categoryLabel}
          </span>
          <h2 className="font-headline-lg text-[#e5e2e1] mb-2 text-2xl lg:text-3xl font-medium">
            {item.title}
          </h2>
          <p className="font-body-md text-[#ddc0bd] text-sm leading-relaxed">
            {item.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
