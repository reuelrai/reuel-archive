'use client';

import { useState } from 'react';
import { theories, Theory } from './theoriesEntries';

const categories = ['All', ...Array.from(new Set(theories.map((t) => t.category)))];

export default function TheoriesClient() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTheories = theories.filter((theory) => {
        const matchesCategory = selectedCategory === 'All' || theory.category === selectedCategory;
        const matchesSearch = theory.title.toLowerCase().includes(searchTerm.toLowerCase()) || theory.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Here are some theories I found...</h1>

            {/* Search */}
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search theories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md dark:bg-[#1d1d1d] dark:text-white"
                />
            </div>

            {/* Categories */}
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

            {/* Theory Cards */}
            <div className="space-y-6">
                {filteredTheories.map((theory, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow transition hover:scale-[1.01]"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{theory.title}</h2>
                        <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">{theory.category}</p>
                        <p className="text-gray-800 dark:text-gray-200 mb-2">{theory.description}</p>
                        {theory.source && (
                            <p className="text-right text-sm text-gray-600 dark:text-gray-400">— {theory.source}</p>
                        )}
                    </div>
                ))}
                {filteredTheories.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400">No theories found.</p>
                )}
            </div>
        </main>
    );
}
