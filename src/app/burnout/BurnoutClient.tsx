"use client";

import { useState, useMemo } from "react";
import { burnoutEntries } from "./burnoutEntries";

const categories = [
    "All",
    "Hopeless Romantic",
    "Realist",
    "Idealist",
    "Cynic",
    "Optimist",
    "Survivor",
    "Nihilist",
    "Philosopher",
    
] as const;

type Category = (typeof categories)[number];

const categoryEmojis: Record<Category, string> = {
    All: "✨",
    "Hopeless Romantic": "💔",
    Realist: "🪨",
    Idealist: "☁️",
    Cynic: "🔒",
    Optimist: "🌞",
    Survivor: "🔥",
    Nihilist: "🌀",
    Philosopher: "📖",
};

export default function BurnoutClient() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");

    const filteredEntries = useMemo(() => {
        return burnoutEntries.filter((entry) => {
            const matchesSearch = entry.content
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" || entry.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <main className="min-h-screen bg-white dark:bg-[#1d1d1d] text-gray-900 dark:text-white px-6 py-12 transition-colors duration-500">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600 dark:text-red-400 transition-colors duration-500">
                    burnout.
                </h1>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-500">
                    This is a graveyard of words.
                </p>

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full mb-6 p-3 rounded-md
            bg-gray-100 dark:bg-[#2a2a2a]
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            border border-gray-300 dark:border-gray-600
            focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400
            transition-colors duration-300"
                />

                <div className="flex justify-center gap-3 mb-8 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`font-serif px-4 py-2 rounded-full border text-sm transition-colors duration-300 ${selectedCategory === category
                                    ? "bg-red-600 text-white border-red-600"
                                    : "bg-transparent border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {categoryEmojis[category]} {category}
                        </button>
                    ))}
                </div>

                <div className="space-y-8">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry) => (
                            <div
                                key={entry.id}
                                className="border-l-4 border-red-600 dark:border-red-500 pl-4"
                            >
                                <p className="font-serif text-gray-800 dark:text-gray-200 transition-colors duration-300">
                                    {entry.content}
                                </p>
                                <p className="text-sm text-right text-gray-500 dark:text-gray-400 mt-2 italic">
                                    — {entry.category}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 italic transition-colors duration-300">
                            No entries found.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
