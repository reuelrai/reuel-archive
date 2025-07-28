// src/app/burnout/page.tsx (SERVER COMPONENT)
import BurnoutClient from "./burnoutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Burnout | Reuel",
    description:
        "Unspoken feelings and emotional exhaustion in relationships — entries written raw and real by Reuel Rai.",
    keywords: [
        "burnout",
        "emotional burnout",
        "relationship fatigue",
        "Reuel Rai",
        "personal writing",
        "emotional diary",
        "unspoken truthss",
    ],
    openGraph: {
        title: "Burnout | Reuel",
        description:
            "A place for unspoken emotions and relationship burnout. Raw. Honest. Unfiltered.",
        url: "https://your-domain.com/burnout",
        siteName: "Reuel",
        type: "website",
    },
};

export default function BurnoutPage() {
    return <BurnoutClient />;
}
