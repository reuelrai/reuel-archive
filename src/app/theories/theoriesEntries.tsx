export interface Theory {
    title: string;
    category: string;
    description: string;
    source?: string;
}

export const theories: Theory[] = [
    {
        title: "Train Station Theory",
        category: "Life Philosophy",
        description:
            `Life is like a train station.
            People come and go.
            Some stay for a few stops,
            some ride with you for miles,
            some leave before you’re ready to say goodbye.

            But every person teaches you something,
            even if they’re not meant to stay forever.

            The key is knowing when to hold on,
            and when to let them catch their next train—
            because not everyone is on the same journey,
            and that’s okay.`,
        source: "Unknown",
    },
    {
        title: "Invisible String Theory",
        category: "Life Philosophy",
        description:
            `It is said the universe will keep two people apart
            until the timing is right.

            When they finally meet,
            there will be so many coincidences in the timing.

            But if one thing had fallen out of line,
            they would have never crossed paths.

            Yet the universe aligns—
            and they realize everything they went through before they met
            was just preparing their heart for each other.`,
        source: "Unknown",
    },

];
