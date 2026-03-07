'use client';

import { YoutubeLogo, InstagramLogo, FacebookLogo, WhatsappLogo, Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react';
import { FOOTER } from '@/data/content';

export default function Footer() {
    const waLink = `https://wa.me/${FOOTER.whatsapp.number}?text=${encodeURIComponent(FOOTER.whatsapp.message)}`;

    return (
        <footer style={{ background: 'var(--color-midnight)', borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <img
                        src="/logo-horizontal.svg"
                        alt="Fairyan Music School"
                        className="mb-4 h-10 w-auto logo-adaptive"
                    />
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.7 }}>
                        Premium music education for all ages. Building musicians since 2001.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <a href={FOOTER.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="opacity-60 transition-opacity hover:opacity-100">
                            <YoutubeLogo size={22} color="var(--color-pearl)" />
                        </a>
                        <a href={FOOTER.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-60 transition-opacity hover:opacity-100">
                            <InstagramLogo size={22} color="var(--color-pearl)" />
                        </a>
                        <a href={FOOTER.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-60 transition-opacity hover:opacity-100">
                            <FacebookLogo size={22} color="var(--color-pearl)" />
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>
                        Contact
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href={FOOTER.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 no-underline opacity-80 transition-opacity hover:opacity-100" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                            <MapPin size={16} color="var(--color-gold)" className="mt-0.5 shrink-0" />
                            <span className="leading-snug">{FOOTER.address}</span>
                        </a>
                        <a href={`tel:${FOOTER.phone}`} className="flex items-center gap-3 no-underline opacity-80 transition-opacity hover:opacity-100" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                            <Phone size={16} color="var(--color-gold)" />
                            {FOOTER.phone}
                        </a>
                        <a href={`mailto:${FOOTER.email}`} className="flex items-center gap-3 no-underline opacity-80 transition-opacity hover:opacity-100" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                            <EnvelopeSimple size={16} color="var(--color-gold)" />
                            {FOOTER.email}
                        </a>
                    </div>
                </div>

                {/* Schedule */}
                <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>
                        Batch Timings
                    </div>
                    <div className="flex items-start gap-3" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                        <Clock size={16} color="var(--color-gold)" className="mt-0.5" />
                        <span>{FOOTER.schedule}</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>
                        Quick Contact
                    </div>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 no-underline transition-all hover:-translate-y-0.5"
                        style={{
                            background: 'var(--color-whatsapp)',
                            color: 'white',
                            fontFamily: 'var(--font-ui)',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                        }}
                    >
                        <WhatsappLogo size={18} weight="fill" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="border-t px-6 py-4 text-center md:px-12"
                style={{ borderColor: 'var(--color-mid-line)' }}
            >
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    {FOOTER.copyright} &middot; <a href="#" className="no-underline opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
}
