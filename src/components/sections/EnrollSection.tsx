'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Warning } from '@phosphor-icons/react';
import { ENROLL } from '@/data/content';
import { instruments } from '@/data/instruments';
import { fadeUp, staggerContainer, staggerChild } from '@/lib/motion';

interface FormData {
    fullName: string;
    age: string;
    instrument: string;
    batchTime: string;
    phone: string;
    referral: string;
    message: string;
    honeypot: string;
}

const inputStyle: React.CSSProperties = {
    background: 'var(--color-surface-1)',
    border: '1px solid rgba(212,175,55,0.20)',
    borderRadius: 'var(--radius-sm)',
    padding: '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-pearl)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--color-text-sub)',
    marginBottom: '8px',
    display: 'block',
};

const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontSize: '12px',
    color: 'var(--color-error)',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
};

export default function EnrollSection() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        if (data.honeypot) return; // bot detected
        // Simulate submission
        await new Promise((r) => setTimeout(r, 1200));
        setSubmitted(true);
    };

    return (
        <section id="enroll" aria-labelledby="enroll-title" className="relative py-24 md:py-32" style={{ borderTop: '1px solid var(--color-mid-line)' }}>
            <div className="mx-auto max-w-[1280px] px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-6" style={{ background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {ENROLL.tag}
                    </span>
                </motion.div>

                <motion.h2 id="enroll-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--color-pearl)', lineHeight: 1.2, marginBottom: '16px' }}>
                    {ENROLL.title}
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-12 max-w-xl" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.8 }}>
                    {ENROLL.subtitle}
                </motion.p>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            onSubmit={handleSubmit(onSubmit)}
                            className="mx-auto max-w-2xl rounded-2xl p-8 md:p-10"
                            style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                        >
                            {/* Honeypot */}
                            <input type="text" {...register('honeypot')} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className="grid gap-5 md:grid-cols-2">
                                {/* Full Name */}
                                <motion.div variants={staggerChild}>
                                    <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Your full name"
                                        style={{ ...inputStyle, borderColor: errors.fullName ? 'var(--color-error)' : undefined }}
                                        {...register('fullName', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' }, pattern: { value: /^[a-zA-Z\s]+$/, message: 'Letters only' } })}
                                    />
                                    {errors.fullName && <div style={errorStyle}><Warning size={14} />{errors.fullName.message}</div>}
                                </motion.div>

                                {/* Age */}
                                <motion.div variants={staggerChild}>
                                    <label htmlFor="age" style={labelStyle}>Age *</label>
                                    <input
                                        id="age"
                                        type="number"
                                        placeholder="Your age"
                                        style={{ ...inputStyle, borderColor: errors.age ? 'var(--color-error)' : undefined }}
                                        {...register('age', { required: 'Age is required', min: { value: 6, message: 'Minimum age is 6' }, max: { value: 80, message: 'Maximum age is 80' } })}
                                    />
                                    {errors.age && <div style={errorStyle}><Warning size={14} />{errors.age.message}</div>}
                                </motion.div>

                                {/* Instrument */}
                                <motion.div variants={staggerChild}>
                                    <label htmlFor="instrument" style={labelStyle}>Instrument of Interest *</label>
                                    <select
                                        id="instrument"
                                        style={{ ...inputStyle, borderColor: errors.instrument ? 'var(--color-error)' : undefined, appearance: 'none' }}
                                        {...register('instrument', { required: 'Please select an instrument' })}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select instrument</option>
                                        {instruments.map((i) => <option key={i.name} value={i.name}>{i.name}</option>)}
                                    </select>
                                    {errors.instrument && <div style={errorStyle}><Warning size={14} />{errors.instrument.message}</div>}
                                </motion.div>

                                {/* Phone */}
                                <motion.div variants={staggerChild}>
                                    <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="10-digit mobile number"
                                        style={{ ...inputStyle, borderColor: errors.phone ? 'var(--color-error)' : undefined }}
                                        {...register('phone', { required: 'Phone number is required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' } })}
                                    />
                                    {errors.phone && <div style={errorStyle}><Warning size={14} />{errors.phone.message}</div>}
                                </motion.div>
                            </div>

                            {/* Batch Time */}
                            <motion.div variants={staggerChild} className="mt-5">
                                <label style={labelStyle}>Preferred Batch Time</label>
                                <div className="flex flex-wrap gap-3">
                                    {['5:30 PM', '6:30 PM', '7:30 PM', 'Flexible'].map((t) => (
                                        <label key={t} className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 transition-all" style={{ background: 'var(--color-surface-1)', border: '1px solid rgba(212,175,55,0.15)', fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-text-sub)' }}>
                                            <input type="radio" value={t} {...register('batchTime')} className="accent-[#D4AF37]" />
                                            {t}
                                        </label>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Referral */}
                            <motion.div variants={staggerChild} className="mt-5">
                                <label htmlFor="referral" style={labelStyle}>How did you hear about us?</label>
                                <select id="referral" style={inputStyle} {...register('referral')} defaultValue="">
                                    <option value="">Select (optional)</option>
                                    <option value="Google">Google</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Other">Other</option>
                                </select>
                            </motion.div>

                            {/* Message */}
                            <motion.div variants={staggerChild} className="mt-5">
                                <label htmlFor="message" style={labelStyle}>Message / Questions</label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    placeholder="Any questions or notes for us? (optional)"
                                    style={inputStyle}
                                    {...register('message', { maxLength: { value: 300, message: 'Max 300 characters' } })}
                                />
                                {errors.message && <div style={errorStyle}><Warning size={14} />{errors.message.message}</div>}
                            </motion.div>

                            {/* Submit */}
                            <motion.div variants={staggerChild} className="mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full cursor-pointer rounded-sm py-4 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                                    style={{
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        background: 'var(--color-gold)',
                                        color: 'var(--color-midnight)',
                                        border: 'none',
                                        boxShadow: '0 4px 24px rgba(212,175,55,0.30)',
                                    }}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Book My Free Trial'}
                                </button>
                            </motion.div>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mx-auto max-w-2xl rounded-2xl p-12 text-center"
                            style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                        >
                            <CheckCircle size={64} color="var(--color-success)" weight="fill" className="mx-auto mb-4" />
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 500, color: 'var(--color-pearl)', letterSpacing: '0.04em', marginBottom: '12px' }}>
                                You&apos;re In!
                            </h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: 1.7 }}>
                                {ENROLL.successMessage}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
