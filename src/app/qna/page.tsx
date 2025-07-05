export default function qna() {
    const qaList = [
        {
            question: "Who are you?",
            answer: "I'm Reuel Rai, a creative front-end developer passionate about building beautiful and user-friendly websites.",
        },
        {
            question: "What do you work with?",
            answer: "I use HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and TypeScript. I'm also exploring Supabase and backend development.",
        },
        {
            question: "What are your goals?",
            answer: "To become a full-stack developer, help local businesses grow online, and build meaningful digital products.",
        },
        {
            question: "Where are you from?",
            answer: "I'm from Nepal, and I'm inspired by its culture, people, and potential for digital transformation.",
        },
        {
            question: "What do you do for fun?",
            answer: "I enjoy writing blogs, watching anime and reading books, and working on side projects that improve my skills.",
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
