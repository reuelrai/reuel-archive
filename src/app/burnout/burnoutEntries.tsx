export interface BurnoutEntry {
    id: string;
    content: string;
    category:
    | "Hopeless Romantic"
    | "Realist"
    | "Idealist"
    | "Cynic"
    | "Optimist"
    | "Survivor"
    | "Nihilist"
    | "Philosopher"
    | "Healer";
    date?: string;
}

export const burnoutEntries: BurnoutEntry[] = [
    
];
