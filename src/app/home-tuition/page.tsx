import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Plus, Minus } from '@phosphor-icons/react/dist/ssr';
import { FAQ_TUITION } from '@/data/faq';

export const metadata: Metadata = {
    title: 'Home Tuition | Music Classes at Your Doorstep — Fairyan Music School Coimbatore',
    description: 'Fairyan Music School brings expert music instruction to your home in Coimbatore. One-on-one keyboard, guitar, and violin lessons. Qualified Trinity London instructor.',
};

function FaqSection() {
    return (
        <div className="mt-4 space-y-2">
            {FAQ_TUITION.map((item, i) => (
                <details key={i} className="group overflow-hidden rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}>
                    <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 gap-4">
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: 600, color: 'var(--color-pearl)', lineHeight: 1.4 }}>{item.q}</span>
                        <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>
                            <Plus size={16} weight="bold" className="group-open:hidden" />
                            <Minus size={16} weight="bold" className="hidden group-open:block" />
                        </span>
                    </summary>
                    <p className="px-6 pb-6 pt-0" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>{item.a}</p>
                </details>
            ))}
        </div>
    );
}

export default function HomeTuitionPage() {
    return (
        <main style={{ background: 'var(--color-surface-1)', minHeight: '100vh' }}>

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ minHeight: '560px' }}>
                <img src="https://images.pexels.com/photos/4038323/pexels-photo-4038323.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&dpr=1" alt="Private music lesson at home" className="absolute inset-0 h-full w-full object-cover" style={{ filter: 'brightness(0.32)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(200,100,50,0.18) 0%, transparent 60%)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-1) 0%, transparent 50%)' }} />
                <div className="relative mx-auto flex max-w-[1280px] flex-col justify-end px-6 py-16 md:px-12" style={{ minHeight: '560px' }}>
                    <Link href="/" className="mb-10 inline-flex items-center gap-2 no-underline hover:-translate-x-1 transition-all self-start" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                        <ArrowLeft size={14} weight="bold" /> Back to Home
                    </Link>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px', display: 'block' }}>🏠 Home Tuition</span>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FDFBF7', lineHeight: 1.05, marginBottom: '20px', maxWidth: '720px' }}>
                        We Come to You.<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>You Focus on Music.</em>
                    </h1>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'rgba(253,251,247,0.80)', lineHeight: 1.75, maxWidth: '540px', marginBottom: '32px' }}>
                        A qualified Fairyan instructor visits your home for one-on-one sessions — personal, comfortable, and completely built around your schedule.
                    </p>
                    <Link href="/#enroll" className="inline-flex items-center gap-2 rounded-sm px-7 py-4 no-underline transition-all duration-200 hover:-translate-y-1 self-start" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-gold)', color: '#1A1A1A', boxShadow: '0 4px 24px rgba(212,175,55,0.4)' }}>
                        Book a Free Trial →
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: 'var(--color-surface-2)', borderBottom: '1px solid var(--color-mid-line)' }}>
                <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px md:grid-cols-4" style={{ background: 'var(--color-mid-line)' }}>
                    {[{ value: '1-on-1', label: 'Exclusive Attention' }, { value: '25+', label: 'Years Experience' }, { value: '3', label: 'Instruments Available' }, { value: 'Grade 1–8', label: 'Trinity Exam Prep' }].map((s) => (
                        <div key={s.label} className="flex flex-col items-center py-8 px-4 text-center" style={{ background: 'var(--color-surface-2)' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: '6px' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="py-24 md:py-28">
                <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 md:grid-cols-2 md:px-12">
                    <div>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '16px' }}>— Why Home Tuition Works</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '20px' }}>Your Space. Your Pace. Expert Instruction.</h2>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.85, marginBottom: '16px' }}>
                            Learning music is deeply personal. Some students thrive in the comfort of their own home — without the commute, the unfamiliar environment, or the distraction of other students. Home tuition is designed for exactly this.
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.85, marginBottom: '28px' }}>
                            Your Fairyan instructor brings the same Trinity College London curriculum, the same patient teaching philosophy, and the same standard of excellence — directly to your living room. Every session is one-on-one, every correction is personal, and every milestone is yours alone.
                        </p>
                        <ul className="space-y-3">
                            {['Fully personalised one-on-one sessions at your doorstep', 'Same Trinity London curriculum as centre classes', 'Available across Coimbatore — contact us to check your area', 'Flexible scheduling tailored to your routine', 'Available for students of all ages from 9 to 72+'].map((pt) => (
                                <li key={pt} className="flex items-start gap-3" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                                    <CheckCircle size={18} weight="fill" style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '1px' }} />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: '420px' }}>
                        <img src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=800&h=600&fit=crop&q=80" alt="One-on-one music lesson in a home setting" className="h-full w-full object-cover" style={{ minHeight: '420px' }} />
                        <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(212,175,55,0.2)' }} />
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-mid-line)' }}>
                <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>— HOW IT WORKS</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '48px' }}>From Inquiry to First Lesson</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { step: '01', title: 'Reach Out', desc: 'Fill out our enrollment form mentioning home tuition. We\'ll call you within 24 hours to confirm your area, instrument, and preferred schedule.' },
                            { step: '02', title: 'We Come to You', desc: 'Your instructor arrives at your home at the scheduled time, ready to teach. No setup needed on your end — just your instrument and your enthusiasm.' },
                            { step: '03', title: 'Learn & Grow', desc: 'Progress through our structured curriculum at your own pace. Work toward Trinity grade exams or simply play music you love — the goal is yours.' },
                        ].map((s) => (
                            <div key={s.step} className="rounded-2xl p-8" style={{ border: '1px solid var(--color-mid-line)', background: 'var(--color-surface-1)' }}>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1, marginBottom: '12px', opacity: 0.4 }}>{s.step}</div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '10px' }}>{s.title}</h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.75 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instruments */}
            <section className="py-24">
                <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>— INSTRUMENTS</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '40px' }}>Available for Home Tuition</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { name: 'Keyboard', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop', desc: 'Learn at your home keyboard. Classical to contemporary, Trinity Grades 1–8.', alt: 'Keyboard lesson at home' },
                            { name: 'Guitar', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop', desc: 'Acoustic and classical guitar. Chords, fingerpicking, and grade preparation.', alt: 'Guitar lesson at home' },
                            { name: 'Violin', img: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=600&h=400&fit=crop', desc: 'Bowing technique, intonation, and repertoire for all levels.', alt: 'Violin lesson at home' },
                        ].map((inst) => (
                            <div key={inst.name} className="group overflow-hidden rounded-2xl" style={{ border: '1px solid var(--color-mid-line)' }}>
                                <div className="relative h-52 overflow-hidden">
                                    <img src={inst.img} alt={inst.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-1) 0%, transparent 50%)' }} />
                                </div>
                                <div className="p-6" style={{ background: 'var(--color-surface-2)' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--color-pearl)', marginBottom: '8px' }}>{inst.name}</h3>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 1.7 }}>{inst.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-mid-line)' }}>
                <div className="mx-auto max-w-[860px] px-6 md:px-12">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>— FAQ</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '8px' }}>Questions About Home Tuition</h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', marginBottom: '36px' }}>Everything you need to know before we visit.</p>
                    <FaqSection />
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-24 text-center" style={{ background: 'var(--color-surface-1)', borderTop: '1px solid var(--color-mid-line)' }}>
                <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, var(--color-gold-dim), transparent 70%)' }} />
                <div className="relative mx-auto max-w-2xl px-6">
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: 'var(--color-pearl)', lineHeight: 1.1, marginBottom: '16px' }}>Ready to Learn at Home?</h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: 1.75, marginBottom: '36px' }}>
                        Contact us to check availability in your area and book your first home tuition session — free, no commitment.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/#enroll" className="inline-flex items-center gap-2 rounded-sm px-8 py-4 no-underline transition-all hover:-translate-y-1" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-gold)', color: '#1A1A1A', boxShadow: '0 4px 24px rgba(212,175,55,0.35)' }}>Book a Free Trial →</Link>
                        <Link href="/" className="inline-flex items-center gap-2 rounded-sm px-8 py-4 no-underline transition-all hover:-translate-y-1" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>← Back to Home</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
