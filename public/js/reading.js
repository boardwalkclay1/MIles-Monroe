// =======================================================
// Jackie Wisdom Reader — Miles Munroe Library
// Real, Elaborate, Functional
// =======================================================

// GLOBAL STATE
let fontSize = 20;
let currentSectionIndex = 0;
let currentTheme = "dark";

// DOM ELEMENTS
const readingText = document.getElementById("readingText");
const fontUpBtn = document.getElementById("fontUp");
const fontDownBtn = document.getElementById("fontDown");
const toggleThemeBtn = document.getElementById("toggleTheme");
const sectionTitle = document.getElementById("sectionTitle");
const nextBtn = document.getElementById("nextSection");
const prevBtn = document.getElementById("prevSection");
const sectionList = document.getElementById("sectionList");
const progressBar = document.getElementById("readingProgress");
const jumpTopBtn = document.getElementById("jumpTop");
const jumpBottomBtn = document.getElementById("jumpBottom");

// =======================================================
// SECTION DATA — ELABORATE MILES MUNROE CONTENT
// =======================================================

const sections = [
    {
        id: "milesAutobiography",
        title: "Miles Munroe – A Life of Purpose, Kingdom, and Influence",
        type: "autobiography",
        content: () => window.milesAutobiographyText
    },
    {
        id: "earlyLife",
        title: "Early Life in Nassau, Bahamas",
        type: "autobiography",
        content: () => `
            <strong>Early Life in Nassau, Bahamas</strong><br><br>
            Miles Egbert Munroe was born on April 20, 1954, in Nassau, Bahamas, into a large family
            that lived in conditions many would consider harsh and limiting. He grew up in a small
            wooden house with no electricity, no running water, and very few material possessions.
            The neighborhood around him was marked by poverty, uncertainty, and a sense of
            resignation.<br><br>
            Instead of allowing this environment to define him, Miles began to ask questions. Why
            do some people seem to accept limitation as normal, while others push beyond it? Why
            do some lives feel random, while others feel directed?<br><br>
            He watched adults who were talented but stuck, intelligent but discouraged, gifted but
            unfocused. These observations planted a deep conviction in him: the greatest crisis in
            life is not lack of resources, but lack of purpose.<br><br>
            As a teenager, he encountered faith in a personal way and began to see God not as a
            distant religious figure, but as a King with a plan, a government, and a vision for
            humanity. This revelation would become the foundation of his future teaching.
        `
    },
    {
        id: "educationFormation",
        title: "Education and Formation of a Kingdom Thinker",
        type: "autobiography",
        content: () => `
            <strong>Education and Formation of a Kingdom Thinker</strong><br><br>
            Miles did not treat education as a formality or a social requirement. For him, learning
            was a weapon against ignorance and limitation. He attended Oral Roberts University in
            the United States, where he earned a Bachelor’s degree in Fine Arts, Education, and
            Theology. He later completed a Master’s degree in Administration.<br><br>
            At Oral Roberts University, he encountered a wider world. He met people from different
            nations, cultures, and backgrounds. He listened to professors who challenged his
            thinking and exposed him to new frameworks for understanding leadership, organization,
            and communication.<br><br>
            Miles studied theology, but he also studied how systems work, how organizations grow,
            and how leaders think. He believed that spiritual truth must be communicated in a way
            that is clear, structured, and practical.<br><br>
            Education sharpened his ability to translate revelation into language that business
            leaders, government officials, and everyday people could understand. He saw knowledge
            as a responsibility: once you know more, you are accountable to do more.
        `
    },
    {
        id: "bfmiBirth",
        title: "Birth of Bahamas Faith Ministries International (BFMI)",
        type: "autobiography",
        content: () => `
            <strong>Birth of Bahamas Faith Ministries International (BFMI)</strong><br><br>
            After completing his studies, Miles returned to the Bahamas with a clear conviction:
            transformation must begin at home. He did not see himself as someone who had escaped
            his environment. He saw himself as someone sent back to bring change.<br><br>
            In this spirit, he founded Bahamas Faith Ministries International (BFMI). BFMI was not
            designed to be just another church. It was envisioned as a training center, a leadership
            incubator, and a hub for Kingdom teaching.<br><br>
            From a small island nation, Miles began to speak to the world. His messages were
            recorded, broadcast, and shared across continents. People from different cultures and
            backgrounds found his teachings practical, challenging, and deeply inspiring.<br><br>
            BFMI became a place where people were equipped to discover their purpose, develop their
            potential, and walk in Kingdom identity. It embodied his belief that geography does not
            limit destiny. A voice from a small island could shape global conversations about
            leadership, purpose, and Kingdom living.
        `
    },
    {
        id: "purposeCore",
        title: "Core Teaching: Purpose",
        type: "teaching",
        content: () => `
            <strong>Core Teaching: Purpose</strong><br><br>
            Purpose was one of Miles Munroe’s most defining themes. He taught that everything
            created has a purpose, and that the greatest tragedy in life is not death, but life
            without purpose.<br><br>
            Purpose, he said, is the original intent in the mind of the Creator for a thing or
            person. It is the reason something exists. When purpose is unknown, abuse is
            inevitable. When purpose is clear, decisions become simpler and more focused.<br><br>
            Miles challenged people to move beyond survival and comfort. He urged them to ask
            deeper questions: Why am I here? What problem was I born to solve? What assignment is
            attached to my existence?<br><br>
            In <em>In Pursuit of Purpose</em>, he walked readers through the process of confronting
            confusion and embracing clarity. He explained that purpose is not about copying others,
            but about uncovering the unique design placed inside you.<br><br>
            Purpose gives meaning to pain, direction to decisions, and strength to endure
            challenges. When you know your purpose, you stop drifting and start directing your life
            with intention.
        `
    },
    {
        id: "potentialCore",
        title: "Core Teaching: Potential",
        type: "teaching",
        content: () => `
            <strong>Core Teaching: Potential</strong><br><br>
            Potential was another pillar of Miles Munroe’s message. He defined potential as what
            you can do but have not done yet—hidden ability, dormant power, untapped strength.<br><br>
            He often said that the graveyard is the richest place on earth, because it is full of
            books never written, songs never sung, businesses never started, and ideas never
            pursued.<br><br>
            Miles taught that God hides potential inside your spirit, waiting for discipline,
            vision, and purpose to activate it. Potential is not meant to remain buried. It is
            meant to be expressed.<br><br>
            In <em>Understanding Your Potential</em>, he urged readers to refuse a life of regret.
            He encouraged them to live in such a way that when they leave the earth, they leave
            empty—having poured out everything placed inside them.<br><br>
            Potential, in his view, is not just talent. It is the combination of gifts,
            experiences, insights, and opportunities that, when aligned with purpose, create
            impact.<br><br>
            He reminded his audiences that frustration often comes from unused potential. When you
            sense that you are capable of more but remain stuck, your soul becomes restless. The
            solution is not to numb that restlessness, but to respond to it with action.
        `
    },
    {
        id: "leadershipCore",
        title: "Core Teaching: Leadership",
        type: "teaching",
        content: () => `
            <strong>Core Teaching: Leadership</strong><br><br>
            Miles Munroe believed that leadership was not reserved for a select few. He taught that
            every person carries leadership potential, because leadership is influence, and
            everyone influences someone.<br><br>
            In <em>The Spirit of Leadership</em> and <em>Becoming a Leader</em>, he explained that
            leadership begins with self-discovery and self-discipline. You cannot lead others until
            you can lead yourself.<br><br>
            Leadership, he said, is not about titles or positions. It is about responsibility,
            character, and impact. True leaders serve. They empower others. They create
            environments where people can grow.<br><br>
            Miles challenged traditional views of leadership that focused on control and
            dominance. He argued that real leadership is rooted in humility and vision. Leaders see
            what others do not see, and they are willing to sacrifice to bring that vision into
            reality.<br><br>
            He also emphasized that leadership shapes culture. When leaders are healthy, cultures
            become healthy. When leaders are broken, cultures reflect that brokenness.
        `
    },
    {
        id: "kingdomCore",
        title: "Core Teaching: Kingdom of God",
        type: "teaching",
        content: () => `
            <strong>Core Teaching: Kingdom of God</strong><br><br>
            Miles Munroe’s most distinctive contribution was his teaching on the Kingdom of God. He
            argued that many people had reduced faith to religion, rituals, and routines, while
            missing the bigger picture: God’s intention was to establish a Kingdom—a government
            with laws, culture, and values—on earth through humanity.<br><br>
            In <em>Rediscovering the Kingdom</em>, he invited readers to see themselves as Kingdom
            citizens, not just religious members. This shift in identity changes everything.<br><br>
            As Kingdom citizens, people are not beggars trying to earn favor. They are ambassadors
            representing a King. They carry authority, responsibility, and purpose.<br><br>
            Miles taught that the Kingdom has its own economy, its own culture, and its own way of
            thinking. Kingdom citizens think in terms of assignment, territory, and impact.<br><br>
            This Kingdom perspective reshaped how many people viewed their work, their
            relationships, and their role in society. Faith was no longer just about attending
            services; it was about living as representatives of a higher government.
        `
    },
    {
        id: "relationshipsCore",
        title: "Teaching: Relationships, Love, and Covenant",
        type: "teaching",
        content: () => `
            <strong>Teaching: Relationships, Love, and Covenant</strong><br><br>
            Miles Munroe spoke extensively about relationships, marriage, and the roles of men and
            women. He believed that relationships must be rooted in purpose and honor.<br><br>
            In <em>The Purpose and Power of Love & Marriage</em> and <em>The Purpose and Power of
            Woman</em>, he explained that marriage is a covenant, not a contract. It is a
            partnership built around shared vision, mutual respect, and commitment.<br><br>
            He taught that love is not just emotion; it is a decision to seek the highest good of
            another person. Covenant relationships require sacrifice, communication, and clarity of
            expectations.<br><br>
            Miles also emphasized that you attract what you are, not just what you want. As you
            grow in character and purpose, your relationships begin to reflect that growth.<br><br>
            His teachings helped many people rethink how they approach dating, marriage, and
            friendship. Instead of chasing feelings, he encouraged them to pursue alignment with
            purpose.
        `
    },
    {
        id: "identityCore",
        title: "Teaching: Identity and Self-Discovery",
        type: "teaching",
        content: () => `
            <strong>Teaching: Identity and Self-Discovery</strong><br><br>
            Identity was a recurring theme in Miles Munroe’s work. He believed that many people
            live below their potential because they do not know who they are.<br><br>
            Identity, he taught, is discovered, not invented. It is rooted in the Creator’s design,
            not in public opinion.<br><br>
            When identity is unclear, people become vulnerable to manipulation, insecurity, and
            confusion. They chase titles, roles, and approval, hoping to feel valuable.<br><br>
            Miles urged people to anchor their identity in God’s view of them. In the Kingdom, you
            are not defined by your past, your failures, or your social status. You are defined by
            your purpose and your relationship with the King.<br><br>
            Clear identity stabilizes decisions. It helps you say “no” to distractions and “yes” to
            assignments that align with your destiny.<br><br>
            His teachings on identity invited people to stop performing for acceptance and start
            living from conviction.
        `
    },
    {
        id: "legacyImpact",
        title: "Legacy and Ongoing Global Impact",
        type: "autobiography",
        content: () => `
            <strong>Legacy and Ongoing Global Impact</strong><br><br>
            On November 9, 2014, Miles Munroe, his wife Ruth, and several members of their team
            died in a plane crash in the Bahamas while traveling to a leadership conference.<br><br>
            His physical life ended suddenly, but his influence did not.<br><br>
            His books, recordings, and teachings continue to circulate globally, impacting new
            generations who never met him in person.<br><br>
            Many leaders, pastors, and thinkers today still reference his work when they talk about
            purpose, Kingdom, and leadership.<br><br>
            Miles Munroe’s life can be summarized in a few powerful ideas:<br><br>
            • You were born with purpose.<br>
            • You carry potential.<br>
            • You are called to lead in some sphere.<br>
            • You are a citizen of a Kingdom bigger than any earthly system.<br><br>
            For you, Jackie, his story is an invitation. It says: your background does not limit
            your future. Your beginnings do not define your ending.<br><br>
            You can come from humble circumstances and still speak to nations. You can take your
            love for reading, your hunger for wisdom, and your desire to grow—and turn them into a
            life of impact.<br><br>
            Miles Munroe did not just teach these ideas; he lived them. And now, through his words
            and example, you are invited to live them too.
        `
    }
];

