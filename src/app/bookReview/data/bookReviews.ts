export interface BookReview {
    id: number;
    title: string;
    author: string;
    review: string;
    rating: number;  // Rating scale: 1 to 10
    genre: string;   // e.g. "Memoir", "Fiction", "Philosophy"
}

export const bookReviews: BookReview[] = [
    {
        id: 1,
        title: "The Art of Being Alone",
        author: "Renuka Gavrani",
        rating: 9,
        genre: "Memoir / Self-Help",
        review: `This book is for the quiet souls — the ones who feel everything deeply but rarely say it out loud. Renuka Gavrani writes about solitude not as something to escape, but as something to sit with, understand, and even cherish.

    It's a soft companion for nights when the world feels distant, and your own thoughts are too loud. Through short reflections and raw fragments, it reminds you that being alone isn't the same as being lonely — and sometimes, it's in that stillness where we find ourselves again.

    If you've ever craved peace more than people, or silence more than noise — this one will speak to you.`,
    },

    {
        id: 2,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        rating: 10,
        genre: "Novella / Fiction",
        review: `The Metamorphosis isn’t about a man turning into a bug — it’s about what happens when someone we love is no longer who they used to be, and how quickly our compassion fades. Gregor Samsa gave everything to his family. But the moment he couldn’t carry that weight anymore, they didn’t just lose patience — they stopped seeing him at all.

    Interesting part is, the moment Gregor transforms into a bug, all he thinks about is not being late for work.

    In the end, The Metamorphosis is less about a monstrous insect and more about the monstrous truth of conditional love in a transactional world.`,
    },

    {
        id: 3,
        title: "White Nights",
        author: "Fyodor Dostoevsky",
        rating: 8,
        genre: "Romantic Fiction / Classic",
        review: `White Nights is a beautiful, bittersweet tale of loneliness and fleeting connection. The narrator, a dreamy and isolated wanderer, meets a mysterious woman one summer night, and their brief encounter changes both their lives forever.`,
    },

    // Add more reviews
];
