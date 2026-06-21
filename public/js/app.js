const featuredQuotes = [
    "Purpose is the master of motivation.",
    "Leadership determines destiny.",
    "Vision is the key to your future.",
    "You were born to solve a problem."
];

const spotlight = [
    "Today, focus on the strength already inside you.",
    "Your purpose is calling louder today.",
    "Walk boldly in your identity.",
    "Your vision deserves action today."
];

const topPicks = [
    "Understanding Your Purpose",
    "The Power of Vision",
    "Kingdom Principles",
    "The Spirit of Leadership"
];

document.getElementById("featuredQuote").innerText =
    featuredQuotes[Math.floor(Math.random() * featuredQuotes.length)];

document.getElementById("spotlightText").innerText =
    spotlight[Math.floor(Math.random() * spotlight.length)];

const list = document.getElementById("topPicksList");
topPicks.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});
