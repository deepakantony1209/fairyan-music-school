'use client';

import { motion } from 'framer-motion';
import { INSTRUMENTS } from '@/data/content';
import { instruments } from '@/data/instruments';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

export default function InstrumentsSection() {
    return (
        <section id="instruments" aria-labelledby="instruments-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {INSTRUMENTS.tag}
                    </span>
                </motion.div>

                <motion.h2 id="instruments-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    {INSTRUMENTS.title}
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-12 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    {INSTRUMENTS.subtitle}
                </motion.p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {instruments.map((instr) => (
                        <motion.div
                            key={instr.name}
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            className="group cursor-default overflow-hidden rounded-xl transition-colors duration-300"
                            style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(212,175,55,0.12)' }}
                        >
                            {/* Instrument Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={instr.image}
                                    alt={instr.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-2) 0%, transparent 60%)' }} />
                            </div>

                            {/* Text */}
                            <div className="px-5 pb-6 pt-3">
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-pearl)', marginBottom: '8px' }}>
                                    {instr.name}
                                </div>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                    {instr.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
