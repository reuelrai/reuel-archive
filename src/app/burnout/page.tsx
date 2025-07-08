import { Metadata } from "next";
import { burnoutEntries } from "./burnoutEntries";

export const metadata: Metadata = {
    title: "Burnout | Reuel Writes",
    description:
        "Unspoken feelings and emotional exhaustion in relationships — entries written raw and real by Reuel Rai.",
    keywords: [
        "burnout",
        "emotional burnout",
        "relationship fatigue",
        "Reuel Rai",
        "personal writing",
        "emotional diary",
        "unspoken truths",
    ],
    openGraph: {
        title: "Burnout | Reuel Writes",
        description:
            "A place for unspoken emotions and relationship burnout. Raw. Honest. Unfiltered.",
        url: "https://your-domain.com/burnout", // Replace with your actual domain
        siteName: "Reuel Writes",
        type: "website",
    },
};

export default function BurnoutPage() {
    return (
        <main className="min-h-screen bg-[#1d1d1d] text-white px-6 py-12 font-serif">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                    burnout.
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    These aren't love poems. These are post-battle scars.
                </p>

                <div className="space-y-8">
                    {burnoutEntries.map((entry) => (
                        <div key={entry.id} className="border-l-4 border-red-500 pl-4">
                            <p className=" text-gray-200">{entry.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
