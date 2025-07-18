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
        review: `This book will be your guide when you are feeling lost and abandoned. "The art of being alone" speaks right to your mind. Highly recommended.`,
    },

    {
        id: 2,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        rating: 10,
        genre: "Novella / Fiction",
        review: `The Metamorphosis isn’t just about a man turning into a bug — it’s about what happens when someone we love is no longer who they used to be, and how quickly our compassion fades.

    Interesting part is, the moment Gregor transforms into a bug, all he thinks about is not being late for work.

    In the end, it's less about a monstrous insect and more about the monstrous truth of conditional love in a transactional world.`,
    },

    {
        id: 3,
        title: "White Nights",
        author: "Fyodor Dostoevsky",
        rating: 8,
        genre: "Romantic Fiction / Classic",
        review: `All I can say about this book is that with the original book of 110 pages, 'Nastenka' was mentioned 138 times and how many times the name of the narrator was mentioned? Zero.`,
    },

    // Add more reviews
];
