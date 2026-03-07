'use client';

import { motion } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';
import { DIRECTOR } from '@/data/content';
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerChild } from '@/lib/motion';

export default function DirectorSection() {
    return (
        <section id="director" aria-labelledby="director-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {DIRECTOR.tag}
                    </span>
                </motion.div>

                <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
                    {/* Portrait */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/instructor.png"
                            alt="Noel Jayakumar — Founder & Director of Fairyan Music School"
                            className="h-full w-full object-cover"
                            style={{ minHeight: '400px' }}
                        />
                        {/* Gradient overlay at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to top, var(--color-surface-1), transparent)' }} />
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2
                            id="director-title"
                            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '8px' }}
                        >
                            {DIRECTOR.title}
                        </h2>
                        <p className="mb-8" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-gold)', letterSpacing: '0.10em' }}>
                            {DIRECTOR.subtitle}
                        </p>

                        {DIRECTOR.bio.map((paragraph, i) => (
                            <p
                                key={i}
                                className="mb-4"
                                style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.75 }}
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Quote */}
                        <div className="my-8 rounded-xl p-6" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}>
                            <Quotes size={24} color="var(--color-gold)" weight="fill" className="mb-2 opacity-50" />
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontStyle: 'italic', color: 'var(--color-pearl-90)', lineHeight: 1.7 }}>
                                &ldquo;{DIRECTOR.quote}&rdquo;
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            {DIRECTOR.stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    variants={staggerChild}
                                    className="rounded-lg px-5 py-3"
                                    style={{ background: 'var(--color-gold-dim)', border: '1px solid rgba(212,175,55,0.25)' }}
                                >
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
