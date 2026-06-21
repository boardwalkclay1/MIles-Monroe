// Multiple daily entries so each day feels fresh
const dailyEntries = [
    {
        scripture: "Jeremiah 29:11",
        reflection: "Your future is not random; it is held in the hands of a God who thinks about you.",
        action: "Write down one dream you’ve been afraid to admit.",
        affirmation: "I am seen, planned for, and loved.",
        focus: "Hope"
    },
    {
        scripture: "Proverbs 4:7",
        reflection: "Wisdom is worth pursuing more than comfort.",
        action: "Read one page of a book that stretches your thinking.",
        affirmation: "I am growing wiser every day.",
        focus: "Wisdom"
    },
    {
        scripture: "Habakkuk 2:2",
        reflection: "Vision becomes clearer when you write it down.",
        action: "Write three sentences describing the future you want.",
        affirmation: "My vision matters.",
        focus: "Clarity"
    },
    {
        scripture: "Matthew 6:33",
        reflection: "When you seek Kingdom priorities first, everything else finds its place.",
        action: "Take five minutes to be still and refocus.",
        affirmation: "I am aligned with what truly matters.",
        focus: "Alignment"
    }
];

const dailyContainer = document.getElementById("dailyContainer");

if (dailyContainer) {
    const entry = dailyEntries[Math.floor(Math.random() * dailyEntries.length)];
    dailyContainer.innerHTML = `
        <h3>Scripture</h3><p>${entry.scripture}</p>
        <h3>Reflection</h3><p>${entry.reflection}</p>
        <h3>Action Step</h3><p>${entry.action}</p>
        <h3>Affirmation</h3><p>${entry.affirmation}</p>
        <h3>Focus Word</h3><p>${entry.focus}</p>
    `;
}
