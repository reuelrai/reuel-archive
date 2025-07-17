export const metadata = {
    title: 'Reuel | Home',
    description: 'Welcome to Reuel Writes — explore original poems, thought-provoking blogs, and books written by Reuel Rai.',
    keywords: ['Reuel Rai', 'poems', 'blogs', 'books', 'Nepal', 'creative writing'],
    openGraph: {
        title: 'Reuel | Home',
        description: 'Discover poems, blogs, and books written by Reuel Rai. Explore your emotions through words.',
        url: 'https://yourdomain.com',
        siteName: 'Reuel Writes',
        images: [
            {
                url: 'https://yourdomain.com/og-home.png',
                width: 1200,
                height: 630,
                alt: 'Reuel Writes',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reuel Writes | Home',
        description: 'Discover poems, blogs, and books written by Reuel Rai.',
        images: ['https://yourdomain.com/og-home.png'],
    },
};

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center text-center"
            style={{ height: 'calc(100vh - 200px)' }}
        >
            <h1 className="text-4xl font-bold p-4 shadow-md bg-white dark:bg-[#1d1d1d] text-black dark:text-white hover:shadow-md transition-all mt-18">Welcome to Reuel Blogs</h1>
            <p className="text-lg max-w-md italic ">
                Select a section from the navigation above to start reading.
            </p>
            <p className="text-sm max-w-md text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-[#1d1d1d] p-3 rounded-md shadow-inner">
                Updated on 2025-07-18
            </p>
        </div>
    )
}