// =======================================================
// UTILITIES
// =======================================================

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function smoothScrollTo(y) {
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}

function saveState() {
    const state = {
        fontSize,
        currentSectionIndex,
        currentTheme
    };
    localStorage.setItem("jackieReadingState", JSON.stringify(state));
}

function loadState() {
    const raw = localStorage.getItem("jackieReadingState");
    if (!raw) return;
    try {
        const state = JSON.parse(raw);
        if (typeof state.fontSize === "number") fontSize = state.fontSize;
        if (typeof state.currentSectionIndex === "number") {
            currentSectionIndex = clamp(state.currentSectionIndex, 0, sections.length - 1);
        }
        if (typeof state.currentTheme === "string") currentTheme = state.currentTheme;
    } catch (e) {
        // ignore
    }
}

// =======================================================
// RENDER SECTION LIST
// =======================================================

function renderSectionList() {
    if (!sectionList) return;
    sectionList.innerHTML = "";
    sections.forEach((sec, index) => {
        const li = document.createElement("li");
        li.className = "reading-section-item";
        li.textContent = sec.title;
        li.dataset.index = index;
        if (index === currentSectionIndex) {
            li.classList.add("active");
        }
        li.onclick = () => {
            loadSection(index);
            smoothScrollTo(0);
        };
        sectionList.appendChild(li);
    });
}

