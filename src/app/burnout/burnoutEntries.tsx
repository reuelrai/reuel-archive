export interface BurnoutEntry {
    id: string;
    content: string;
    date?: string; // Optional: for future use
}

export const burnoutEntries: BurnoutEntry[] = [
    {
        id: "1",
        content: "Sometimes the person you'd do anything for is the one who does noting for you.",
    },
    {
        id: "2",
        content: "It took me a long time to realize I wasn't asking for too much - I was just asking the wrong person.",
    },
];
