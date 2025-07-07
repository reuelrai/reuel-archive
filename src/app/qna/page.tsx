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
            answer: "I'm an old soul who still believes in courtship, handwritten love letters, walks on dates, picnics and coffee dates under the starts.",
        },
        {
            question: "Do I Dream?",
            answer: "Yes, every night.",
        },
        {
            question: "What do I hate the most?",
            answer: "Dishonesty and deception",
        },
        {
            question: "What are my hobbies?",
            answer: "Watching anime, reading manga/manhwa/books, listening to music, keeping track of tech world and playing video games.",
        },
        {
            question: "What's my favourite book?",
            answer: "Metamorphosis by Franz Kafka.",
        },
        {
            question: "Do I play any instruments?",
            answer: "Yes, I play the guitar and paino occasionally.",
        },
        {
            question: "If I had to choose between someone who loves me and someone I love, who would I choose?",
            answer: "Someone who loves me.",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Q&A</h1>
            <div className="space-y-6">
                {qaList.map((qa, index) => (
                    <div key={index} className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
                        <h2 className="text-xl font-semibold mb-2">{qa.question}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{qa.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