// =======================================================
// LOAD SECTION
// =======================================================

function loadSection(index) {
    if (!readingText || !sectionTitle) return;
    if (index < 0 || index >= sections.length) return;

    currentSectionIndex = index;
    const section = sections[index];

    sectionTitle.innerHTML = section.title;
    readingText.innerHTML = section.content();
    readingText.style.fontSize = fontSize + "px";

    updateNavButtons();
    updateProgress();
    renderSectionList();
    saveState();
}

// =======================================================
// NAVIGATION BUTTONS
// =======================================================

function updateNavButtons() {
    if (!nextBtn || !prevBtn) return;
    prevBtn.style.display = currentSectionIndex === 0 ? "none" : "inline-block";
    nextBtn.style.display = currentSectionIndex === sections.length - 1 ? "none" : "inline-block";
}

if (nextBtn) {
    nextBtn.onclick = () => {
        const nextIndex = clamp(currentSectionIndex + 1, 0, sections.length - 1);
        loadSection(nextIndex);
        smoothScrollTo(0);
    };
}

if (prevBtn) {
    prevBtn.onclick = () => {
        const prevIndex = clamp(currentSectionIndex - 1, 0, sections.length - 1);
        loadSection(prevIndex);
        smoothScrollTo(0);
    };
}

// =======================================================
// FONT CONTROLS
// =======================================================

