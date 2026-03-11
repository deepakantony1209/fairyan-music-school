'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, X, ArrowLeft, ArrowRight } from '@phosphor-icons/react';

interface YTVideo {
    videoId: string;
    title: string;
    thumbnail: string;
    category: string;
}

const PLAYLIST_ID = 'PLa1PrwLAtROQx3v2z1PhH9cQBhAVPVkWQ';
const API_KEY = 'AIzaSyCDwbWdhBpQCrOFgq8WaQV-01q2S0S3bcY';
const FILTERS = ['All', 'Guitar', 'Keyboard', 'Violin'];

function detectCategory(title: string): string {
    const lower = title.toLowerCase();
    if (lower.includes('guitar')) return 'Guitar';
    if (lower.includes('keyboard') || lower.includes('piano')) return 'Keyboard';
    if (lower.includes('violin')) return 'Violin';
    return 'All';
}

async function fetchAllPlaylistVideos(): Promise<YTVideo[]> {
    const videos: YTVideo[] = [];
    let pageToken = '';

    do {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ''}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
        const data = await res.json();

        for (const item of data.items ?? []) {
            const sn = item.snippet;
            const videoId = sn?.resourceId?.videoId;
            if (!videoId || sn?.title === 'Private video' || sn?.title === 'Deleted video') continue;
            videos.push({
                videoId,
                title: sn.title,
                thumbnail:
                    sn.thumbnails?.maxres?.url ??
                    sn.thumbnails?.high?.url ??
                    sn.thumbnails?.medium?.url ??
                    '',
                category: detectCategory(sn.title),
            });
        }

        pageToken = data.nextPageToken ?? '';
    } while (pageToken);

    return videos;
}

export default function YoutubeCarousel() {
    const [videos, setVideos] = useState<YTVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const isHovered = useRef(false);
    const startX = useRef(0);
    const scrollStartLeft = useRef(0);
    const dragMoved = useRef(false);
    const rafId = useRef<number>(0);

    useEffect(() => {
        fetchAllPlaylistVideos()
            .then(setVideos)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    // Close modal on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveVideo(null); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    // Auto-scroll: smooth left-to-right, seamless loop
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const SPEED = 0.6; // px per animation frame
        let lastTs = 0;

        const tick = (ts: number) => {
            if (lastTs === 0) lastTs = ts;
            const dt = Math.min(ts - lastTs, 50); // cap dt to avoid jumps after tab switch
            lastTs = ts;

            if (!isDragging.current && !isHovered.current && container) {
                container.scrollLeft += SPEED * dt * 0.06;
                // Seamless infinite loop: reset at the midpoint (second set begins)
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }

            rafId.current = requestAnimationFrame(tick);
        };

        rafId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId.current);
    }, [videos, activeFilter]);

    const scroll = useCallback((dir: 'left' | 'right') => {
        scrollRef.current?.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
    }, []);

    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        dragMoved.current = false;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
        scrollStartLeft.current = scrollRef.current?.scrollLeft ?? 0;
        if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const delta = (x - startX.current) * 1.6;
        if (Math.abs(delta) > 4) dragMoved.current = true;
        scrollRef.current.scrollLeft = scrollStartLeft.current - delta;
    };
    const onMouseUp = () => {
        isDragging.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };

    const handleCardClick = (videoId: string) => {
        if (!dragMoved.current) setActiveVideo(videoId);
    };

    const filtered = activeFilter === 'All' ? videos : videos.filter((v) => v.category === activeFilter);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center gap-4">
                <div
                    className="h-8 w-8 animate-spin rounded-full border-2"
                    style={{ borderColor: 'rgba(212,175,55,0.3)', borderTopColor: 'var(--color-gold)' }}
                />
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Loading videos…
                </span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-48 items-center justify-center">
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Could not load videos. {error}
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Filter tabs */}
            <div className="mb-8 flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.10em',
                            textTransform: 'uppercase',
                            background: activeFilter === f ? 'var(--color-gold-dim)' : 'transparent',
                            color: activeFilter === f ? 'var(--color-gold)' : 'var(--color-text-muted)',
                            border: `1px solid ${activeFilter === f ? 'rgba(212,175,55,0.30)' : 'rgba(150,150,150,0.15)'}`,
                            padding: '6px 18px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                    >
                        {f}
                    </button>
                ))}
                <span
                    className="ml-auto self-center"
                    style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.10em' }}
                >
                    {filtered.length} VIDEO{filtered.length !== 1 ? 'S' : ''}
                </span>
            </div>

            {/* Scroll container with arrow buttons */}
            <div className="relative">
                {/* Left arrow */}
                <button
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                    className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                >
                    <ArrowLeft size={15} style={{ color: 'var(--color-gold)' }} />
                </button>

                {/* Right arrow */}
                <button
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                    className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-mid-line)' }}
                >
                    <ArrowRight size={15} style={{ color: 'var(--color-gold)' }} />
                </button>

                {/* Hide scrollbar CSS trick */}
                <style>{`
                    .yt-scroll::-webkit-scrollbar { display: none; }
                `}</style>

                {/* The scrollable row */}
                <div
                    ref={scrollRef}
                    className="yt-scroll flex gap-5 overflow-x-auto pb-2 select-none"
                    style={{ cursor: 'grab', scrollbarWidth: 'none' }}
                    onMouseEnter={() => { isHovered.current = true; }}
                    onMouseLeave={() => { isHovered.current = false; isDragging.current = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab'; }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                >
                    {filtered.length === 0 ? (
                        <div className="flex h-48 w-full items-center justify-center">
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                                No videos in this category yet.
                            </p>
                        </div>
                    ) : (
                        // Duplicate the list for seamless infinite scroll
                        [...filtered, ...filtered].map((video, i) => (
                            <div
                                key={`${video.videoId}-${i}`}
                                onClick={() => handleCardClick(video.videoId)}
                                className="group relative flex-shrink-0 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                style={{
                                    width: '300px',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(212,175,55,0.15)',
                                    background: 'var(--color-surface-2)',
                                }}
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        draggable={false}
                                        loading="lazy"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                                        <div
                                            className="flex h-14 w-14 scale-75 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                                            style={{
                                                background: 'var(--color-gold)',
                                                boxShadow: '0 4px 28px rgba(212,175,55,0.55)',
                                            }}
                                        >
                                            <Play size={22} weight="fill" style={{ color: '#1A1A1A', marginLeft: '2px' }} />
                                        </div>
                                    </div>
                                    {/* Category badge */}
                                    {video.category !== 'All' && (
                                        <div
                                            className="absolute left-3 top-3 rounded-full px-3 py-1"
                                            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: 'var(--font-ui)',
                                                    fontSize: '10px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.14em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--color-gold)',
                                                }}
                                            >
                                                {video.category}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <p
                                        className="line-clamp-2"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '13px',
                                            color: 'var(--color-text-sub)',
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {video.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
                        style={{ aspectRatio: '16/9' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                            title="Fairyan Music School Video"
                            allow="autoplay; encrypted-media; fullscreen"
                            allowFullScreen
                            className="h-full w-full border-0"
                        />
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setActiveVideo(null)}
                        aria-label="Close video"
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                        style={{ background: 'var(--color-gold)', boxShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
                    >
                        <X size={18} weight="bold" style={{ color: '#1A1A1A' }} />
                    </button>
                </div>
            )}
        </>
    );
}
