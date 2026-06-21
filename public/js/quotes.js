const quoteCategories = ["Purpose", "Leadership", "Kingdom", "Identity", "Vision", "Relationships"];

const quotes = {
    Purpose: [
        "You were born with purpose, not by accident.",
        "Purpose is the source of your fulfillment.",
        "When you discover your purpose, you discover yourself."
    ],
    Leadership: [
        "Leadership is influence, nothing more, nothing less.",
        "True leaders serve the people they lead.",
        "Leadership is not about titles; it is about impact."
    ],
    Kingdom: [
        "The Kingdom of God is a government, not a religion.",
        "Kingdom citizens think differently from the world.",
        "Your true home is the Kingdom, not a building."
    ],
    Identity: [
        "Knowing who you are protects you from who you are not.",
        "Identity determines how you respond to life.",
        "You are more than your past and more than your mistakes."
    ],
    Vision: [
        "Vision is the ability to see beyond what is.",
        "Your future is hidden in your vision.",
        "Vision gives pain a purpose."
    ],
    Relationships: [
        "Healthy relationships require clarity and honesty.",
        "You attract what you are, not what you say you want.",
        "Love is a decision backed by commitment."
    ]
};

const quoteFilter = document.getElementById("quoteFilter");
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// Simple favorites using localStorage
function saveFavoriteQuote(text) {
    const existing = JSON.parse(localStorage.getItem("jackieFavorites") || "[]");
    existing.push({ text, date: new Date().toISOString() });
    localStorage.setItem("jackieFavorites", JSON.stringify(existing));
}

function loadQuote() {
    const cat = quoteFilter.value;
    const arr = quotes[cat];
    const q = arr[Math.floor(Math.random() * arr.length)];
    quoteDisplay.innerText = q;

    // Add a small "Save" button dynamically
    const saveBtn = document.createElement("button");
    saveBtn.className = "btn small";
    saveBtn.innerText = "Save to Favorites";
    saveBtn.onclick = () => saveFavoriteQuote(q);

    // Clear previous button and append
    quoteDisplay.appendChild(document.createElement("br"));
    quoteDisplay.appendChild(saveBtn);
}

if (quoteFilter && quoteDisplay && newQuoteBtn) {
    quoteCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.innerText = cat;
        quoteFilter.appendChild(opt);
    });

    quoteFilter.addEventListener("change", loadQuote);
    newQuoteBtn.addEventListener("click", loadQuote);

    loadQuote();
}
