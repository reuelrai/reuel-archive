export interface BookReview {
    id: number;
    title: string;
    author: string;
    review: string;
    rating: number;  // Rating scale: 1 to 10
}

export const bookReviews: BookReview[] = [

    {
        id: 1,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        rating: 10,
        review: `The Metamorphosis isn’t about a man turning into a bug — it’s about what happens when someone we love is no longer who they used to be, and how quickly our compassion fades. Gregor Samsa gave everything to his family. But the moment he couldn’t carry that weight anymore, they didn’t just lose patience — they stopped seeing him at all.

    - At first, there’s shock. But very quickly, Gregor becomes an embarrassment — someone to hide, not help.
    - His sister, once gentle and loving, begins to avoid him. His father grows violent. His mother helplessly withdraws.  
    - No one asks how he feels. No one wonders what it’s like to be trapped in a body that can no longer express love.  
    - His room becomes a storage space. His presence, a burden.  
    - And the saddest part? He still loves them. He still wants to protect them. Even when they’ve given up on him.  
    - Kafka doesn’t just show us Gregor’s pain — he shows us how easily we abandon those who can no longer serve a purpose.
    
    In the end, The Metamorphosis is less about a monstrous insect and more about the monstrous truth of conditional love in a transactional world.`,
    },
    {
        id: 3,
        title: "White Nights",
        author: "Fyodor Dostoevsky",
        rating: 9,
        review: `White Nights is a beautiful, bittersweet tale of loneliness and fleeting connection. The narrator, a dreamy and isolated wanderer, meets a mysterious woman one summer night, and their brief encounter changes both their lives forever.

        - The story captures the fragile hope that blossoms even in the darkest solitude.  
        - Dostoevsky’s prose delicately explores dreams, unspoken desires, and the aching human need for companionship.  
        - Though short, it leaves a lasting impression about how a single night can hold a lifetime of emotion.  
        - White Nights is a poignant reminder that sometimes, it’s our briefest connections that teach us the most about ourselves.`
    }



    // Add more reviews
];
