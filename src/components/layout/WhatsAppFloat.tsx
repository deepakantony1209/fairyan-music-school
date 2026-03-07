'use client';

import { WhatsappLogo } from '@phosphor-icons/react';
import { FOOTER } from '@/data/content';

export default function WhatsAppFloat() {
    const waLink = `https://wa.me/${FOOTER.whatsapp.number}?text=${encodeURIComponent(FOOTER.whatsapp.message)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-float"
            style={{
                background: 'var(--color-whatsapp)',
                color: 'white',
                fontFamily: 'var(--font-ui)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
            }}
            aria-label="Chat on WhatsApp"
        >
            <WhatsappLogo size={22} weight="fill" />
            <span className="hidden sm:inline">Chat with Us</span>
        </a>
    );
}
