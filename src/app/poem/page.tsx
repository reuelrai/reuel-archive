export const metadata = {
    title: 'Poems | Reuel Writes',
    description: 'A collection of original poems by Reuel Rai. Emotional, thoughtful, and powerful writing.',
    keywords: ['Reuel Rai poetry', 'emotional poems', 'original poems', 'Reuel Writes poems'],
    openGraph: {
        title: 'Poems | Reuel Writes',
        description: 'Original poems by Reuel Rai — explore deep emotions and artistic words.',
        url: 'https://yourdomain.com/poem',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-poem.png',
                width: 1200,
                height: 630,
                alt: 'Reuel Poems',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Poems | Reuel Writes',
        description: 'Read original poems written by Reuel Rai.',
        images: ['https://yourdomain.com/og-poem.png'],
    },
};


export default function Poem() {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Moon</h1>
            <p className="mb-2">I could give you the world</p>
            <p className="mb-2">But you wanted a fucking solar system</p>
            <p className="italic">The end</p>
        </div>
    );
}
