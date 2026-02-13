// Love Website Configuration
// Customize this file to personalize your love website

const CONFIG = {
    // Partner's name (will be used throughout the website)
    partnerName: "My Sweet Cup of Tea",
    
    // Your name (optional, for signature)
    yourName: "Kayie",
    
    // Custom messages
    messages: {
        subtitle: "you light up my world in ways words can't express ✨",
        loveNote: "you are the reason I make hay while the sun shines. Every moment with you feels like magic, and I fall in love with you more each day. You're my best friend, my soulmate, and my everything. I love you more than words can describe.",
        specialMessage: "I've heard this should be rhetoric but godforbid I take anything for granted with you, my love.",
        specialMessage2: "I've got one question. Just one that I'll keep asking till we're old and brittle. I bet your pretty ass can guess it.",
        signature: "Will you be my valentine? 💕"
    },
    
    // Memory descriptions
    memories: {
        lateNight: "Those late night walks are some of the most enjoyable snippets of my life because I did them with you",
        firstMeeting: "I remember how magical it felt when I saw you walked through that door, dec 22, 2021.",
        care: "Your caring nature, your tough, yet sweet voice, and adorable cuteness"
    },
    
    // Character descriptions
    characters: {
        partner: "My beautiful angel",
        you: "Forever yours"
    },

    // Optional profile photos for the two top cards
    // Put files in /public/images/ and set paths like "/images/your-file.jpg"
    images: {
        partner: "/images/my-sweet-cup-of-tea.jpg",
        you: "/images/kayie.jpg"
    },
    
    // Special messages for different kiss counts
    kissMessages: {
        10: "10 kisses! You're so sweet! 💕",
        50: "50 kisses! I'm falling deeper in love! 💖",
        100: "100 kisses! You're my everything! 💘"
    },
    
    // Character interaction messages
    characterMessages: {
        partner: "you're the most beautiful person in the world! 💕",
        you: "I'm so lucky to have you in my life! 💖"
    },
    
    // Memory effect messages
    memoryMessages: {
        lateNight: "Those late night walks are some of the most enjoyable snippets of my life because I did them with you",
        firstMeeting: "I remember how magical it felt when I saw you walked through that door, dec 22, 2021.",
        care: "Your caring nature, your tough, yet sweet voice, and adorable cuteness"
    }
};

// Make config available globally
window.CONFIG = CONFIG;
