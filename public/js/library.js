// Rich category objects for Miles Munroe’s teachings
const libraryCategories = [
    {
        name: "Purpose",
        description: "Discover why you were created and what problem you were born to solve.",
        keyIdeas: [
            "Purpose precedes creation.",
            "Purpose is the source of fulfillment.",
            "You are designed for a specific assignment."
        ],
        suggestedBooks: [
            "In Pursuit of Purpose",
            "Understanding Your Potential"
        ]
    },
    {
        name: "Leadership",
        description: "Learn how leadership is influence and how to lead from your true identity.",
        keyIdeas: [
            "Leadership is not a position but a disposition.",
            "True leaders serve first.",
            "Leadership shapes culture and destiny."
        ],
        suggestedBooks: [
            "The Spirit of Leadership",
            "Becoming a Leader"
        ]
    },
    {
        name: "Kingdom Living",
        description: "Explore the concept of God’s Kingdom and how it changes your view of life.",
        keyIdeas: [
            "The Kingdom is a government, not a religion.",
            "Kingdom citizens think differently.",
            "Your identity is rooted in Kingdom citizenship."
        ],
        suggestedBooks: [
            "Rediscovering the Kingdom",
            "Kingdom Principles"
        ]
    },
    {
        name: "Relationships",
        description: "Wisdom for friendships, marriage, and covenant relationships.",
        keyIdeas: [
            "Healthy relationships require clarity of purpose.",
            "Marriage is a covenant, not a contract.",
            "You attract what you are, not what you want."
        ],
        suggestedBooks: [
            "The Purpose and Power of Love & Marriage",
            "The Purpose and Power of Woman"
        ]
    },
    {
        name: "Vision",
        description: "Understand how vision gives direction and discipline to your life.",
        keyIdeas: [
            "Vision is seeing beyond the present.",
            "Vision demands planning and discipline.",
            "Your future is hidden in your vision."
        ],
        suggestedBooks: [
            "The Principles and Power of Vision"
        ]
    },
    {
        name: "Identity",
        description: "Know who you are beyond titles, roles, and expectations.",
        keyIdeas: [
            "Identity is discovered, not invented.",
            "You are more than your job or status.",
            "Identity stabilizes your decisions."
        ],
        suggestedBooks: [
            "The Purpose and Power of Men",
            "The Purpose and Power of Woman"
        ]
    },
    {
        name: "Potential",
        description: "Unlock the abilities and gifts placed inside you.",
        keyIdeas: [
            "Potential is what you can do but haven’t done yet.",
            "Unused potential creates frustration.",
            "God hides potential in your spirit."
        ],
        suggestedBooks: [
            "Understanding Your Potential"
        ]
    },
    {
        name: "Spiritual Authority",
        description: "Learn how to walk in authority without arrogance.",
        keyIdeas: [
            "Authority comes from assignment.",
            "Humility protects authority.",
            "Spiritual authority is for service, not control."
        ],
        suggestedBooks: [
            "Kingdom Principles"
        ]
    }
];

const libraryGrid = document.getElementById("libraryGrid");

if (libraryGrid) {
    libraryGrid.innerHTML = "";
    libraryCategories.forEach(cat => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <strong>${cat.name}</strong><br>
            <p>${cat.description}</p>
            <ul>
                ${cat.keyIdeas.map(i => `<li>${i}</li>`).join("")}
            </ul>
            <p><em>Suggested reading:</em> ${cat.suggestedBooks.join(", ")}</p>
            <button class="btn small">Start Reading</button>
        `;
        libraryGrid.appendChild(div);
    });
}
