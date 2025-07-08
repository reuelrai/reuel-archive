// app/quotes/page.tsx

import ClientQuotes from './ClientQuotes';

export const metadata = {
    title: 'Quotes | Reuel',
    description: 'Explore a collection of original and inspiring quotes curated and written by Reuel Rai.',
    keywords: ['Reuel Rai', 'quotes', 'inspirational quotes', 'original quotes', 'motivational quotes', 'Reuel Writes'],
    openGraph: {
        title: 'Quotes | Reuel Rai',
        description: 'Discover thought-provoking and original quotes by Reuel Rai — motivation, wisdom, and creativity.',
        url: 'https://yourdomain.com/quotes',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/quotes-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Quotes by Reuel Rai',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quotes | Reuel Rai',
        description: 'Browse inspiring and original quotes by Reuel Rai.',
        images: ['https://yourdomain.com/quotes-twitter.jpg'],
    },
};

export default function qna() {
    return <ClientQuotes />;
}
