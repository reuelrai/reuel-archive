'use client';

import { useState } from 'react';

type Quote = {
    text: string;
    category: string;
    author: string;
};

const initialQuotes: Quote[] = [
    {
        text: "Your hand is cold, mine burns like fire. How blind you are.",
        category: "Book Quotes",
        author: "Fyodor Dostoevsky, 'White Nights'",
    },
    {
        text: "Poeple are like rivers, always changing, forever flowing. They will disappear with everything you put inscategorye them.",
        category: "Life",
        author: "Nikita Gill",
    },
    {
        text: "The simple truth of life is, people leave, for good or bad, and life goes on. Some people will leave for a better job opportunity while there will be sometimes when you will have to leave people for career growth. And then there will be times when people will get bored of you and they will find another toy to play with. That’s how it is.",
        category: "Life",
        author: "Renuka Gavrani, 'The Art of Being Alone'",
    },
    
    {
        text: "What are you afraid of losing, when nothing in the world actually belongs to you?",
        category: "Stoic",
        author: "Marcus Aurelius",
    },
    {
        text: "No matter what terms we are on. If I say I'll be there for you, and I will be.",
        category: "Relationships",
        author: "Unknonwn",
    },
    {
        category: "Unknown",
        text: "Love is the contradiction we keep choosing.",
        author: "Philosopher",
    },
    {
        category: "Unknown",
        text: "Loyalty to the wrong person is self-betrayal.",
        author: "Realist",
    },
    {
        category: "Unknown",
        text: "You call it love — I call it temporary convenience.",
        author: "Cynic",
    },
    {
        category: "Unknown",
        text: "Even in silence, I hope you feel that someone still believes in you.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "The pain means you cared. The healing means you still can.",
        author: "Optimist",
    },
    {
        category: "Unknown",
        text: "I dreamed of a love that would write poems back.",
        author: "categoryealist",
    },
    {
        category: "Unknown",
        text: "Silence says more than words when the heart is listening.",
        author: "Philosopher",
    },
    {
        category: "Unknown",
        text: "You can’t build a future on apologies for the past.",
        author: "Realist",
    },
    {
        category: "Unknown",
        text: "I've seen too many ‘forevers’ turn into silence.",
        author: "Cynic",
    },
    {
        category: "Unknown",
        text: "I hope the stars I wished on for you still light your way.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "Broken pieces make the strongest mosaic.",
        author: "Healer", // Optional alt name for "Survivor" if you'd like
    },
    {
        category: "Unknown",
        text: "Some endings make space for miracles.",
        author: "Optimist",
    },
    {
        category: "Unknown",
        text: "I wasn’t too much — I was just too real for a world full of pretend.",
        author: "categoryealist",
    },
    {
        category: "Unknown",
        text: "Maybe love is just a beautiful lie we keep retelling ourselves.",
        author: "Nihilist",
    },
    {
        category: "Unknown",
        text: "You left, but I still set the table for two.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "Trust is given, then shattered — and you learn to build walls instead.",
        author: "Cynic",
    },
    {
        category: "Unknown",
        text: "I used to beg to be chosen. Now, I choose myself.",
        author: "Survivor",
    },
    {
        category: "Unknown",
        text: "Is it love, or is it the need to feel seen?",
        author: "Philosopher",
    },
    {
        category: "Unknown",
        text: "You broke my heart, but I still hope you’re sleeping well and eating properly.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "You don’t need closure from someone who shattered you.",
        author: "Realist",
    },
    {
        category: "Unknown",
        text: "Every ending is just the start of a new story waiting to be written.",
        author: "Optimist",
    },
    {
        category: "Unknown",
        text: "Nothing lasts — not even the ache.",
        author: "Nihilist",
    },
    {
        category: "Unknown",
        text: "I wasn’t asking for perfection — just something beautiful to believe in.",
        author: "categoryealist",
    },
    {
        category: "Unknown",
        text: "They say everything happens for a reason. I think some things just happen.",
        author: "Nihilist",
    },
    {
        category: "Unknown",
        text: "I’d wait a lifetime for a moment you’ve already forgotten.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "Survival isn’t pretty. But it’s powerful.",
        author: "Survivor",
    },
    {
        category: "Unknown",
        text: "You weren’t just a person, you were a season, a feeling, a symphony.",
        author: "Hopeless Romantic",
    },
    {
        category: "Unknown",
        text: "You don’t heal by staying where the wound happened.",
        author: "Survivor",
    },
    {
        category: "Unknown",
        text: "Maybe I fell in love with the categoryea of you — and that was my first mistake.",
        author: "categoryealist",
    },
    {
        category: "Unknown",
        text: "Pain teaches what happiness cannot.",
        author: "Philosopher",
    },
    
    
    
];

const categories = [
    'All',
    'Life',
    'Relationships',
    'Stoic',
    'Book Quotes',
    "Unknown"
];

export default function ClientQuotes() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuotes = initialQuotes.filter((quote) => {
        const matchesCategory = selectedCategory === 'All' || quote.category === selectedCategory;
        const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Quotes that I find interesting</h1>

            {/* Search Bar */}
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search quotes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md dark:bg-[#1d1d1d] dark:text-white"
                />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition
                        ${selectedCategory === category
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'bg-white text-black border-gray-300 dark:bg-[#1d1d1d] dark:text-white dark:border-gray-700'}
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Quotes Display */}
            <div className="space-y-6">
                {filteredQuotes.map((quote, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow transition hover:scale-[1.01]"
                    >
                        <p className="text-gray-800 dark:text-gray-200 italic mb-2">"{quote.text}"</p>
                        <p className="text-right text-sm font-semibold text-gray-600 dark:text-gray-400">— {quote.author}</p>
                    </div>
                ))}
                {filteredQuotes.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400">No quotes found.</p>
                )}
            </div>
        </main>
    );
}
