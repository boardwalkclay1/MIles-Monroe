// =======================================================
// Jackie's Wisdom App — Quotes Engine (Expanded)
// Miles Munroe–style categories, filters, favorites, history
// =======================================================

const quoteCategories = ["Purpose", "Leadership", "Kingdom", "Identity", "Vision", "Relationships", "Calling", "Process"];

const quotes = {
    Purpose: [
        "You were born with purpose, not by accident.",
        "Purpose is the source of your fulfillment.",
        "When you discover your purpose, you discover yourself.",
        "The greatest tragedy in life is not death, but life without purpose.",
        "Purpose gives meaning to your pain and direction to your decisions.",
        "When purpose is unknown, abuse is inevitable.",
        "You are not here to copy anyone; you are here to complete an assignment.",
        "Purpose is the original intent in the mind of the Creator.",
        "Your purpose is the problem you were born to solve.",
        "Purpose turns ordinary days into strategic opportunities."
    ],
    Leadership: [
        "Leadership is influence, nothing more, nothing less.",
        "True leaders serve the people they lead.",
        "Leadership is not about titles; it is about impact.",
        "You cannot lead others until you can lead yourself.",
        "Leadership begins with self-discovery and self-discipline.",
        "Real leaders create environments where others can grow.",
        "Leadership is responsibility, not privilege.",
        "A leader’s character shapes the culture they create.",
        "Leadership is the ability to see farther and serve deeper.",
        "You are called to lead in some sphere of life."
    ],
    Kingdom: [
        "The Kingdom of God is a government, not a religion.",
        "Kingdom citizens think differently from the world.",
        "Your true home is the Kingdom, not a building.",
        "In the Kingdom, you are not a beggar; you are an ambassador.",
        "Kingdom culture is built on purpose, honor, and responsibility.",
        "The Kingdom has its own economy, values, and mindset.",
        "You are a citizen of a Kingdom bigger than any earthly system.",
        "Kingdom thinking turns problems into assignments.",
        "The Kingdom is not about rituals; it is about rulership under a King.",
        "Kingdom identity changes how you see yourself and your future."
    ],
    Identity: [
        "Knowing who you are protects you from who you are not.",
        "Identity determines how you respond to life.",
        "You are more than your past and more than your mistakes.",
        "Identity is discovered, not invented.",
        "When identity is unclear, confusion becomes normal.",
        "You are defined by your purpose, not by public opinion.",
        "A stable identity produces stable decisions.",
        "You do not need a title to know who you are.",
        "Identity is the anchor of your destiny.",
        "When you know who you are, you stop performing for acceptance."
    ],
    Vision: [
        "Vision is the ability to see beyond what is.",
        "Your future is hidden in your vision.",
        "Vision gives pain a purpose.",
        "Vision demands discipline and planning.",
        "Without vision, you drift; with vision, you direct.",
        "Vision turns obstacles into training grounds.",
        "A clear vision attracts the right people and resources.",
        "Vision is not fantasy; it is a picture of your purpose in motion.",
        "Vision keeps you moving when feelings fade.",
        "Your vision is a preview of your future assignment."
    ],
    Relationships: [
        "Healthy relationships require clarity and honesty.",
        "You attract what you are, not what you say you want.",
        "Love is a decision backed by commitment.",
        "Marriage is a covenant, not a contract.",
        "Purpose protects relationships from becoming distractions.",
        "Real friendship is built on truth, not convenience.",
        "You cannot build a strong relationship on a weak identity.",
        "Honor is the language of healthy relationships.",
        "Relationships flourish where purpose and respect are present.",
        "The right relationship will push you toward your destiny, not away from it."
    ],
    Calling: [
        "Your calling is where your gifts meet a real need.",
        "Calling is not always loud; sometimes it whispers through desire and burden.",
        "You are called to serve, not to impress.",
        "Calling is discovered in obedience, not in comfort.",
        "Your calling will stretch you beyond your preferences.",
        "When you walk in your calling, work becomes worship.",
        "Calling is the intersection of purpose, passion, and responsibility.",
        "You do not choose your calling; you respond to it.",
        "Your calling is bigger than your job description.",
        "Calling is the voice of purpose over time."
    ],
    Process: [
        "Process is the path between promise and fulfillment.",
        "You cannot skip process and keep character.",
        "Process exposes what you need to grow, not what you need to escape.",
        "Every season of process is training for future responsibility.",
        "Process is proof that God is preparing you, not punishing you.",
        "If you rush process, you delay maturity.",
        "Process turns potential into performance.",
        "Your process is personal; do not compare it to others.",
        "Process teaches you to trust timing, not just desire.",
        "Embrace process; it is the workshop of destiny."
    ]
};

const quoteFilter = document.getElementById("quoteFilter");
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuoteBtn");

let lastQuote = null;
let lastCategory = null;

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("jackieFavorites") || "[]");
    } catch (e) {
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
    copyBtn.onclick = () => navigator.clipboard && navigator.clipboard.writeText(text);
    actions.appendChild(saveBtn);
    actions.appendChild(copyBtn);
    quoteDisplay.appendChild(quoteText);
    quoteDisplay.appendChild(meta);
    quoteDisplay.appendChild(actions);
}

function loadQuote() {
    const cat = quoteFilter.value;
    const arr = quotes[cat];
    if (!arr || arr.length === 0) {
        quoteDisplay.innerText = "No quotes available for this category.";
        return;
    }
    let q = arr[Math.floor(Math.random() * arr.length)];
    if (arr.length > 1 && q === lastQuote && cat === lastCategory) {
        q = arr[(arr.indexOf(q) + 1) % arr.length];
    }
    lastQuote = q;
    lastCategory = cat;
    renderQuote(q, cat);
}

function initFilter() {
    quoteFilter.innerHTML = "";
    quoteCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.innerText = cat;
        quoteFilter.appendChild(opt);
    });
}

function initEvents() {
    quoteFilter.addEventListener("change", loadQuote);
    newQuoteBtn.addEventListener("click", loadQuote);
}

if (quoteFilter && quoteDisplay && newQuoteBtn) {
    initFilter();
    initEvents();
    loadQuote();
}
