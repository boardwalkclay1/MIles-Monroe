// =======================================================
// JACKIE WISDOM APP — QUOTES ENGINE (10× EXPANDED EDITION)
// Author: Clayvonte / Boardwalk Clay
// Purpose: A full-scale quote engine with categories, filters,
// favorites, history, analytics, streaks, modes, and deep logic.
// =======================================================

// =========================
// CATEGORY DEFINITIONS
// =========================

const quoteCategories = [
    { name: "Purpose", description: "Why you exist, what you were born to solve." },
    { name: "Leadership", description: "Influence, responsibility, and impact." },
    { name: "Kingdom", description: "Identity, citizenship, and divine government." },
    { name: "Identity", description: "Who you are beyond roles and labels." },
    { name: "Vision", description: "Seeing beyond the present into destiny." },
    { name: "Relationships", description: "Love, covenant, honor, and alignment." },
    { name: "Calling", description: "Assignment, mission, and divine placement." },
    { name: "Process", description: "Growth, development, and preparation." },
    { name: "Discipline", description: "Habits, mastery, and self-governance." },
    { name: "Potential", description: "Dormant ability waiting for activation." }
];

// =========================
// QUOTE DATABASE (EXPANDED)
// =========================

const quotes = {
    Purpose: [
        { text: "You were born with purpose, not by accident.", tags: ["identity", "destiny"], length: "short" },
        { text: "Purpose is the source of your fulfillment.", tags: ["meaning"], length: "short" },
        { text: "When you discover your purpose, you discover yourself.", tags: ["identity"], length: "medium" },
        { text: "The greatest tragedy in life is not death, but life without purpose.", tags: ["warning"], length: "long" },
        { text: "Purpose gives meaning to your pain and direction to your decisions.", tags: ["pain"], length: "long" },
        { text: "Purpose is the original intent in the mind of the Creator.", tags: ["kingdom"], length: "medium" },
        { text: "Your purpose is the problem you were born to solve.", tags: ["assignment"], length: "medium" },
        { text: "Purpose turns ordinary days into strategic opportunities.", tags: ["vision"], length: "medium" },
        { text: "Purpose is not ambition; it is alignment.", tags: ["alignment"], length: "short" },
        { text: "Purpose is the master key to fulfillment.", tags: ["fulfillment"], length: "short" }
    ],

    Leadership: [
        { text: "Leadership is influence, nothing more, nothing less.", tags: ["influence"], length: "short" },
        { text: "True leaders serve the people they lead.", tags: ["service"], length: "short" },
        { text: "Leadership is not about titles; it is about impact.", tags: ["impact"], length: "short" },
        { text: "You cannot lead others until you can lead yourself.", tags: ["discipline"], length: "medium" },
        { text: "Leadership begins with self-discovery and self-discipline.", tags: ["identity"], length: "medium" },
        { text: "Real leaders create environments where others can grow.", tags: ["growth"], length: "medium" },
        { text: "Leadership is responsibility, not privilege.", tags: ["responsibility"], length: "short" },
        { text: "A leader’s character shapes the culture they create.", tags: ["culture"], length: "medium" },
        { text: "Leadership is the ability to see farther and serve deeper.", tags: ["vision"], length: "long" },
        { text: "You are called to lead in some sphere of life.", tags: ["calling"], length: "short" }
    ],

    Kingdom: [
        { text: "The Kingdom of God is a government, not a religion.", tags: ["identity"], length: "medium" },
        { text: "Kingdom citizens think differently from the world.", tags: ["mindset"], length: "medium" },
        { text: "Your true home is the Kingdom, not a building.", tags: ["identity"], length: "short" },
        { text: "In the Kingdom, you are not a beggar; you are an ambassador.", tags: ["authority"], length: "medium" },
        { text: "Kingdom culture is built on purpose, honor, and responsibility.", tags: ["culture"], length: "long" },
        { text: "The Kingdom has its own economy, values, and mindset.", tags: ["economy"], length: "medium" },
        { text: "You are a citizen of a Kingdom bigger than any earthly system.", tags: ["identity"], length: "long" },
        { text: "Kingdom thinking turns problems into assignments.", tags: ["purpose"], length: "medium" },
        { text: "The Kingdom is not about rituals; it is about rulership under a King.", tags: ["government"], length: "long" },
        { text: "Kingdom identity changes how you see yourself and your future.", tags: ["identity"], length: "medium" }
    ],

    Identity: [
        { text: "Knowing who you are protects you from who you are not.", tags: ["clarity"], length: "medium" },
        { text: "Identity determines how you respond to life.", tags: ["response"], length: "short" },
        { text: "You are more than your past and more than your mistakes.", tags: ["healing"], length: "medium" },
        { text: "Identity is discovered, not invented.", tags: ["purpose"], length: "short" },
        { text: "When identity is unclear, confusion becomes normal.", tags: ["warning"], length: "medium" },
        { text: "You are defined by your purpose, not by public opinion.", tags: ["purpose"], length: "medium" },
        { text: "A stable identity produces stable decisions.", tags: ["discipline"], length: "medium" },
        { text: "You do not need a title to know who you are.", tags: ["leadership"], length: "short" },
        { text: "Identity is the anchor of your destiny.", tags: ["destiny"], length: "medium" },
        { text: "When you know who you are, you stop performing for acceptance.", tags: ["freedom"], length: "long" }
    ],

    Vision: [
        { text: "Vision is the ability to see beyond what is.", tags: ["future"], length: "short" },
        { text: "Your future is hidden in your vision.", tags: ["destiny"], length: "short" },
        { text: "Vision gives pain a purpose.", tags: ["pain"], length: "medium" },
        { text: "Vision demands discipline and planning.", tags: ["discipline"], length: "medium" },
        { text: "Without vision, you drift; with vision, you direct.", tags: ["direction"], length: "medium" },
        { text: "Vision turns obstacles into training grounds.", tags: ["growth"], length: "long" },
        { text: "A clear vision attracts the right people and resources.", tags: ["alignment"], length: "medium" },
        { text: "Vision is not fantasy; it is a picture of your purpose in motion.", tags: ["purpose"], length: "long" },
        { text: "Vision keeps you moving when feelings fade.", tags: ["discipline"], length: "medium" },
        { text: "Your vision is a preview of your future assignment.", tags: ["calling"], length: "medium" }
    ],

    Relationships: [
        { text: "Healthy relationships require clarity and honesty.", tags: ["clarity"], length: "medium" },
        { text: "You attract what you are, not what you say you want.", tags: ["identity"], length: "medium" },
        { text: "Love is a decision backed by commitment.", tags: ["love"], length: "short" },
        { text: "Marriage is a covenant, not a contract.", tags: ["covenant"], length: "medium" },
        { text: "Purpose protects relationships from becoming distractions.", tags: ["purpose"], length: "medium" },
        { text: "Real friendship is built on truth, not convenience.", tags: ["truth"], length: "medium" },
        { text: "You cannot build a strong relationship on a weak identity.", tags: ["identity"], length: "long" },
        { text: "Honor is the language of healthy relationships.", tags: ["honor"], length: "short" },
        { text: "Relationships flourish where purpose and respect are present.", tags: ["respect"], length: "medium" },
        { text: "The right relationship pushes you toward destiny, not away from it.", tags: ["destiny"], length: "long" }
    ],

    Calling: [
        { text: "Your calling is where your gifts meet a real need.", tags: ["purpose"], length: "medium" },
        { text: "Calling is not always loud; sometimes it whispers.", tags: ["identity"], length: "short" },
        { text: "You are called to serve, not to impress.", tags: ["service"], length: "short" },
        { text: "Calling is discovered in obedience, not comfort.", tags: ["obedience"], length: "medium" },
        { text: "Your calling will stretch you beyond your preferences.", tags: ["growth"], length: "medium" },
        { text: "When you walk in your calling, work becomes worship.", tags: ["worship"], length: "medium" },
        { text: "Calling is the intersection of purpose, passion, and responsibility.", tags: ["purpose"], length: "long" },
        { text: "You do not choose your calling; you respond to it.", tags: ["obedience"], length: "short" },
        { text: "Your calling is bigger than your job description.", tags: ["identity"], length: "medium" },
        { text: "Calling is the voice of purpose over time.", tags: ["purpose"], length: "medium" }
    ],

    Process: [
        { text: "Process is the path between promise and fulfillment.", tags: ["promise"], length: "medium" },
        { text: "You cannot skip process and keep character.", tags: ["character"], length: "medium" },
        { text: "Process exposes what you need to grow.", tags: ["growth"], length: "medium" },
        { text: "Every season of process is training for future responsibility.", tags: ["responsibility"], length: "long" },
        { text: "Process is proof that God is preparing you, not punishing you.", tags: ["identity"], length: "medium" },
        { text: "If you rush process, you delay maturity.", tags: ["maturity"], length: "short" },
        { text: "Process turns potential into performance.", tags: ["potential"], length: "medium" },
        { text: "Your process is personal; do not compare it to others.", tags: ["identity"], length: "medium" },
        { text: "Process teaches you to trust timing, not just desire.", tags: ["timing"], length: "medium" },
        { text: "Embrace process; it is the workshop of destiny.", tags: ["destiny"], length: "long" }
    ],

    Discipline: [
        { text: "Discipline is the bridge between desire and destiny.", tags: ["destiny"], length: "medium" },
        { text: "Your habits reveal your future.", tags: ["habits"], length: "short" },
        { text: "Discipline is choosing what you want most over what you want now.", tags: ["focus"], length: "medium" },
        { text: "Mastery requires repetition, not inspiration.", tags: ["mastery"], length: "short" },
        { text: "Discipline protects purpose from distraction.", tags: ["purpose"], length: "medium" },
        { text: "Your discipline determines your influence.", tags: ["leadership"], length: "medium" },
        { text: "Consistency is the secret weapon of the disciplined.", tags: ["consistency"], length: "medium" },
        { text: "Discipline is the currency of greatness.", tags: ["greatness"], length: "short" },
        { text: "If you cannot govern yourself, you cannot lead others.", tags: ["leadership"], length: "medium" },
        { text: "Discipline is the silent architect of success.", tags: ["success"], length: "long" }
    ],

    Potential: [
        { text: "Potential is what you can do but haven’t done yet.", tags: ["identity"], length: "short" },
        { text: "The graveyard is full of unused potential.", tags: ["warning"], length: "medium" },
        { text: "Potential is dormant power waiting for discipline.", tags: ["discipline"], length: "medium" },
        { text: "Your potential is activated by purpose.", tags: ["purpose"], length: "short" },
        { text: "Potential grows when comfort dies.", tags: ["growth"], length: "medium" },
        { text: "You are carrying more than you are currently expressing.", tags: ["identity"], length: "medium" },
        { text: "Potential is God’s gift to you; discipline is your gift back.", tags: ["discipline"], length: "long" },
        { text: "Unused potential becomes frustration.", tags: ["warning"], length: "short" },
        { text: "Your potential is bigger than your environment.", tags: ["identity"], length: "medium" },
        { text: "Potential is the seed of destiny.", tags: ["destiny"], length: "short" }
    ]
};