if (fontUpBtn) {
    fontUpBtn.onclick = () => {
        fontSize = clamp(fontSize + 2, 12, 48);
        if (readingText) {
            readingText.style.fontSize = fontSize + "px";
        }
        saveState();
    };
}

if (fontDownBtn) {
    fontDownBtn.onclick = () => {
        fontSize = clamp(fontSize - 2, 12, 48);
        if (readingText) {
            readingText.style.fontSize = fontSize + "px";
        }
        saveState();
    };
}

// =======================================================
// THEME TOGGLE
// =======================================================

function applyTheme() {
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}

if (toggleThemeBtn) {
    toggleThemeBtn.onclick = () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme();
        saveState();
    };
}

// =======================================================
// PROGRESS BAR
// =======================================================

function updateProgress() {
    if (!progressBar) return;
    const progress = ((currentSectionIndex + 1) / sections.length) * 100;
    progressBar.style.width = progress + "%";
}

// =======================================================
// JUMP BUTTONS
// =======================================================

if (jumpTopBtn) {
    jumpTopBtn.onclick = () => smoothScrollTo(0);
}

if (jumpBottomBtn) {
    jumpBottomBtn.onclick = () => smoothScrollTo(document.body.scrollHeight);
}

// =======================================================
// INITIAL LOAD
// =======================================================

loadState();
applyTheme();

if (readingText) {
    loadSection(currentSectionIndex);
}

// =======================================================
// FULL AUTOBIOGRAPHY TEXT — ELABORATE
// =======================================================

