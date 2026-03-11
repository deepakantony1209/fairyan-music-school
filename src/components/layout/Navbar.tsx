'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { NAV } from '@/data/content';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection('#' + entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };
    const navClass = `fixed top-0 left-0 right-0 z-50 transition-colors duration-400 ${mounted && !scrolled && resolvedTheme === 'light' ? 'dark' : ''}`;

    return (
        <>
            <motion.nav
                className={navClass}
                style={{
                    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--color-mid-line)' : '1px solid transparent',
                }}
            >
                <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="cursor-pointer bg-transparent border-none p-0 flex items-center"
                    >
                        <img
                            src="/logo-horizontal.svg"
                            alt="Fairyan Music School"
                            width={180}
                            height={36}
                            className="h-8 w-auto md:h-9 logo-adaptive transition-all duration-400"
                        />
                    </button>

                    {/* Desktop nav */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {NAV.links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="cursor-pointer border-none bg-transparent transition-colors duration-200"
                                style={{
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '12px',
                                    fontWeight: activeSection === link.href ? 700 : 500,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase' as const,
                                    color: activeSection === link.href ? 'var(--color-gold)' : 'var(--color-text-sub)',
                                }}
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Theme Toggle Button */}
                        <div className="w-px h-6 mx-2" style={{ background: 'var(--color-mid-line)' }} />

                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="cursor-pointer border-none bg-transparent flex items-center justify-center h-10 w-10 rounded-full transition-colors hover:bg-[var(--color-surface-3)]"
                                aria-label="Toggle Theme"
                                title="Toggle Theme"
                            >
                                {resolvedTheme === 'dark' ? (
                                    <Sun size={20} color="var(--color-pearl)" weight="duotone" />
                                ) : (
                                    <Moon size={20} color="var(--color-pearl)" weight="duotone" />
                                )}
                            </button>
                        )}

                        <button
                            onClick={() => handleNavClick('#enroll')}
                            className="cursor-pointer rounded-sm border-none px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 ml-2"
                            style={{
                                fontFamily: 'var(--font-ui)',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase' as const,
                                background: 'var(--color-gold)',
                                color: 'var(--color-obsidian)',
                                boxShadow: 'var(--shadow-gold)',
                            }}
                        >
                            {NAV.cta}
                        </button>
                    </div>

                    {/* Mobile Hamburger & Theme Toggle */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="cursor-pointer border-none bg-transparent flex items-center justify-center p-2 rounded-full transition-colors"
                            >
                                {resolvedTheme === 'dark' ? (
                                    <Sun size={24} color="var(--color-pearl)" weight="fill" />
                                ) : (
                                    <Moon size={24} color="var(--color-pearl)" weight="fill" />
                                )}
                            </button>
                        )}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="cursor-pointer border-none bg-transparent"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X size={28} color="var(--color-pearl)" />
                            ) : (
                                <List size={28} color="var(--color-pearl)" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 lg:hidden"
                        style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(20px)' }}
                    >
                        {NAV.links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="cursor-pointer border-none bg-transparent transition-colors"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '24px',
                                    fontWeight: 500,
                                    letterSpacing: '0.10em',
                                    color: 'var(--color-pearl)',
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#enroll')}
                            className="mt-6 cursor-pointer rounded-sm border-none px-8 py-3"
                            style={{
                                fontFamily: 'var(--font-ui)',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase' as const,
                                background: 'var(--color-gold)',
                                color: 'var(--color-obsidian)',
                            }}
                        >
                            {NAV.cta}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
