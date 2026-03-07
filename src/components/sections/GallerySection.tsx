'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from '@phosphor-icons/react';
import { GALLERY } from '@/data/content';
import { galleryVideos } from '@/data/gallery';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredVideos = activeFilter === 'All' ? galleryVideos : galleryVideos.filter((v) => v.category === activeFilter);

    return (
        <section id="gallery" aria-labelledby="gallery-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {GALLERY.tag}
                    </span>
                </motion.div>

                <motion.h2 id="gallery-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    {GALLERY.title}
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-8 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    {GALLERY.subtitle}
                </motion.p>

                {/* Filter tabs */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-8 flex flex-wrap gap-2">
                    {GALLERY.filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className="cursor-pointer rounded-full border-none px-4 py-1.5 transition-all duration-200"
                            style={{
                                fontFamily: 'var(--font-ui)',
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.10em',
                                textTransform: 'uppercase',
                                background: activeFilter === f ? 'var(--color-gold-dim)' : 'transparent',
                                color: activeFilter === f ? 'var(--color-gold)' : 'var(--color-text-muted)',
                                border: activeFilter === f ? '1px solid rgba(212,175,55,0.30)' : '1px solid rgba(253,251,247,0.10)',
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Video Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {filteredVideos.map((video, i) => (
                        <motion.div
                            key={`${video.title}-${i}`}
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            className="group relative cursor-pointer overflow-hidden rounded-lg transition-colors duration-300"
                            style={{ border: '1px solid rgba(212,175,55,0.12)' }}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Play overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--color-gold)', boxShadow: 'var(--shadow-gold)' }}>
                                        <Play size={24} color="var(--color-midnight)" weight="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4" style={{ background: 'var(--color-surface-2)' }}>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '4px' }}>
                                    {video.category}
                                </div>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 1.5 }}>
                                    {video.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mt-8 text-center">
                    <a
                        href={GALLERY.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 no-underline transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)' }}
                    >
                        {GALLERY.ctaLabel}
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
