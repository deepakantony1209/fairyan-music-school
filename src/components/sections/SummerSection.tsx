'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { SUMMER } from '@/data/content';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

function CountdownTimer({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

    useEffect(() => {
        const calc = () => {
            const diff = new Date(targetDate).getTime() - Date.now();
            if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                mins: Math.floor((diff / (1000 * 60)) % 60),
            };
        };
        setTimeLeft(calc());
        const timer = setInterval(() => setTimeLeft(calc()), 60000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const units = [
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.mins, label: 'Minutes' },
    ];

    return (
        <div className="flex gap-4">
            {units.map((u) => (
                <div key={u.label} className="text-center">
                    <div
                        className="mb-1 rounded-lg px-4 py-3"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '32px',
                            fontWeight: 700,
                            color: 'var(--color-text-main)',
                            background: 'var(--color-surface-3)',
                        }}
                    >
                        {String(u.value).padStart(2, '0')}
                    </div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                        {u.label}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function SummerSection() {
    return (
        <section
            id="summer"
            aria-labelledby="summer-title"
            className="relative overflow-hidden py-24 md:py-32"
            style={{ background: 'var(--color-surface-2)' }}
        >
            {/* Decorative orb */}
            <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full" style={{ background: 'radial-gradient(circle, var(--color-gold-dim), transparent 70%)' }} />

            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {SUMMER.tag}
                    </span>
                </motion.div>

                <motion.h2
                    id="summer-title"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.1, marginBottom: '16px' }}
                >
                    Summer <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Intensives</em> 2026
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-8 max-w-lg" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.7 }}>
                    {SUMMER.subtitle}
                </motion.p>

                {/* Countdown */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-10">
                    <CountdownTimer targetDate="2026-06-01T00:00:00" />
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {SUMMER.cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={scaleIn}
                            className="relative overflow-hidden rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg"
                            style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border-subtle, rgba(212,175,55,0.15))' }}
                        >
                            {/* LIMITED ribbon */}
                            <div
                                className="absolute right-[-22px] top-[14px] animate-pulse-glow px-7 py-1"
                                style={{
                                    background: 'var(--color-gold)',
                                    color: '#1A1A1A',
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    transform: 'rotate(45deg)',
                                }}
                            >
                                LIMITED
                            </div>

                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1, marginBottom: '4px' }}>
                                {card.days}
                            </div>
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                                Days · {card.idealFor}
                            </div>

                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 500, color: 'var(--color-text-main)', letterSpacing: '0.06em', marginBottom: '12px' }}>
                                {card.title}
                            </h3>

                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontStyle: 'italic', color: 'var(--color-text-sub)', lineHeight: 1.6, marginBottom: '24px' }}>
                                {card.description}
                            </p>

                            <a
                                href="#enroll"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#enroll')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-2 rounded-sm px-6 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    background: 'var(--color-gold)',
                                    color: '#1A1A1A',
                                }}
                            >
                                {card.cta}
                                <ArrowRight size={14} weight="bold" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-6" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    {SUMMER.note}
                </motion.p>
            </div>
        </section>
    );
}
