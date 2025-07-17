import Head from "next/head";
import { bookReviews } from "./data/bookReviews";
import BookReviewItem from "./components/BookReviewItem";

export default function BookReview() {
    return (
        <>
            <Head>
                <title>Book Reviews by Your Name</title>
                <meta
                    name="description"
                    content="Honest and thoughtful book reviews of popular and classic books."
                />
                <meta name="keywords" content="book reviews, reading, books, personal reviews" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="Book Reviews by Your Name" />
                <meta
                    property="og:description"
                    content="Honest and thoughtful book reviews of popular and classic books."
                />
            </Head>

            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center mt-6 ">Here I review the books I have read</h1>
                <ul className="space-y-8">
                    {bookReviews.map((review) => (
                        <BookReviewItem key={review.id} {...review} />
                    ))}
                </ul>
            </main>
        </>
    );
}
