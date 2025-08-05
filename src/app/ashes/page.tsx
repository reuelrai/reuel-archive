// src/app/inknashes/page.tsx

import { Metadata } from "next";
import InkNashesClient from "./ashesClient";

export const metadata: Metadata = {
    title: "Ink and Ashes | Reuel",
    description:
        "Ink and Ashes: a collection of heartfelt writings about love, heartbreak, healing, and unspoken emotions.",
    keywords: ["Ink and Ashes", "emotional writing", "heartbreak", "love", "poetry"],
    openGraph: {
        title: "Ink and Ashes — Emotional Writing",
        description:
            "Ink and Ashes: a collection of heartfelt writings about love, heartbreak, healing, and unspoken emotions.",
    },
};

export default function Page() {
    return <InkNashesClient />;
}
