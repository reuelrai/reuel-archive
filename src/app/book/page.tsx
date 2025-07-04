export const metadata = {
    title: 'Born from Ashes — The remnants of yesterday. | Reuel Writes',
    description: 'Read the original book written by Reuel Rai — introspective, philosophical, and deeply human.',
    keywords: ['Reuel Rai book', 'Born from Ashes — The remnants of yesterday.', 'original book', 'Reuel Writes book'],
    openGraph: {
        title: 'Born from Ashes — The remnants of yesterday. | Reuel Writes',
        description: 'Explore Reuel Rai’s original book — a powerful expression of thoughts and control.',
        url: 'https://yourdomain.com/book',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-book.png',
                width: 1200,
                height: 630,
                alt: 'Born from Ashes — The remnants of yesterday. book cover',
            },
        ],
        locale: 'en_US',
        type: 'book',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Born from Ashes — The remnants of yesterday. | Reuel Writes',
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
            <section className="mt-5 mb-5">
                <h1 className="text-3xl mb-5">Chapter 1 - A World Measured in Mana</h1>
                <p>
                    Behind the village where I grew up, there was a small forest. It was a place of refuge for me, a sanctuary where I could escape the noise of the world and find solace in nature. The trees stood tall and proud, their leaves whispering secrets to one another in the gentle breeze. I would often sit beneath the shade of an old oak tree, feeling its rough bark against my back, and let my mind wander.
                    <br/>
                    In this world, magic is not a gift — it’s a currency.
                    Not everyone is born with it, and those who are quickly learn this truth: mana is everything. It shapes status, determines power, and decides who rules and who kneels.
                    <br/>
                    The commonfolk call it the Vein — the invisible current of energy flowing through the fortunate few. Those born with it can sense the ebb and flow of mana, draw it into their bodies, and shape reality. But mana is finite. When it’s gone, so is their power — and sometimes, their lives.
                    <br/>
                    People are born into castes, unofficial but universally recognized:
                    The Emberborn, whose mana is barely more than a flicker — good for lighting lamps or chilling wine.
                    The Veilcasters, who can fight, heal, create, and protect — the backbone of magical society.
                    And the Arcanites — the legends. Born with oceans of mana, they can level cities, rewrite laws of nature, and twist fate itself. Monarchs fear them.The Churches worship them. The world shapes itself around them.
                    <br/>
                    And then… there’s me.
                    <br/>
                    I was born with no mana in my first life. Just another silent face in a world carved by magic and ruled by those who had it. I died like most do — unremarkably and forgotten.
                    <br/>
                    Then I woke up again. At the beginning.
                    Same life. Same timeline. Same body.
                    But I remembered everything.
                    <br/>
                    I’ve since lived this life 8,764 times. This is my 8,765th.
                    <br/>
                    …
                    <br/>  
                    And this time, I’m not the only one returning.
                </p>
            </section>
        </main>
    );
}
