'use client';

import { useState } from 'react';

const categorizedQuotes = {
    Life: [
        "Even the moon takes time to become whole.",
        "You’re not behind. You’re just not on their path.",
        "Every version of you was needed to get here.",
        "It’s okay to be lost—just don’t unpack and settle there.",
        "Life doesn’t wait for perfection. It rewards movement.",
    ],
    Love: [
        "True love doesn’t complete you — it reflects you.",
        "Love is not found. It’s recognized.",
        "In the right heart, you’re not too much.",
        "Real love feels like home, not a high.",
        "Love isn’t loud. It’s consistent.",
    ],
    Motivation: [
        "You don’t need more time. You need more focus.",
        "They said it was impossible. So I did it quietly.",
        "Fall in love with progress, not perfection.",
        "A single day of effort is better than a month of intention.",
        "The grind is lonely. The results aren’t.",
    ],
    Stoic: [
        "Let your silence be louder than their noise.",
        "Be so disciplined that even freedom feels structured.",
        "A strong mind is better than a sharp tongue.",
        "You don't control others. Only how you respond.",
        "The world owes you nothing. And that is freedom.",
    ],
    Funny: [
        "Laughter doesn’t solve problems, but it makes the wait more bearable.",
        "Life’s weird — dress accordingly.",
        "Overthinkers: experts in imaginary disasters.",
        "Coffee first. Questions never.",
        "When in doubt, nap it out.",
    ],
    Creativity: [
        "Blank pages aren’t scary — they’re invitations.",
        "Make art that makes people feel, not just nod.",
        "Creativity isn't born. It's remembered.",
        "You don’t need permission to create. Just courage.",
        "Every mess holds the seed of something meaningful.",
    ],
    Growth: [
        "Growth feels like failure before it feels like progress.",
        "You can’t outgrow your past if you keep unpacking there.",
        "Every discomfort is a doorway.",
        "Growth is saying no without guilt.",
        "Some lessons only come after you’ve let go.",
    ],
    Loneliness: [
        "Loneliness isn’t emptiness. It’s space waiting to be filled by you.",
        "You can be surrounded and still unseen.",
        "Sometimes the silence teaches more than the noise ever could.",
        "Aloneness is peace. Loneliness is a story.",
        "Healing happens when you're no longer afraid of your own company.",
    ],
    Writing: [
        "Write like no one’s watching — and then edit like everyone is.",
        "A good sentence breathes. A great one lingers.",
        "Writers bleed into their paragraphs.",
        "Don’t aim for perfect prose. Aim for true expression.",
        "Writing is exorcism with punctuation.",
    ],
};

const allQuotes = Object.values(categorizedQuotes).flat();

export default function ClientQuotes() {
    const [randomQuote, setRandomQuote] = useState<string | null>(null);

    const getRandomQuote = () => {
        const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        setRandomQuote(quote);
    };

    return (
        <main className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Quotes</h1>

            {/* Random Quote Generator */}
            <div className="text-center mb-12">
                <button
                    onClick={getRandomQuote}
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold transition hover:scale-105"
                >
                    Generate Random Quote
                </button>
                {randomQuote && (
                    <div className="mt-6 bg-gray-100 dark:bg-[#1d1d1d] border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow text-lg italic">
                        “{randomQuote}”
                    </div>
                )}
            </div>

            {/* Category Grid */}
            <div className="space-y-12">
                {Object.entries(categorizedQuotes).map(([category, quotes]) => (
                    <div key={category}>
                        <h2 className="text-2xl font-semibold mb-4">{category}</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {quotes.map((quote, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow hover:scale-[1.01] transition"
                                >
                                    <p className="text-gray-800 dark:text-gray-200 italic">"{quote}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