window.milesAutobiographyText = `
<strong>Miles Munroe – A Life of Purpose, Kingdom, and Influence</strong><br><br>
Miles Egbert Munroe was born on April 20, 1954, in Nassau, Bahamas, into a large family
that knew what it meant to struggle. He grew up in a wooden house with no electricity,
no running water, and very little material comfort. Yet in that environment, something
powerful was forming inside him—a deep awareness that life had to be more than survival.<br><br>
He often spoke about how his early years shaped his hunger for understanding purpose and
identity, because he saw firsthand what happened when people lived without a clear sense
of who they were or why they existed. He watched neighbors and relatives drift through
life, reacting to circumstances instead of directing them.<br><br>
As a young man, Miles encountered faith in a personal way and began to sense that his life
was not random. He became passionate about studying the Bible—not as a religious book,
but as a manual for life, leadership, and Kingdom principles. He saw in its pages a
blueprint for human dignity, responsibility, and destiny.<br><br>
This revelation changed everything. He started to see God not only as a distant figure,
but as a King with a government, a culture, and a vision for humanity. That revelation
would later become the core of his teaching: the message of the Kingdom of God.<br><br>
Miles pursued education with intensity. He attended Oral Roberts University, earning a
Bachelor’s degree in Fine Arts, Education, and Theology. He later completed a Master’s
degree in Administration. He studied not only theology, but also leadership, organizational
structure, and communication.<br><br>
Education, for him, was not about collecting degrees; it was about sharpening his ability
to communicate truth clearly and effectively. He believed that knowledge, when combined
with purpose, could transform individuals and nations.<br><br>
Returning to the Bahamas, Miles founded Bahamas Faith Ministries International (BFMI),
a ministry and organization that would become a global platform. From a small island
nation, he began to speak to the world.<br><br>
His messages were not limited to church buildings; he spoke to business leaders,
government officials, and everyday people about leadership, vision, potential, and
Kingdom living. He believed that spiritual truth should impact how people work, lead,
build families, and shape society.<br><br>
One of the central themes of Miles Munroe’s life was purpose. He taught that everything
created has a purpose, and that the greatest tragedy in life is not death, but life
without purpose.<br><br>
He challenged people to ask deeper questions: Why am I here? What problem was I born to
solve? What assignment is attached to my existence?<br><br>
His books, such as <em>In Pursuit of Purpose</em> and <em>Understanding Your Potential</em>,
helped millions of readers confront these questions with honesty and hope.<br><br>
Another major pillar of his teaching was leadership. Miles believed that leadership was
not reserved for a few special people; instead, he taught that every person carries
leadership potential.<br><br>
Leadership, he said, is influence—and influence begins with self-discovery and
self-discipline. In <em>The Spirit of Leadership</em> and <em>Becoming a Leader</em>, he
explained that true leaders serve, empower, and elevate others.<br><br>
Miles also became known for his powerful teaching on the Kingdom of God. He argued that
many people had reduced faith to religion, rituals, and routines, while missing the
bigger picture: that God’s intention was to establish a Kingdom on earth through
humanity.<br><br>
In <em>Rediscovering the Kingdom</em>, he invited readers to see themselves as Kingdom
citizens, not just religious members. This Kingdom perspective reshaped how people viewed
their identity, their work, and their role in the world.<br><br>
Beyond the stage and the books, Miles Munroe was a husband and a father. He married Ruth
Munroe, who became his partner in life and ministry. Together, they traveled, taught, and
built organizations that trained leaders and equipped believers.<br><br>
Their marriage was often held up as an example of partnership, mutual respect, and shared
vision. Miles wrote about relationships, marriage, and the roles of men and women,
emphasizing dignity, purpose, and honor in how people treat one another.<br><br>
Throughout his life, Miles traveled extensively, speaking in conferences, churches, and
leadership summits around the world. He was known for his clarity, his humor, and his
ability to make complex ideas simple and practical.<br><br>
People who heard him often described his messages as life-changing, because he didn’t
just inspire them—he gave them tools to think differently and live intentionally.<br><br>
On November 9, 2014, Miles Munroe, his wife Ruth, and several members of his team died in
a plane crash in the Bahamas while traveling to a leadership conference.<br><br>
His physical life ended suddenly, but his influence did not. His books, recordings, and
teachings continue to circulate globally, impacting new generations who never met him in
person.<br><br>
Miles Munroe’s life can be summarized in a few powerful ideas:<br><br>
• You were born with purpose.<br>
• You carry potential.<br>
• You are called to lead in some sphere.<br>
• You are a citizen of a Kingdom bigger than any earthly system.<br><br>
For you, Jackie, his story is an invitation. It says: your background does not limit your
future. Your beginnings do not define your ending.<br><br>
You can come from humble circumstances and still speak to nations. You can take your love
for reading, your hunger for wisdom, and your desire to grow—and turn them into a life of
impact.<br><br>
Miles Munroe did not just teach these ideas; he lived them. And now, through his words and
example, you are invited to live them too.
`;
