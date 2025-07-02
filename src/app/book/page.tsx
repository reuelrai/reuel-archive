export const metadata = {
    title: 'The Art of Control | Reuel Writes',
    description: 'Read the original book written by Reuel Rai — introspective, philosophical, and deeply human.',
    keywords: ['Reuel Rai book', 'The Art of Control', 'original book', 'Reuel Writes book'],
    openGraph: {
        title: 'The Art of Control | Reuel Writes',
        description: 'Explore Reuel Rai’s original book — a powerful expression of thoughts and control.',
        url: 'https://yourdomain.com/book',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-book.png',
                width: 1200,
                height: 630,
                alt: 'The Art of Control book cover',
            },
        ],
        locale: 'en_US',
        type: 'book',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Art of Control | Reuel Writes',
        description: 'Read the original book by Reuel Rai.',
        images: ['https://yourdomain.com/og-book.png'],
    },
};

export default function Book() {
    return (
        <main className="px-4 py-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-center">The Art of Control</h1>
            <p className="italic text-center mb-10">By Reuel Rai</p>

            <section className="prose dark:prose-invert">
                <p>
                    {/* Example content — replace this with your book text */}
                    Control is not about domination; it is about understanding. In a world governed by chaos, the one who can control himself becomes a master of his fate.
                </p>

                <h2>Part I — Understanding Control</h2>
                <p>
                    True control begins within. The illusion of control over others fades when we fail to govern our own thoughts, our fears, and our impulses...
                </p>

                {/* Continue your book content here... */}
            </section>
        </main>
    );
}
