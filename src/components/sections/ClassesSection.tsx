'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

const cards = [
    {
        id: 'online-classes',
        href: '/online-classes',
        icon: '🌐',
        label: 'Online Classes',
        headline: 'Learn From Anywhere',
        tagline: 'Live, one-on-one sessions delivered to your screen — real-time corrections, flexible timing, no commute.',
        usps: ['Live sessions, not recordings', 'Trinity London exam prep', 'Any device, anywhere in India'],
        gradient: 'linear-gradient(135deg, rgba(212,175,55,0.10) 0%, rgba(100,130,200,0.07) 100%)',
    },
    {
        id: 'centre-classes',
        href: '/centre-classes',
        icon: '🏫',
        label: 'Centre Classes',
        headline: 'Learn at Our Centre',
        tagline: 'Small-batch in-person learning at Gandhipuram — max 8 students, live events, real community.',
        usps: ['Max 8 students per batch', 'Student bands & live events', 'Grades 1–8 exam preparation'],
        gradient: 'linear-gradient(135deg, rgba(212,175,55,0.10) 0%, rgba(150,100,200,0.07) 100%)',
    },
    {
        id: 'home-tuition',
        href: '/home-tuition',
        icon: '🏠',
        label: 'Home Tuition',
        headline: 'We Come to You',
        tagline: 'A qualified Fairyan instructor at your doorstep — 1-on-1, personalised, and built around your schedule.',
        usps: ['Exclusive 1-on-1 teaching', 'Same Trinity London curriculum', 'Available across Coimbatore'],
        gradient: 'linear-gradient(135deg, rgba(212,175,55,0.10) 0%, rgba(200,120,80,0.07) 100%)',
    },
];

export default function ClassesSection() {
    return (
        <section
            id="classes"
            aria-labelledby="classes-title"
            className="relative py-24 md:py-32"
            style={{ borderTop: '1px solid var(--color-mid-line)' }}
        >
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">

                {/* Header */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>HOW YOU CAN LEARN</span>
                </motion.div>

                <motion.h2 id="classes-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    Three Ways to Learn with Fairyan
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-16 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    Whether you learn best in a classroom, from your living room, or at your own home — we have a format that fits your life. Every format offers the same qualified instruction and Trinity London exam pathway.
                </motion.p>

                {/* Cards */}
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid gap-8 md:grid-cols-3">
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={scaleIn}
                            className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                            style={{ background: card.gradient, border: '1px solid rgba(212,175,55,0.2)', backdropFilter: 'blur(8px)' }}
                        >
                            {/* Top gold line on hover */}
                            <div className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

                            {/* Icon + Label */}
                            <div className="mb-6 flex items-center gap-3">
                                <span style={{ fontSize: '32px', lineHeight: 1 }}>{card.icon}</span>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>{card.label}</span>
                            </div>

                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '12px' }}>{card.headline}</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.75, marginBottom: '20px' }}>{card.tagline}</p>

                            {/* USPs */}
                            <ul className="mb-8 flex flex-col gap-2">
                                {card.usps.map((usp) => (
                                    <li key={usp} className="flex items-start gap-2" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.5 }}>
                                        <span style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }}>✦</span>
                                        {usp}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA — full page link */}
                            <Link
                                href={card.href}
                                aria-label={`Learn more about ${card.headline}`}
                                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-gold)', color: 'var(--color-midnight)' }}
                            >
                                Learn More
                                <ArrowRight size={12} weight="bold" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
