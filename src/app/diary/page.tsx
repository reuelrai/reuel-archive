// app/diary/page.tsx
import { diaryEntries } from './diaryData';

export const metadata = {
    title: 'diary | Reuel Writes',
    description: 'Read insightful diary entries written by Reuel Rai — thoughts on life, creativity, and beyond.',
    keywords: ['Reuel Rai diary', 'life diaries', 'personal diaries', 'Reuel Writes diary', 'creative thoughts'],
    openGraph: {
        title: 'diary | Reuel Writes',
        description: 'Explore the latest diary entries by Reuel Rai on creativity, life, and introspection.',
        url: 'https://yourdomain.com/diary',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-diary.png',
                width: 1200,
                height: 630,
                alt: 'Reuel diary',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'diary | Reuel Writes',
        description: 'Latest thoughts and diary entries by Reuel Rai.',
        images: ['https://yourdomain.com/og-diary.png'],
    },
};

export default function DiaryPage() {
    const sortedEntries = diaryEntries.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className="min-h-screen bg-white text-black dark:bg-[#1d1d1d] dark:text-gray-200 transition-colors duration-300 content-center items-center flex">
            <div className="max-w-4xl mx-auto p-6 mt-6">
                <h1 className="text-3xl font-bold mb-8 text-center">Reuel's Diary</h1>
                {sortedEntries.map((entry) => (
                    <div
                        key={entry.id}
                        className="mb-10 border-b pb-4 border-gray-300 dark:border-gray-600"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {new Date(entry.date).toDateString()}
                        </p>
                        <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
                        <p className="whitespace-pre-line leading-relaxed">
                            {entry.content}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