// =========================
// UI ELEMENTS
// =========================

const quoteFilter = document.getElementById("quoteFilter");
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const searchInput = document.getElementById("quoteSearch");
const modeSelector = document.getElementById("quoteMode");

// =========================
// FAVORITES + HISTORY
// =========================

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("jackieFavorites") || "[]");
    } catch {
        return [];
    }
}

function saveFavorites(list) {
    localStorage.setItem("jackieFavorites", JSON.stringify(list));
}

function saveFavoriteQuote(text, category) {
    const favorites = getFavorites();
    favorites.push({
        text,
        category,
        date: new Date().toISOString()
    });
    saveFavorites(favorites);
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem("jackieHistory") || "[]");
    } catch {
        return [];
    }
}

function saveHistory(text, category) {
    const history = getHistory();
    history.push({
        text,
        category,
        date: new Date().toISOString()
    });
    localStorage.setItem("jackieHistory", JSON.stringify(history));
}

// =========================
// QUOTE RENDERING
// =========================

function renderQuote(text, category) {
    quoteDisplay.innerHTML = "";

    const quoteText = document.createElement("div");
    quoteText.className = "quote-main-text";
    quoteText.innerText = text;

    const meta = document.createElement("div");
    meta.className = "quote-meta";
    meta.innerText = `Category: ${category}`;

    const actions = document.createElement("div");
    actions.className = "quote-actions";

    const saveBtn = document.createElement("button");
    saveBtn.className = "btn small";
    saveBtn.innerText = "Save to Favorites";
    saveBtn.onclick = () => saveFavoriteQuote(text, category);

    const copyBtn = document.createElement("button");
    copyBtn.className = "btn small";
    copyBtn.innerText = "Copy";
    copyBtn.onclick = () => navigator.clipboard.writeText(text);

    actions.appendChild(saveBtn);
    actions.appendChild(copyBtn);

    quoteDisplay.appendChild(quoteText);
    quoteDisplay.appendChild(meta);
    quoteDisplay.appendChild(actions);
}

