import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ConciergeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const ConciergeChatModal: React.FC<ConciergeChatModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'concierge' | 'user'; text: string; time: string }>>([
    {
      sender: 'concierge',
      text: 'Namaste and welcome to Royal Spice Concierge. How may we assist your gastronomic journey today?',
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    'What is the evening dress code?',
    'Is valet parking complimentary?',
    'Are private dining rooms available?',
    'Book table for tonight',
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMsgs = [
      ...messages,
      { sender: 'user' as const, text, time: 'Just now' },
    ];
    setMessages(newMsgs);
    setInputValue('');

    // Automated luxury concierge reply
    setTimeout(() => {
      let reply = 'Our Maître d\' has noted your inquiry and will attend to you promptly. For immediate phone assistance, kindly dial our Direct Line at ' + RESTAURANT_INFO.phoneConcierge;
      const lower = text.toLowerCase();
      if (lower.includes('dress') || lower.includes('wear')) {
        reply = 'Our dress code is Smart Elegant. We kindly request gentlemen avoid athletic wear or flip-flops in the main dining salons.';
      } else if (lower.includes('valet') || lower.includes('park')) {
        reply = 'Yes! Complimentary white-glove valet parking is provided directly at our grand entrance on Sector 62, Indirapuram.';
      } else if (lower.includes('private') || lower.includes('suite') || lower.includes('event')) {
        reply = 'The Maharajah Suite and The Velvet Alcove accommodate 4 to 24 guests with bespoke multi-course menus. You can request booking in our Reservations tab or call desk.';
      } else if (lower.includes('book') || lower.includes('table') || lower.includes('reserve')) {
        reply = 'We would be honored to seat you. Let us open our reservation window right away.';
        setTimeout(() => {
          onClose();
          onOpenReservation();
        }, 1200);
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'concierge', text: reply, time: 'Just now' },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-[#1c1b1b] border border-[#e9c349]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="bg-[#131313] p-4 border-b border-[#574240]/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={RESTAURANT_INFO.logo}
              alt="Concierge"
              className="w-9 h-9 rounded-full border border-[#e9c349]/40 object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-[#131313]"></span>
          </div>
          <div>
            <h4 className="font-headline-sm text-sm text-[#e5e2e1] font-medium">
              Royal Spice Concierge
            </h4>
            <span className="text-[11px] text-[#e9c349]">Direct Hospitality Desk</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[#ddc0bd] hover:text-[#e5e2e1] p-1 rounded-lg"
          aria-label="Close Concierge"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#131313]/50 text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              m.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-[#7a1c1c] text-[#ffdad6] rounded-br-none'
                  : 'bg-[#201f1f] text-[#e5e2e1] border border-[#574240]/30 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
            <span className="text-[10px] text-[#ddc0bd]/50 mt-1 px-1">
              {m.time}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="px-3 py-2 bg-[#1c1b1b] border-t border-[#574240]/20 flex gap-1.5 overflow-x-auto no-scrollbar">
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="text-[10px] whitespace-nowrap bg-[#2a2a2a] hover:bg-[#353534] text-[#ddc0bd] hover:text-[#e9c349] px-2.5 py-1 rounded-full transition-colors border border-[#574240]/20"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input or WhatsApp Link */}
      <div className="p-3 bg-[#131313] border-t border-[#574240]/30 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message to concierge..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend(inputValue);
            }}
            className="flex-1 bg-[#201f1f] text-xs text-[#e5e2e1] px-3 py-2 rounded-lg border border-[#574240]/40 focus:border-[#e9c349] focus:outline-none"
          />
          <button
            onClick={() => handleSend(inputValue)}
            className="bg-[#e9c349] text-[#241a00] p-2 rounded-lg hover:bg-[#af8d11] transition-colors"
            aria-label="Send"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>

        <a
          href="https://wa.me/911204567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-[11px] text-[#25D366] hover:underline flex items-center justify-center gap-1.5 pt-1 font-medium"
        >
          <span className="material-symbols-outlined text-[14px]">chat</span>
          <span>Open Direct WhatsApp Chat (+91 120 456-7890)</span>
        </a>
      </div>
    </div>
  );
};
