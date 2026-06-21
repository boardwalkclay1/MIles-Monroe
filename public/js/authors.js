// Similar authors with mini-bios and reasons Jackie might like them
const authorProfiles = [
    {
        name: "T.D. Jakes",
        focus: "Healing, purpose, emotional restoration.",
        whyJackieWillLike: "He speaks to broken places with strength and compassion.",
        sampleBook: "Woman, Thou Art Loosed",
        link: "https://www.google.com/search?q=TD+Jakes+books"
    },
    {
        name: "John Maxwell",
        focus: "Leadership, personal growth, influence.",
        whyJackieWillLike: "He breaks leadership down into practical steps.",
        sampleBook: "The 21 Irrefutable Laws of Leadership",
        link: "https://www.google.com/search?q=John+Maxwell+books"
    },
    {
        name: "Joyce Meyer",
        focus: "Emotional health, practical faith, everyday life.",
        whyJackieWillLike: "She is honest, direct, and very relatable.",
        sampleBook: "Battlefield of the Mind",
        link: "https://www.google.com/search?q=Joyce+Meyer+books"
    },
    {
        name: "Gary Chapman",
        focus: "Relationships, communication, love languages.",
        whyJackieWillLike: "He helps people understand how they give and receive love.",
        sampleBook: "The 5 Love Languages",
        link: "https://www.google.com/search?q=Gary+Chapman+books"
    },
    {
        name: "A.R. Bernard",
        focus: "Identity, purpose, spiritual clarity.",
        whyJackieWillLike: "He connects faith with modern life and culture.",
        sampleBook: "Four Things Women Want from a Man",
        link: "https://www.google.com/search?q=AR+Bernard+books"
    },
    {
        name: "Rick Warren",
        focus: "Purpose, calling, church, service.",
        whyJackieWillLike: "He wrote one of the most influential books on purpose.",
        sampleBook: "The Purpose Driven Life",
        link: "https://www.google.com/search?q=Rick+Warren+books"
    },
    {
        name: "Tony Evans",
        focus: "Kingdom perspective, family, spiritual authority.",
        whyJackieWillLike: "He explains Kingdom concepts clearly and powerfully.",
        sampleBook: "Kingdom Man",
        link: "https://www.google.com/search?q=Tony+Evans+books"
    },
    {
        name: "Priscilla Shirer",
        focus: "Prayer, spiritual warfare, identity.",
        whyJackieWillLike: "She speaks to women with strength and clarity.",
        sampleBook: "Fervent",
        link: "https://www.google.com/search?q=Priscilla+Shirer+books"
    }
];

const authorsList = document.getElementById("authorsList");

if (authorsList) {
    authorsList.innerHTML = "";
    authorProfiles.forEach(a => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <strong>${a.name}</strong><br>
            <p><em>Focus:</em> ${a.focus}</p>
            <p>${a.whyJackieWillLike}</p>
            <p><em>Sample book:</em> ${a.sampleBook}</p>
            <a href="${a.link}" target="_blank" class="btn small">Explore</a>
        `;
        authorsList.appendChild(div);
    });
}
