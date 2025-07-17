import { BookReview } from '../data/bookReviews';

function Stars({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 10 - fullStars - halfStar;

    return (
        <div className="flex items-center mb-2">
            {[...Array(fullStars)].map((_, i) => (
                <span key={"full" + i} className="text-yellow-400 text-xl">★</span>
            ))}
            {halfStar === 1 && <span className="text-yellow-400 text-xl">★</span>}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={"empty" + i} className="text-gray-400 text-xl">☆</span>
            ))}
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">{rating} / 10</span>
        </div>
    );
}

export default function BookReviewItem({
    title,
    author,
    genre,
    review,
    rating,
}: BookReview) {
    return (
        <li className="bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow transition hover:scale-[1.01]">
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="italic text-gray-600 dark:text-gray-400 mb-1">by {author}</p>
            <p className="text-sm text-white dark:text-blue-black mb-2">{genre}</p>
            <Stars rating={rating} />
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{review}</p>
        </li>
    );
}
