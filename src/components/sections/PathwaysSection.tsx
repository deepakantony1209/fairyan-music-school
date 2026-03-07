'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { PATHWAYS } from '@/data/content';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

const pathwayImages: Record<string, string> = {
    'Juniors & Teens': 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=340&fit=crop',
    'Adults & Professionals': 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=340&fit=crop',
    'Lifelong Learners': 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&h=340&fit=crop',
};

export default function PathwaysSection() {
    return (
        <section id="pathways" aria-labelledby="pathways-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                {/* Section tag */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-4 flex items-center gap-3"
                >
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {PATHWAYS.tag}
                    </span>
                </motion.div>

                <motion.h2
                    id="pathways-title"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}
                >
                    {PATHWAYS.title}
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-12 max-w-xl"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}
                >
                    {PATHWAYS.subtitle}
                </motion.p>

                {/* Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                    {PATHWAYS.cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            className="group relative overflow-hidden rounded-3xl transition-all duration-300"
                            style={{
                                background: 'var(--color-surface-2)',
                                border: '1px solid rgba(212,175,55,0.15)',
                            }}
                        >
                            {/* Top gold line on hover */}
                            <div className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pathwayImages[card.title]}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-2) 5%, transparent 70%)' }} />
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-8 pt-2">
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '8px' }}>
                                    {card.age}
                                </div>

                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--color-pearl)', marginBottom: '12px' }}>
                                    {card.title}
                                </h3>

                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.7, marginBottom: '24px' }}>
                                    {card.description}
                                </p>

                                <a
                                    href="#enroll"
                                    onClick={(e) => { e.preventDefault(); document.querySelector('#enroll')?.scrollIntoView({ behavior: 'smooth' }); }}
                                    className="inline-flex items-center gap-2 no-underline transition-colors"
                                    style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)' }}
                                >
                                    {card.cta}
                                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
