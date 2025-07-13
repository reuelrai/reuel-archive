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
    {
        id: "1",
        content: `"Love is the contradiction we keep choosing."`,
        category: "Philosopher",
    },
    {
        id: "2",
        content: `"Loyalty to the wrong person is self-betrayal."`,
        category: "Realist",
    },
    {
        id: "3",
        content: `"You call it love — I call it temporary convenience."`,
        category: "Cynic",
    },
    {
        id: "4",
        content: `"Even in silence, I hope you feel that someone still believes in you."`,
        category: "Hopeless Romantic",
    },
    {
        id: "5",
        content: `"The pain means you cared. The healing means you still can."`,
        category: "Optimist",
    },
    {
        id: "6",
        content: `"I dreamed of a love that would write poems back."`,
        category: "Idealist",
    },
    {
        id: "7",
        content: `"Silence says more than words when the heart is listening."`,
        category: "Philosopher",
    },
    {
        id: "8",
        content: `"You can’t build a future on apologies for the past."`,
        category: "Realist",
    },
    {
        id: "9",
        content: `"I've seen too many ‘forevers’ turn into silence."`,
        category: "Cynic",
    },
    {
        id: "10",
        content: `"I hope the stars I wished on for you still light your way."`,
        category: "Hopeless Romantic",
    },
    {
        id: "11",
        content: `"Broken pieces make the strongest mosaic."`,
        category: "Healer", // Optional alt name for "Survivor" if you'd like
    },
    {
        id: "12",
        content: `"Some endings make space for miracles."`,
        category: "Optimist",
    },
    {
        id: "13",
        content: `"I wasn’t too much — I was just too real for a world full of pretend."`,
        category: "Idealist",
    },
    {
        id: "14",
        content: `"Maybe love is just a beautiful lie we keep retelling ourselves."`,
        category: "Nihilist",
    },
    {
        id: "15",
        content: `"You left, but I still set the table for two."`,
        category: "Hopeless Romantic",
    },
    {
        id: "16",
        content: `"Trust is given, then shattered — and you learn to build walls instead."`,
        category: "Cynic",
    },
    {
        id: "17",
        content: `"I used to beg to be chosen. Now, I choose myself."`,
        category: "Survivor",
    },
    {
        id: "18",
        content: `"Is it love, or is it the need to feel seen?"`,
        category: "Philosopher",
    },
    {
        id: "19",
        content: `"You broke my heart, but I still hope you’re sleeping well and eating properly."`,
        category: "Hopeless Romantic",
    },
    {
        id: "20",
        content: `"You don’t need closure from someone who shattered you."`,
        category: "Realist",
    },
    {
        id: "21",
        content: `"Every ending is just the start of a new story waiting to be written."`,
        category: "Optimist",
    },
    {
        id: "22",
        content: `"Nothing lasts — not even the ache."`,
        category: "Nihilist",
    },
    {
        id: "23",
        content: `"I wasn’t asking for perfection — just something beautiful to believe in."`,
        category: "Idealist",
    },
    {
        id: "24",
        content: `"They say everything happens for a reason. I think some things just happen."`,
        category: "Nihilist",
    },
    {
        id: "25",
        content: `"I’d wait a lifetime for a moment you’ve already forgotten."`,
        category: "Hopeless Romantic",
    },
    {
        id: "26",
        content: `"Survival isn’t pretty. But it’s powerful."`,
        category: "Survivor",
    },
    {
        id: "27",
        content: `"You weren’t just a person, you were a season, a feeling, a symphony."`,
        category: "Hopeless Romantic",
    },
    {
        id: "28",
        content: `"You don’t heal by staying where the wound happened."`,
        category: "Survivor",
    },
    {
        id: "29",
        content: `"Maybe I fell in love with the idea of you — and that was my first mistake."`,
        category: "Idealist",
    },
    {
        id: "30",
        content: `"Pain teaches what happiness cannot."`,
        category: "Philosopher",
    },
];
