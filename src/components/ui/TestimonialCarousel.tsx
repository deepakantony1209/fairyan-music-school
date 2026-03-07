'use client';

import { motion } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';

interface Testimonial {
    text: string;
    author: string;
    role: string;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: readonly Testimonial[] }) {
    // Duplicate the array to create a seamless infinite scroll effect
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="relative mt-8 overflow-hidden rounded-2xl py-8" style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-mid-line)' }}>

            {/* Gradient masks for a smooth fade on the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-32" style={{ background: 'linear-gradient(to right, var(--color-surface-1), transparent)' }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-32" style={{ background: 'linear-gradient(to left, var(--color-surface-1), transparent)' }} />

            <motion.div
                className="flex w-max gap-6 px-6"
                animate={{ x: ['0%', '-33.333333%'] }}
                transition={{
                    ease: 'linear',
                    duration: 35, // Scrolling speed
                    repeat: Infinity,
                }}
            >
                {duplicatedTestimonials.map((t, idx) => (
                    <div key={idx} className="w-[300px] shrink-0 rounded-2xl p-6 md:w-[400px] md:p-8" style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(212,175,55,0.1)' }}>
                        <Quotes size={24} color="var(--color-gold)" weight="fill" className="mb-4 opacity-40" />
                        <p className="mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontStyle: 'italic', color: 'var(--color-pearl-90)', lineHeight: 1.7 }}>
                            &ldquo;{t.text}&rdquo;
                        </p>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-gold)', fontWeight: 600 }}>
                            {t.author}
                            <span className="mt-1 block" style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>
                                {t.role}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
