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
        <main className="min-h-screen bg-[#1d1d1d] text-white px-6 py-12 font-serif">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                    burnout.
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    These are raw unspoken feelings I found across the internet.
                </p>

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full mb-8 p-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                />

                <div className="space-y-8">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry) => (
                            <div
                                key={entry.id}
                                className="border-l-4 border-red-500 pl-4"
                            >
                                <p className="text-gray-200">{entry.content}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 italic">No entries found.</p>
                    )}
                </div>
            </div>
        </main>
    );
}
