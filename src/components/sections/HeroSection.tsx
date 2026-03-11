'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { HERO } from '@/data/content';
import { fadeUp, staggerContainer, staggerChild } from '@/lib/motion';

export default function HeroSection() {
    return (
        <section
            id="hero"
            aria-label="Hero"
            className="dark relative flex min-h-screen items-center overflow-hidden"
            style={{ background: 'var(--color-surface-1)' }}
        >
            {/* Background image — LCP priority */}
            <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=1080&fit=crop"
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={55}
            />
            {/* Gradient overlay */}
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.60) 100%)' }}
            />

            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -left-[200px] -top-[200px] h-[600px] w-[600px] rounded-full opacity-40 blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
            <div className="animate-float pointer-events-none absolute -bottom-[150px] -right-[150px] h-[500px] w-[500px] rounded-full opacity-40 blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 md:px-12"
            >
                {/* Badge Pills */}
                <motion.div variants={staggerChild} className="mb-8 flex flex-wrap gap-3">
                    {HERO.badges.map((badge) => (
                        <span
                            key={badge}
                            className="inline-flex items-center rounded-full px-3.5 py-1"
                            style={{
                                fontFamily: 'var(--font-ui)',
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.10em',
                                textTransform: 'uppercase',
                                background: 'var(--color-gold-dim)',
                                color: 'var(--color-gold)',
                                border: '1px solid rgba(212,175,55,0.30)',
                            }}
                        >
                            {badge}
                        </span>
                    ))}
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="mb-5 max-w-3xl"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(40px, 7vw, 80px)',
                        fontWeight: 700,
                        lineHeight: 0.95,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-pearl)',
                    }}
                >
                    Where Music Becomes a{' '}
                    <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Lifelong Story</em>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={staggerChild}
                    className="mb-10 max-w-lg"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '17px',
                        color: 'var(--color-text-sub)',
                        lineHeight: 1.7,
                    }}
                >
                    {HERO.subheadline}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-4">
                    <a
                        href="#enroll"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#enroll')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center gap-3 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            background: 'var(--color-gold)',
                            color: 'var(--color-midnight)',
                            padding: '16px 36px',
                            boxShadow: '0 4px 24px rgba(212,175,55,0.30)',
                        }}
                    >
                        {HERO.ctaPrimary}
                        <ArrowRight size={16} weight="bold" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Scroll
                </span>
                <div className="h-8 w-px" style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }} />
            </div>
        </section>
    );
}
