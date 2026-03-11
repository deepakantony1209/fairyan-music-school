import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Plus, Minus } from '@phosphor-icons/react/dist/ssr';
import { FAQ_ONLINE } from '@/data/faq';

export const metadata: Metadata = {
    title: 'Online Music Classes | Keyboard, Guitar & Violin — Fairyan Music School',
    description: 'Join live online music classes for Keyboard, Guitar, and Violin at Fairyan Music School. Qualified Trinity London instructor, real-time corrections, flexible timing. Book a free trial.',
};

const faqs = FAQ_ONLINE;

function FaqSection() {
    return (
        <div className="mt-4 space-y-2" id="online-faq">
            {faqs.map((item, i) => (
                <details
                    key={i}
                    className="group overflow-hidden rounded-2xl"
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 gap-4">
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: 600, color: 'var(--color-pearl)', lineHeight: 1.4 }}>
                            {item.q}
                        </span>
                        <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>
                            <Plus size={16} weight="bold" className="group-open:hidden" />
                            <Minus size={16} weight="bold" className="hidden group-open:block" />
                        </span>
                    </summary>
                    <p className="px-6 pb-6 pt-0" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                        {item.a}
                    </p>
                </details>
            ))}
        </div>
    );
}

export default function OnlineClassesPage() {
    return (
        <main style={{ background: 'var(--color-surface-1)', minHeight: '100vh' }}>
            {/* Hero */}
            <section className="relative overflow-hidden" style={{ minHeight: '560px' }}>
                <img
                    src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&dpr=1"
                    alt="Online music lesson - playing keyboard"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: 'brightness(0.38)' }}
                />
                {/* Gold gradient overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(184,134,11,0.25) 0%, transparent 60%)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-1) 0%, transparent 50%)' }} />

                <div className="relative mx-auto flex max-w-[1280px] flex-col justify-end px-6 py-16 md:px-12" style={{ minHeight: '560px' }}>
                    {/* Back button */}
                    <Link
                        href="/"
                        className="mb-10 inline-flex items-center gap-2 no-underline transition-all hover:-translate-x-1 self-start"
                        style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}
                    >
                        <ArrowLeft size={14} weight="bold" />
                        Back to Home
                    </Link>

                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px', display: 'block' }}>
                        🌐 Online Classes
                    </span>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FDFBF7', lineHeight: 1.05, marginBottom: '20px', maxWidth: '720px' }}>
                        Learn Music.<br />
                        <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>From Anywhere.</em>
                    </h1>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'rgba(253,251,247,0.80)', lineHeight: 1.75, maxWidth: '540px', marginBottom: '32px' }}>
                        Live, interactive lessons delivered to your screen — the same quality, the same personal attention, no commute required. Our students span across India.
                    </p>
                    <Link
                        href="/#enroll"
                        className="inline-flex items-center gap-2 rounded-sm px-7 py-4 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-xl self-start"
                        style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-gold)', color: '#1A1A1A', boxShadow: '0 4px 24px rgba(212,175,55,0.4)' }}
                    >
                        Book a Free Trial →
                    </Link>
                </div>
            </section>

            {/* Stats bar */}
            <section style={{ borderTop: '1px solid var(--color-mid-line)', borderBottom: '1px solid var(--color-mid-line)' }}>
                <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center px-6 md:px-12">
                    {[
                        { value: 'Live', label: '1-on-1 Sessions' },
                        { value: '3', label: 'Instruments Available' },
                        { value: 'Grade 1–8', label: 'Trinity Exam Prep' },
                    ].map((s, i) => (
                        <div
                            key={s.label}
                            className="flex flex-col items-center py-8 px-12 text-center"
                            style={i > 0 ? { borderLeft: '1px solid var(--color-mid-line)' } : {}}
                        >
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: '6px' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About section */}
            <section className="py-24 md:py-28">
                <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 md:grid-cols-2 md:px-12">
                    <div>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '16px' }}>
                            — Why Online Works
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '20px' }}>
                            Same Instructor. Same Curriculum. Zero Commute.
                        </h2>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.85, marginBottom: '16px' }}>
                            At Fairyan, online doesn't mean lesser. Every live session is conducted by Noel Jayakumar — a qualified Trinity College London instructor with 25+ years of teaching experience. He sees your posture, hears your tone, and corrects your technique in real time.
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.85, marginBottom: '28px' }}>
                            Our online students prepare for and appear in Trinity grade examinations — from Grade 1 through Grade 8 — just like our in-centre learners. Distance is no barrier to a world-class music education.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Live video sessions — not pre-recorded content',
                                'Keyboard, Guitar, and Violin available online',
                                'Batches capped at 4 students for focused attention',
                                'Trinity London exam preparation included',
                                'Flexible timing — 5:30 PM, 6:30 PM, 7:30 PM',
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-sub)' }}>
                                    <CheckCircle size={18} weight="fill" style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '1px' }} />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: '420px' }}>
                        <img
                            src="https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                            alt="Student having an online keyboard lesson via video call"
                            className="h-full w-full object-cover"
                            style={{ minHeight: '420px' }}
                        />
                        <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(212,175,55,0.2)' }} />
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-mid-line)' }}>
                <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>— HOW IT WORKS</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '48px' }}>
                        Getting Started is Simple
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { step: '01', title: 'Book Your Free Trial', desc: 'Fill out the enrollment form on our website. We\'ll call you within 24 hours to schedule your first live session — no payment needed.' },
                            { step: '02', title: 'Set Up & Join', desc: 'All you need is your instrument, a device with a camera and mic, and a stable internet connection. We guide you through the rest.' },
                            { step: '03', title: 'Learn & Progress', desc: 'Attend regular sessions, receive personalized feedback, and track your progress. Work toward Trinity grade certification at your own pace.' },
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

            {/* Instruments with images */}
            <section className="py-24">
                <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>— INSTRUMENTS</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '40px' }}>Available Online</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { name: 'Keyboard', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop&q=80', desc: 'Classical to contemporary. Trinity Grades 1–8. Scales, chords, and performance pieces.', alt: 'Keyboard piano close up' },
                            { name: 'Guitar', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop&q=80', desc: 'Acoustic and classical guitar. Fingerpicking, chords, repertoire, and grade preparation.', alt: 'Guitar strings close up' },
                            { name: 'Violin', img: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=600&h=400&fit=crop&q=80', desc: 'Bowing technique, intonation, and classical repertoire. Trinity pathways available.', alt: 'Violin being played' },
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
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.5vw, 38px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', marginBottom: '8px' }}>
                        Questions About Online Classes
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', marginBottom: '36px' }}>Everything you need to know before you start.</p>
                    <FaqSection />
                </div>
            </section>

            {/* CTA Footer Banner */}
            <section className="relative overflow-hidden py-24 text-center" style={{ background: 'var(--color-surface-1)', borderTop: '1px solid var(--color-mid-line)' }}>
                <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, var(--color-gold-dim), transparent 70%)' }} />
                <div className="relative mx-auto max-w-2xl px-6">
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: 'var(--color-pearl)', lineHeight: 1.1, marginBottom: '16px' }}>
                        Ready to Start Playing?
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: 1.75, marginBottom: '36px' }}>
                        Book a free trial lesson today. No commitment, no payment required — just music.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/#enroll" className="inline-flex items-center gap-2 rounded-sm px-8 py-4 no-underline transition-all duration-200 hover:-translate-y-1" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'var(--color-gold)', color: '#1A1A1A', boxShadow: '0 4px 24px rgba(212,175,55,0.35)' }}>
                            Book a Free Trial →
                        </Link>
                        <Link href="/" className="inline-flex items-center gap-2 rounded-sm px-8 py-4 no-underline transition-all duration-200 hover:-translate-y-1" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
