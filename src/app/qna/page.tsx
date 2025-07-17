// app/qna/page.tsx

export const metadata = {
    title: 'Q&A | Reuel Rai',
    description: 'Answers to frequently asked questions about Reuel Rai — his journey, skills, goals, and personal interests.',
    keywords: ['Reuel Rai', 'Q&A', 'FAQs', 'about Reuel', 'frontend developer', 'Nepal', 'Reuel Rai Q&A'],
    openGraph: {
        title: 'Q&A | Reuel Rai',
        description: 'Discover who Reuel Rai is, what he works on, and his personal and professional journey.',
        url: 'https://reuel-blogs.vercel.app/qna', // replace with your actual domain
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-image.jpg', // optional: Open Graph image
                width: 1200,
                height: 630,
                alt: 'Q&A with Reuel Rai',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Q&A | Reuel Rai',
        description: 'Learn more about Reuel Rai — front-end developer from Nepal.',
        images: ['https://yourdomain.com/twitter-image.jpg'], // optional
    },
};

export default function qna() {
    const qaList = [
        {
            question: "Who am I?",
            answer: "I'm an old soul who still believes in chivalry, handwritten love letters, walks on dates, picnics and coffee dates under the stars.",
        },
        {
            question: "Do I Dream?",
            answer: "Yes, every time I sleep.",
        },
        {
            question: "What are my hobbies?",
            answer: "Reading manga/manhwa/books, watching anime listening to music, keeping track of tech world.",
        },
        {
            question: "What's my favourite book?",
            answer: `'The art of being alone' by Renuka Gavrani`,
        },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Q&A</h1>
            <div className="space-y-6">
                {qaList.map((qa, index) => (
                    <div key={index} className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow transition hover:scale-[1.01]">
                        <h2 className="text-xl font-semibold mb-2">{qa.question}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{qa.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
