let fontSize = 20;
const readingText = document.getElementById("readingText");
const fontUpBtn = document.getElementById("fontUp");
const fontDownBtn = document.getElementById("fontDown");
const toggleThemeBtn = document.getElementById("toggleTheme");

// Simple sections: first one is Miles Munroe autobiography
const sections = [
    {
        title: "Miles Munroe – A Life of Purpose and Kingdom",
        contentId: "milesAutobiography"
    },
    {
        title: "Understanding Purpose",
        contentId: "purposeOverview"
    }
];

let currentSectionIndex = 0;

function loadSection(index) {
    currentSectionIndex = index;
    const section = sections[index];
    readingText.innerHTML = getSectionContent(section.contentId);
}

function getSectionContent(id) {
    if (id === "milesAutobiography") {
        return window.milesAutobiographyText; // defined below
    }
    if (id === "purposeOverview") {
        return `
            <strong>Understanding Purpose</strong><br><br>
            Purpose is the original intent in the mind of the Creator for a thing or person.
            When you understand purpose, you stop competing and start fulfilling.
            You realize you are not here to copy anyone—you are here to complete a specific assignment.
        `;
    }
    return "Content not found.";
}

if (fontUpBtn && fontDownBtn && toggleThemeBtn && readingText) {
    fontUpBtn.onclick = () => {
        fontSize += 2;
        readingText.style.fontSize = fontSize + "px";
    };

    fontDownBtn.onclick = () => {
        fontSize = Math.max(12, fontSize - 2);
        readingText.style.fontSize = fontSize + "px";
    };

    toggleThemeBtn.onclick = () => {
        document.body.classList.toggle("light-mode");
    };

    // Load first section by default
    loadSection(0);
}

// Autobiography text injected into global scope for reading
window.milesAutobiographyText = `
<strong>Miles Munroe – A Life of Purpose, Kingdom, and Influence</strong><br><br>

Miles Egbert Munroe was born on April 20, 1954, in Nassau, Bahamas, into a large family
that knew what it meant to struggle. He grew up in a wooden house with no electricity,
no running water, and very little material comfort. Yet in that environment, something
powerful was forming inside him—a deep awareness that life had to be more than survival.
He often spoke about how his early years shaped his hunger for understanding purpose and
identity, because he saw firsthand what happened when people lived without a clear sense
of who they were or why they existed.<br><br>

As a young man, Miles encountered faith in a personal way and began to sense that his life
was not random. He became passionate about studying the Bible, not just as a religious
book, but as a manual for life, leadership, and Kingdom principles. This shift changed
everything. He started to see God not only as a distant figure, but as a King with a
government, a culture, and a vision for humanity. That revelation would later become the
core of his teaching: the message of the Kingdom of God.<br><br>

Miles pursued education with intensity. He attended Oral Roberts University in the United
States, where he earned a Bachelor’s degree in Fine Arts, Education, and Theology. He later
completed a Master’s degree in Administration. Education, for him, was not about collecting
degrees; it was about sharpening his ability to communicate truth clearly and effectively.
He believed that knowledge, when combined with purpose, could transform individuals and
nations.<br><br>

Returning to the Bahamas, Miles founded Bahamas Faith Ministries International (BFMI),
a ministry and organization that would become a global platform. From a small island nation,
he began to speak to the world. His messages were not limited to church buildings; he spoke
to business leaders, government officials, and everyday people about leadership, vision,
potential, and Kingdom living. He believed that spiritual truth should impact how people
work, lead, build families, and shape society.<br><br>

One of the central themes of Miles Munroe’s life was purpose. He taught that everything
created has a purpose, and that the greatest tragedy in life is not death, but life without
purpose. He challenged people to ask deeper questions: Why am I here? What problem was I
born to solve? What assignment is attached to my existence? His books, such as
<em>In Pursuit of Purpose</em> and <em>Understanding Your Potential</em>, helped millions of
readers confront these questions with honesty and hope.<br><br>

Another major pillar of his teaching was leadership. Miles believed that leadership was not
reserved for a few special people; instead, he taught that every person carries leadership
potential. Leadership, he said, is influence, and influence begins with self-discovery and
self-discipline. In books like <em>The Spirit of Leadership</em> and <em>Becoming a Leader</em>,
he explained that true leaders serve, empower, and elevate others. He often reminded his
audiences that leadership is not about titles or positions, but about responsibility and
impact.<br><br>

Miles also became known for his powerful teaching on the Kingdom of God. He argued that
many people had reduced faith to religion, rituals, and routines, while missing the bigger
picture: that God’s intention was to establish a Kingdom—a government with laws, culture,
and values—on earth through humanity. In his landmark work <em>Rediscovering the Kingdom</em>,
he invited readers to see themselves as Kingdom citizens, not just religious members. This
Kingdom perspective reshaped how people viewed their identity, their work, and their role
in the world.<br><br>

Beyond the stage and the books, Miles Munroe was a husband and a father. He married Ruth
Munroe, who became his partner in life and ministry. Together, they traveled, taught, and
built organizations that trained leaders and equipped believers. Their marriage was often
held up as an example of partnership, mutual respect, and shared vision. Miles wrote about
relationships, marriage, and the roles of men and women, emphasizing dignity, purpose, and
honor in how people treat one another.<br><br>

Throughout his life, Miles traveled extensively, speaking in conferences, churches, and
leadership summits around the world. He was known for his clarity, his humor, and his
ability to make complex ideas simple and practical. People who heard him often described
his messages as life-changing, because he didn’t just inspire them—he gave them tools to
think differently and live intentionally.<br><br>

On November 9, 2014, Miles Munroe, his wife Ruth, and several members of his team died in
a plane crash in the Bahamas while traveling to a leadership conference. His physical life
ended suddenly, but his influence did not. His books, recordings, and teachings continue to
circulate globally, impacting new generations who never met him in person. Many leaders,
pastors, and thinkers today still reference his work when they talk about purpose, Kingdom,
and leadership.<br><br>

Miles Munroe’s life can be summarized in a few powerful ideas: you were born with purpose;
you carry potential; you are called to lead in some sphere; and you are a citizen of a
Kingdom that is bigger than any earthly system. He believed that when people discover these
truths, they stop living small, fearful lives and begin to walk with confidence, clarity,
and responsibility.<br><br>

For you, Jackie, his story is an invitation. It says: your background does not limit your
future. Your beginnings do not define your ending. You can come from humble circumstances
and still speak to nations. You can take your love for reading, your hunger for wisdom, and
your desire to grow—and turn them into a life of impact. Miles Munroe did not just teach
these ideas; he lived them. And now, through his words and example, you are invited to live
them too.
`;
