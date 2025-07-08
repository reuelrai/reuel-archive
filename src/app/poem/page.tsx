export const metadata = {
    title: 'Poems | Reuel',
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
                'I could watch her for endless nights,',
                'So distant, yet so beautiful.',
                'Like a silent queen in silver light,',
                'Serene, untouchable, and full.',
                'She drifts through clouds in quiet grace,',
                'Unmoved by time or earthly sound,',
                'A wistful smile upon her face,',
                'As if she knows where dreams are found.',
                'No crown, no throne, no royal tune,',
                'And still she stirs the sea and gloom.',
                `She weaves her spell through midnight's bloom—`,
                'For her name is the Moon.',
            ],
        },
        {
            title: 'Where Smoke Meets Silence',
            lines: [
                'She would burn for me',
                'and I would die for her.',
                'Flicked flame to trembling lip,',
                'she kissed the night,',
                'a slow inhale of sin and surrender.',

                'Smoke curled like secrets',
                'between her fingers,',
                'and I,',
                'choking on devotion,',
                'let her poison settle in my lungs.',

                'She was the ruin I reached for',
                'in every quiet hour,',
                'the soft hiss of longing',
                'on paper- thin skin.',

                'We danced in silence,',
                'her breath a storm of ashes,',
                'my heart a house on fire.',

                'Each night, she left',
                'a little more of herself on my soul—',
                'a ghost in the shape of desire.',

                'And when I finally crumbled,',
                'no breath left to give,',
                'she whispered,',
                '“If you must die,',
                'die loving me.”',

                'So I did.',
                'The End',
            ],
        },
        

    ];

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8 text-center">I turn em into poems</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto ">
                {poems.map((poem, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-md bg-white dark:bg-[#1d1d1d] text-black dark:text-white hover:shadow-lg  transition hover:scale-[1.005]"
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
