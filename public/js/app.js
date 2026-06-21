// High-impact featured quotes for the home page
const featuredQuotes = [
    "Purpose is the master of motivation and the mother of commitment.",
    "Leadership determines the destiny of nations and organizations.",
    "Vision is the key to unlocking your future.",
    "You were born to solve a specific problem on earth.",
    "When the purpose of a thing is not known, abuse is inevitable.",
    "True success is the fulfillment of purpose.",
    "Your potential is the sum of all the abilities God placed inside you.",
    "You are not a mistake; you are a deliberate idea in the mind of God."
];

// Spotlight messages just for Jackie
const spotlight = [
    "Jackie, today lean into the quiet voice of purpose—it’s already guiding you.",
    "Your reading, your curiosity, your hunger for wisdom are proof of your calling.",
    "You carry influence even when you don’t notice it—someone is watching your courage.",
    "Your love for learning is a gift; it will keep opening doors you didn’t know existed.",
    "Every page you read is another step into the future you’re building.",
    "You are allowed to take up space, to lead, to speak, and to shine.",
    "Your story is still being written—today is a powerful paragraph.",
    "You are not behind; you are right on time for your own journey."
];

// Top picks for Jackie to explore
const topPicks = [
    "Understanding Your Purpose",
    "The Power of Vision",
    "Kingdom Principles",
    "The Spirit of Leadership",
    "Rediscovering the Kingdom",
    "The Burden of Freedom",
    "The Principles and Power of Vision",
    "In Pursuit of Purpose"
];

// External resource links (YouTube, articles, etc.)
const externalResources = [
    {
        title: "Miles Munroe - Rediscovering the Kingdom (Teaching Series)",
        type: "Video",
        url: "https://www.youtube.com/results?search_query=miles+munroe+rediscovering+the+kingdom"
    },
    {
        title: "Miles Munroe - Purpose and Potential",
        type: "Video",
        url: "https://www.youtube.com/results?search_query=miles+munroe+purpose+and+potential"
    },
    {
        title: "Miles Munroe - Leadership Messages",
        type: "Video",
        url: "https://www.youtube.com/results?search_query=miles+munroe+leadership"
    },
    {
        title: "Miles Munroe Quotes Collection",
        type: "Article",
        url: "https://www.google.com/search?q=miles+munroe+quotes"
    }
];

const featuredQuoteEl = document.getElementById("featuredQuote");
const spotlightEl = document.getElementById("spotlightText");
const topPicksList = document.getElementById("topPicksList");

// Load featured quote
if (featuredQuoteEl) {
    featuredQuoteEl.innerText =
        featuredQuotes[Math.floor(Math.random() * featuredQuotes.length)];
}

// Load spotlight
if (spotlightEl) {
    spotlightEl.innerText =
        spotlight[Math.floor(Math.random() * spotlight.length)];
}

// Load top picks
if (topPicksList) {
    topPicks.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        topPicksList.appendChild(li);
    });
}

// Optional: log resources to console so you can wire them later
console.log("External resources for Jackie:", externalResources);
