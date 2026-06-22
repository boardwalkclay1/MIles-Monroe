// =======================================================
// JACKIE WISDOM APP — HOME PAGE ENGINE (UPGRADED EDITION)
// Author: Clayvonte / Boardwalk Clay
// Purpose: Cinematic, dynamic, personalized homepage logic
// =======================================================

// =========================
// FEATURED QUOTES (EXPANDED)
// =========================

const featuredQuotes = [
    { text: "Purpose is the master of motivation and the mother of commitment.", length: "long", weight: 3 },
    { text: "Leadership determines the destiny of nations and organizations.", length: "medium", weight: 2 },
    { text: "Vision is the key to unlocking your future.", length: "short", weight: 1 },
    { text: "You were born to solve a specific problem on earth.", length: "medium", weight: 3 },
    { text: "When the purpose of a thing is not known, abuse is inevitable.", length: "long", weight: 4 },
    { text: "True success is the fulfillment of purpose.", length: "short", weight: 2 },
    { text: "Your potential is the sum of all the abilities God placed inside you.", length: "medium", weight: 3 },
    { text: "You are not a mistake; you are a deliberate idea in the mind of God.", length: "medium", weight: 5 }
];

// =========================
// SPOTLIGHT ENGINE (UPGRADED)
// =========================

const spotlightMessages = {
    morning: [
        "Jackie, your morning is a blank page—write something bold today.",
        "Your purpose woke up with you; walk in it.",
        "Your mind is sharpest in the morning—feed it something powerful."
    ],
    afternoon: [
        "Jackie, your consistency today is building a future you’ll thank yourself for.",
        "Your energy is a signal—follow what feels aligned.",
        "You’re doing better than you think; keep going."
    ],
    evening: [
        "Jackie, your reflection tonight is part of your growth.",
        "You didn’t survive today—you conquered it.",
        "Your rest is holy; tomorrow needs your strength."
    ],
    personal: [
        "Your reading, your curiosity, your hunger for wisdom are proof of your calling.",
        "You carry influence even when you don’t notice it—someone is watching your courage.",
        "Every page you read is another step into the future you’re building.",
        "You are allowed to take up space, to lead, to speak, and to shine.",
        "Your story is still being written—tonight is a powerful paragraph.",
        "You are not behind; you are right on time for your own journey."
    ]
};

// =========================
// TOP PICKS (UPGRADED)
// =========================

const topPicks = [
    { title: "Understanding Your Purpose", tag: "Purpose", reason: "Foundational for identity" },
    { title: "The Power of Vision", tag: "Vision", reason: "Helps clarify direction" },
    { title: "Kingdom Principles", tag: "Kingdom", reason: "Core Kingdom worldview" },
    { title: "The Spirit of Leadership", tag: "Leadership", reason: "Leadership identity" },
    { title: "Rediscovering the Kingdom", tag: "Kingdom", reason: "Miles’ signature revelation" },
    { title: "The Burden of Freedom", tag: "Identity", reason: "Understanding responsibility" },
    { title: "The Principles and Power of Vision", tag: "Vision", reason: "Vision mastery" },
    { title: "In Pursuit of Purpose", tag: "Purpose", reason: "Purpose discovery journey" }
];

// =========================
// EXTERNAL RESOURCES (UPGRADED)
// =========================

const externalResources = [
    {
        title: "Miles Munroe - Rediscovering the Kingdom (Teaching Series)",
        type: "Video",
        category: "Kingdom",
        url: "https://www.youtube.com/results?search_query=miles+munroe+rediscovering+the+kingdom"
    },
    {
        title: "Miles Munroe - Purpose and Potential",
        type: "Video",
        category: "Purpose",
        url: "https://www.youtube.com/results?search_query=miles+munroe+purpose+and+potential"
    },
    {
        title: "Miles Munroe - Leadership Messages",
        type: "Video",
        category: "Leadership",
        url: "https://www.youtube.com/results?search_query=miles+munroe+leadership"
    },
    {
        title: "Miles Munroe Quotes Collection",
        type: "Article",
        category: "General",
        url: "https://www.google.com/search?q=miles+munroe+quotes"
    }
];

// =========================
// DOM ELEMENTS
// =========================

const featuredQuoteEl = document.getElementById("featuredQuote");
const spotlightEl = document.getElementById("spotlightText");
const topPicksList = document.getElementById("topPicksList");

// =========================
// FEATURED QUOTE ENGINE
// =========================

function weightedRandomQuote() {
    const pool = [];

    featuredQuotes.forEach(q => {
        for (let i = 0; i < q.weight; i++) {
            pool.push(q);
        }
    });

    return pool[Math.floor(Math.random() * pool.length)].text;
}

function loadFeaturedQuote() {
    if (!featuredQuoteEl) return;
    featuredQuoteEl.innerText = weightedRandomQuote();
}

// =========================
// SPOTLIGHT ENGINE
// =========================

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
}

function loadSpotlight() {
    if (!spotlightEl) return;

    const timeKey = getTimeOfDay();
    const timeSet = spotlightMessages[timeKey];
    const personalSet = spotlightMessages.personal;

    const combined = [...timeSet, ...personalSet];
    spotlightEl.innerText = combined[Math.floor(Math.random() * combined.length)];
}

// =========================
// TOP PICKS ENGINE
// =========================

function loadTopPicks() {
    if (!topPicksList) return;

    topPicksList.innerHTML = "";

    topPicks.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.title}</strong>
            <span class="tag">${item.tag}</span>
            <p class="reason">${item.reason}</p>
        `;
        topPicksList.appendChild(li);
    });
}

// =========================
// INITIAL LOAD
// =========================

loadFeaturedQuote();
loadSpotlight();
loadTopPicks();

// Debugging / Dev Tools
console.log("External resources loaded:", externalResources);
