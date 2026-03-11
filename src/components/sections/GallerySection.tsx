'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { GALLERY } from '@/data/content';
import { fadeUp } from '@/lib/motion';
import YoutubeCarousel from '@/components/ui/YoutubeCarousel';

const CHANNEL_URL = 'https://www.youtube.com/@fairyanstudio8934';

export default function GallerySection() {
    return (
        <section
            id="gallery"
            aria-labelledby="gallery-title"
            className="relative py-24 md:py-32"
            style={{ borderTop: '1px solid var(--color-mid-line)' }}
        >
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                {/* Label */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-4 flex items-center gap-3"
                >
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span
                        style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)',
                        }}
                    >
                        {GALLERY.tag}
                    </span>
                </motion.div>

                {/* Title line + CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-4 flex flex-wrap items-baseline justify-between gap-4"
                >
                    <h2
                        id="gallery-title"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(28px, 3.5vw, 44px)',
                            fontWeight: 500,
                            letterSpacing: '0.04em',
                            color: 'var(--color-pearl)',
                            lineHeight: 1.2,
                        }}
                    >
                        {GALLERY.title}
                    </h2>

                    <a
                        href={CHANNEL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 no-underline transition-all duration-200 hover:opacity-70"
                        style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)',
                        }}
                    >
                        {GALLERY.ctaLabel}
                        <ArrowUpRight size={14} weight="bold" />
                    </a>
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-10 max-w-xl"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--color-text-sub)',
                        lineHeight: 1.8,
                    }}
                >
                    {GALLERY.subtitle}
                </motion.p>

                {/* YouTube carousel */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    <YoutubeCarousel />
                </motion.div>
            </div>
        </section>
    );
}
