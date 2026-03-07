'use client';

import { motion } from 'framer-motion';
import { Clock } from '@phosphor-icons/react';
import { PROGRAMS } from '@/data/content';
import { batches } from '@/data/batches';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

export default function ProgramsSection() {
    return (
        <section id="programs" aria-labelledby="programs-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {PROGRAMS.tag}
                    </span>
                </motion.div>

                <motion.h2 id="programs-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    {PROGRAMS.title}
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    {PROGRAMS.subtitle}
                </motion.p>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-12" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    {PROGRAMS.schedule}
                </motion.p>

                {/* Batch Schedule Table */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="overflow-hidden rounded-2xl"
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                >
                    {/* Header */}
                    <div className="grid grid-cols-3 gap-4 px-6 py-4" style={{ borderBottom: '1px solid var(--color-mid-line)' }}>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                            Batch
                        </div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                            Time
                        </div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                            Availability
                        </div>
                    </div>

                    {/* Rows */}
                    {batches.map((batch, i) => (
                        <motion.div
                            key={batch.time}
                            variants={scaleIn}
                            className="grid grid-cols-3 items-center gap-4 px-6 py-5"
                            style={{ borderBottom: i < batches.length - 1 ? '1px solid rgba(212,175,55,0.10)' : 'none' }}
                        >
                            <div className="flex items-center gap-3">
                                <Clock size={18} color="var(--color-gold)" weight="duotone" />
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-sub)' }}>
                                    Batch {i + 1}
                                </span>
                            </div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--color-pearl)' }}>
                                {batch.time}
                            </div>
                            <div>
                                <span
                                    className="inline-flex items-center rounded-full px-3 py-1"
                                    style={{
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        letterSpacing: '0.08em',
                                        background: batch.status === 'full' ? 'rgba(255,123,107,0.12)' : batch.status === 'low' ? 'rgba(255,159,107,0.12)' : 'rgba(111,221,176,0.12)',
                                        color: batch.status === 'full' ? 'var(--color-error)' : batch.status === 'low' ? 'var(--color-warning)' : 'var(--color-success)',
                                    }}
                                >
                                    {batch.statusLabel}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Info note */}
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-6" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-muted)', letterSpacing: '0.04em' }}>
                    {PROGRAMS.note}
                </motion.p>
            </div>
        </section>
    );
}
