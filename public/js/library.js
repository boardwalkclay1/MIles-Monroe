const categories = [
    "Purpose", "Leadership", "Kingdom Living", "Relationships",
    "Vision", "Identity", "Discipline", "Faith", "Calling",
    "Destiny", "Character", "Wisdom", "Growth", "Spiritual Authority",
    "Potential", "Success", "Mindset", "Courage", "Influence", "Legacy"
];

const grid = document.getElementById("libraryGrid");

categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${cat}</strong><br><button class="btn small">Start Reading</button>`;
    grid.appendChild(div);
});