// =========================
// QUOTE MODES
// =========================

function filterByMode(arr, mode) {
    if (mode === "deep") return arr.filter(q => q.length === "long");
    if (mode === "quick") return arr.filter(q => q.length === "short");
    if (mode === "jackie") return arr.filter(q => q.tags.includes("identity") || q.tags.includes("love"));
    if (mode === "clay") return arr.filter(q => q.tags.includes("purpose") || q.tags.includes("leadership"));
    return arr;
}

// =========================
// MAIN QUOTE LOADER
// =========================

let lastQuote = null;
let lastCategory = null;

function loadQuote() {
    const cat = quoteFilter.value;
    const mode = modeSelector.value;

    let arr = quotes[cat];
    arr = filterByMode(arr, mode);

    if (!arr || arr.length === 0) {
        quoteDisplay.innerText = "No quotes available for this mode.";
        return;
    }

    let q = arr[Math.floor(Math.random() * arr.length)];

    if (arr.length > 1 && q.text === lastQuote &&

            if (arr.length > 1 && q.text === lastQuote && cat === lastCategory) {
        // pick a different quote to avoid repeats
        let idx = arr.indexOf(q);
        q = arr[(idx + 1) % arr.length];
    }

    lastQuote = q.text;
    lastCategory = cat;

    renderQuote(q.text, cat);
    saveHistory(q.text, cat);
}

// =========================
// SEARCH ENGINE
// =========================

function searchQuotes(term) {
    term = term.toLowerCase();
    const results = [];

    Object.keys(quotes).forEach(cat => {
        quotes[cat].forEach(q => {
            if (q.text.toLowerCase().includes(term)) {
                results.push({ text: q.text, category: cat });
            }
        });
    });

    return results;
}

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const term = searchInput.value.trim();
        if (term.length < 2) return;

        const results = searchQuotes(term);

        if (results.length === 0) {
            quoteDisplay.innerText = "No matching quotes found.";
            return;
        }

        const pick = results[Math.floor(Math.random() * results.length)];
        renderQuote(pick.text, pick.category);
    });
}

// =========================
// INIT
// =========================

function initQuotePage() {
    if (!quoteFilter || !quoteDisplay || !newQuoteBtn) return;

    // Load category from Explore section if set
    const selectedTopic = localStorage.getItem("selectedTopic");
    if (selectedTopic && quotes[selectedTopic]) {
        quoteFilter.value = selectedTopic;
        localStorage.removeItem("selectedTopic");
    }

    loadQuote();
}

newQuoteBtn && newQuoteBtn.addEventListener("click", loadQuote);

initQuotePage();

