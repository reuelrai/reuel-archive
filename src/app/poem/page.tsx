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
    const poems = [
        {
            title: 'Moon',
            lines: [
                'I could give you the world',
                'But you wanted a fucking solar system',
                'The end',
            ],
        },
        {
            title: 'Storm',
            lines: [
                'The clouds gathered like angry thoughts',
                'And I stood still, hoping the thunder wasn’t mine',
                'The end',
            ],
        },
        {
            title: 'Ashes',
            lines: [
                'We burned and called it love',
                'But all we ever made was smoke',
                'The end',
            ],
        },
        {
            title: 'Eclipse',
            lines: [
                'You blocked my light',
                'But I still danced around you',
                'Even in the dark',
                'The end',
            ],
        },
    ];

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Poems</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                {poems.map((poem, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-md bg-white dark:bg-[#1d1d1d] text-black dark:text-white hover:shadow-lg transition-all"
                    >
                        <h2 className="text-xl font-semibold mb-4">{poem.title}</h2>
                        {poem.lines.map((line, i) => (
                            <p
                                key={i}
                                className={`mb-2 ${line.toLowerCase() === 'the end'
                                        ? 'italic text-gray-600 dark:text-gray-400'
                                        : ''
                                    }`}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
