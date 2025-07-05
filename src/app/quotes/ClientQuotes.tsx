'use client';

import { useState } from 'react';

type Quote = {
    text: string;
    category: string;
    author: string;
};

const initialQuotes: Quote[] = [
    {
        text: "Life isn’t about finding yourself. It’s about creating yourself.",
        category: "Life",
        author: "George Bernard Shaw",
    },
    {
        text: "Let silence teach what noise cannot.",
        category: "Life",
        author: "Unknown",
    },
    {
        text: "The only way out is through.",
        category: "Book Quotes",
        author: "Robert Frost",
    },
    {
        text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
        category: "Book Quotes",
        author: "Aristotle",
    },
];

const categories = [
    'All',
    'Life',
    'Book Quotes',
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
        <main className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Your Quotes</h1>

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
