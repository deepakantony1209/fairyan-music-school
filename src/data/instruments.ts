export interface Instrument {
    name: string;
    image: string;
    description: string;
}

export const instruments: Instrument[] = [
    {
        name: 'Acoustic / Classical Guitar',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
        description: 'From fingerpicking basics to Grade 8 classical repertoire.',
    },
    {
        name: 'Electric Guitar',
        image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=300&fit=crop',
        description: 'Lead solos, rhythm riffs, and live performance with student bands.',
    },
    {
        name: 'Bass Guitar',
        image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=300&fit=crop',
        description: 'Groove, timing, and the harmonic backbone of any ensemble.',
    },
    {
        name: 'Keyboard / Piano',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop',
        description: 'Scales, chord theory, and pieces across classical and contemporary styles.',
    },
    {
        name: 'Drums & Percussion',
        image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=300&fit=crop',
        description: 'Full drum-kit technique — timing, dynamics, and multiple genres.',
    },
    {
        name: 'Violin',
        image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=400&h=300&fit=crop',
        description: 'Bowing technique, intonation, and classical repertoire with precision.',
    },
    {
        name: 'Carnatic Vocal',
        image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop',
        description: 'Ragas, swaras, and devotional compositions under authentic guidance.',
    },
    {
        name: 'Western Vocal',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        description: 'Breath control, pitch accuracy, and stage-ready performance skills.',
    },
];
