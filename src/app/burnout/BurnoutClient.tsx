"use client";

import { useState, useMemo } from "react";
import { burnoutEntries } from "./burnoutEntries";

export default function BurnoutClient() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEntries = useMemo(() => {
        return burnoutEntries.filter((entry) =>
            entry.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <main className="min-h-screen bg-white dark:bg-[#1d1d1d] text-gray-900 dark:text-white px-6 py-12 transition-colors duration-500 flex flex-col">
            <div className="max-w-3xl mx-auto w-full">
                <h1 className="text-red-500 text-4xl font-bold mb-2 tracking-tight leading-tight">
                    burnout.
                </h1>


                <p className="text-md text-gray-600 dark:text-gray-400 mb-8 italic">
                    This is a graveyard of words —
                    <br />
                    where love and loss, hope and despair,
                    <br />
                    silence and scream all find their resting place.
                    <br />
                    Here lie the fragments of every broken heart,
                    <br />
                    and the whispers of those learning to love again.
                </p>

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full mb-6 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />

                <div className="space-y-6">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry) => (
                            <div
                                key={entry.id}
                                className="p-4 border-l-4 border-red-500 bg-gray-100 dark:bg-[#2a2a2a] rounded-md transition hover:scale-[1.01]"
                            >
                                <p className="text-md whitespace-pre-line">
                                    {entry.content}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No matching entries found.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
