export interface Batch {
    time: string;
    seatsTaken: number;
    totalSeats: number;
    status: 'open' | 'low' | 'full';
    statusLabel: string;
}

export const MAX_BATCH_SIZE = 8;

export const batches: Batch[] = [
    {
        time: '5:30 PM',
        seatsTaken: 6,
        totalSeats: MAX_BATCH_SIZE,
        status: 'low',
        statusLabel: '2 Seats Left',
    },
    {
        time: '6:30 PM',
        seatsTaken: 4,
        totalSeats: MAX_BATCH_SIZE,
        status: 'open',
        statusLabel: '4 Seats Left',
    },
    {
        time: '7:30 PM',
        seatsTaken: 8,
        totalSeats: MAX_BATCH_SIZE,
        status: 'full',
        statusLabel: 'Full — Join Waitlist',
    },
];
