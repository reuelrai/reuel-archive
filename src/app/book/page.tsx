export const metadata = {
    title: 'Born from Ashes — Rising again from the remnants of yesterday. | Reuel Writes',
    description: 'Read the original book written by Reuel Rai — introspective, philosophical, and deeply human.',
    keywords: ['Reuel Rai book', 'Born from Ashes — Rising again from the remnants of yesterday.', 'original book', 'Reuel Writes book'],
    openGraph: {
        title: 'Born from Ashes — Rising again from the remnants of yesterday. | Reuel Writes',
        description: 'Explore Reuel Rai’s original book — a powerful expression of thoughts and control.',
        url: 'https://yourdomain.com/book',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-book.png',
                width: 1200,
                height: 630,
                alt: 'Born from Ashes — Rising again from the remnants of yesterday. book cover',
            },
        ],
        locale: 'en_US',
        type: 'book',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Born from Ashes — Rising again from the remnants of yesterday. | Reuel Writes',
        description: 'Read the original book by Reuel Rai.',
        images: ['https://yourdomain.com/og-book.png'],
    },
};

export default function Book() {
    return (
        <main className="px-4 py-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-1 mt-4 text-center">Born from Ashes</h1>
            <p className=" text-center mb-4">The remnants of yesterday</p>
            <p className="italic text-center mb-10">By Reuel Rai</p>

            <section className="prose dark:prose-invert">
                <p>
                    {/* Example content — replace this with your book text */}
                    Every morning, I wake with the quiet certainty that something has changed — not around me, but within. The world feels the same, the people unchanged, and yet I carry a growing sense of distance between who I am now and who I was yesterday. It’s not memory that fails me — I remember everything, in vivid detail — it’s something subtler, like a shift in weight, a pause in rhythm. Today is the 8,765th time I’ve lived this life. Or perhaps it’s the 8,765th version of me that has. Either way, I keep going — unchanged in the eyes of others, but undeniably different to myself.
                </p>
                {/* Continue your book content here... */}
            </section>
        </main>
    );
}
