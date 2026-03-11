'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import { EXPERIENCE } from '@/data/content';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';

const pillarImages: Record<string, string> = {
    'Online & In-Centre Classes': 'https://images.pexels.com/photos/14959142/pexels-photo-14959142.jpeg?auto=compress&cs=tinysrgb&w=600&h=340&dpr=1',
    'Trinity London Grade Exams': '/trinity-fairyan.jpg',
    'Student Bands': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=340&fit=crop',
    'Live Events': 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=340&fit=crop',
    '25 Years of Alumni': 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=340&fit=crop',
};

export default function ExperienceSection() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {EXPERIENCE.tag}
                    </span>
                </motion.div>

                <motion.h2 id="experience-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    {EXPERIENCE.title}
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-12 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    {EXPERIENCE.subtitle}
                </motion.p>

                {/* Pillars Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-12 grid gap-5 md:grid-cols-2"
                >
                    {EXPERIENCE.pillars.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            className="group overflow-hidden rounded-2xl transition-colors duration-300"
                            style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(212,175,55,0.12)' }}
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={pillarImages[pillar.title] ?? '/trinity-fairyan.jpg'}
                                    alt={pillar.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="lazy"
                                    quality={75}
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-2) 0%, transparent 70%)' }} />
                            </div>

                            {/* Text */}
                            <div className="px-7 pb-7 pt-2">
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--color-pearl)', marginBottom: '10px' }}>
                                    {pillar.title}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.7 }}>
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                    <TestimonialCarousel testimonials={EXPERIENCE.testimonials} />
                </motion.div>
            </div>
        </section>
    );
}
