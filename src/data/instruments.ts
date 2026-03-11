export interface Instrument {
    name: string;
    image: string;
    description: string;
}

export const instruments: Instrument[] = [
    {
        name: 'Keyboard',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop',
        description: 'Scales, chord theory, and pieces across classical and contemporary styles — including Trinity London grade preparation.',
    },
    {
        name: 'Guitar',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
        description: 'From fingerpicking basics to advanced repertoire — acoustic and classical guitar for all levels, including Trinity grade exams.',
    },
    {
        name: 'Violin',
        image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=400&h=300&fit=crop',
        description: 'Bowing technique, intonation, and classical repertoire with precision — with pathways to Trinity College London grade certification.',
    },
];
