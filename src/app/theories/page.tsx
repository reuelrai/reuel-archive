// src/theories/page.tsx

import TheoriesClient from './theoriesClient';

export const metadata = {
    title: "Theories | Reuel's Writings",
    description: "Explore fascinating cultural, psychological, and philosophical theories — from the Japanese red string of fate to modern-day social concepts.",
    keywords: ['theories', 'red string of fate', 'pop psychology', 'Japanese legend', 'Reuel Rai'],
    openGraph: {
        title: "Theories | Reuel's Writings",
        description: "A curated collection of timeless and intriguing theories from culture, psychology, and mythology.",
    },
};

export default function TheoriesPage() {
    return <TheoriesClient />;
}
