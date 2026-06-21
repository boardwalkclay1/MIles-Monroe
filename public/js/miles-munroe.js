// public/js/miles-munroe.js
// Miles Munroe – Life & Legacy
// Long-form, richly structured biography renderer

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mmBiography");

  // ---------------------------------------------------------------------------
  // CORE DATA STRUCTURES
  // ---------------------------------------------------------------------------

  const biographyMeta = {
    fullName: "Dr. Myles Egbert Munroe",
    birthDate: "April 20, 1954",
    birthPlace: "Nassau, Bahamas",
    deathDate: "November 9, 2014",
    deathPlace: "Grand Bahama, Bahamas",
    mainThemes: [
      "Purpose",
      "Leadership",
      "Kingdom Principles",
      "Vision",
      "Potential",
      "Legacy"
    ],
    summary:
      "Dr. Myles Munroe was a Bahamian pastor, author, speaker, and leadership consultant whose life mission was to help people discover their purpose and transform followers into leaders and leaders into agents of change."
  };

  const sections = [
    {
      id: "early-life",
      title: "Early Life and Foundations",
      type: "narrative",
      content: `
        Born on April 20, 1954, in Nassau, Bahamas, Myles Egbert Munroe grew up in a poor family of eleven children
        in a small wooden house without electricity or running water. His parents, despite hardship, instilled in him
        deep faith, discipline, and a sense of destiny that shaped his worldview.<br><br>
        As a young boy, Munroe experienced the tension between poverty and possibility. He often spoke about how his
        environment tried to define him, but his inner conviction refused to accept limitation as his identity. He
        discovered early that faith could reframe reality, and that vision could lift a person beyond their immediate
        circumstances.<br><br>
        He attended Oral Roberts University, where he earned a Bachelor’s degree in Fine Arts, Education, and Theology
        in 1978. He later completed a Master’s degree in Administration at the University of Tulsa in 1980. Over the
        years, he received multiple honorary doctorates recognizing his global leadership influence and contribution
        to spiritual and civic development.
      `
    },
    {
      id: "vision-calling",
      title: "Vision and Calling",
      type: "narrative",
      content: `
        Munroe’s life mission was to help people discover their purpose. He believed every person was born with a
        divine assignment and that ignorance of purpose leads to misuse, frustration, and wasted potential.<br><br>
        One of his most famous statements was: “The greatest tragedy in life is not death, but life without purpose.”
        This conviction drove him to teach, write, and build institutions focused on unlocking human potential. He
        saw purpose as the key to identity, direction, and fulfillment.<br><br>
        During his formative years, he wrestled with questions of significance: Why am I here? What was I born to do?
        These questions became the engine of his calling. He concluded that the discovery of purpose is not optional
        but essential, and that a life lived without purpose is a life lived beneath its design.
      `
    },
    {
      id: "bfmi",
      title: "Bahamas Faith Ministries International",
      type: "narrative",
      content: `
        In the early 1980s, Munroe founded Bahamas Faith Ministries International (BFMI) in Nassau. BFMI was more than
        a church; it was a leadership incubator designed to raise influencers for government, business, education, and
        culture.<br><br>
        Munroe envisioned BFMI as a hub where people could be trained to think like leaders, act like agents of change,
        and serve with integrity. The ministry emphasized Kingdom principles, personal transformation, and societal
        impact. Under his leadership, BFMI grew into a global network with branches and partnerships across Africa,
        Asia, Europe, and North America, becoming one of the most influential ministries in the Caribbean.<br><br>
        BFMI hosted conferences, leadership summits, and training programs that attracted attendees from around the
        world. Many of these gatherings focused on equipping individuals to lead in their spheres of influence, whether
        in politics, business, education, or community development.
      `
    },
    {
      id: "author-thought-leader",
      title: "Author and Thought Leader",
      type: "narrative",
      content: `
        Dr. Myles Munroe wrote over 60 books, many of which became international bestsellers. His writing blended
        theology, psychology, and practical leadership insights, making his work accessible and transformative.<br><br>
        Notable titles include:<br>
        • <strong>Understanding Your Potential</strong> – unlocking human purpose and destiny.<br>
        • <strong>The Principles and Power of Vision</strong> – how vision defines leadership and direction.<br>
        • <strong>Rediscovering the Kingdom</strong> – exploring God’s original intent for humanity and governance.<br>
        • <strong>The Spirit of Leadership</strong> – cultivating leadership from within rather than from position.<br>
        • <strong>The Purpose and Power of Woman</strong> – empowering women through understanding divine design.<br><br>
        His books were translated into multiple languages and distributed worldwide, influencing millions of readers.
        Munroe’s writing style was direct yet deeply philosophical, challenging readers to rethink their assumptions
        about life, faith, and leadership.
      `
    },
    {
      id: "speaker-global",
      title: "Speaker and Global Influencer",
      type: "narrative",
      content: `
        Munroe was a sought-after speaker who addressed audiences in over 100 nations. He spoke at United Nations
        events, corporate summits, leadership forums, and faith-based conferences, often bridging faith, governance,
        and practical leadership.<br><br>
        He trained presidents, CEOs, ministers, and emerging leaders, emphasizing that leadership is not a title but
        a mindset rooted in service. He often said, “True leadership is born when you discover something worth dying
        for.”<br><br>
        His communication style combined humor, storytelling, and sharp insight. He could move seamlessly from
        discussing biblical narratives to analyzing contemporary political structures, always returning to the theme
        of purpose and responsibility.
      `
    },
    {
      id: "philosophy-teachings",
      title: "Philosophy and Teachings",
      type: "narrative",
      content: `
        Munroe’s philosophy centered on Kingdom principles—the idea that humanity was created to manage Earth under
        divine authority. His core themes included purpose, vision, leadership, potential, and legacy.<br><br>
        He frequently used vivid metaphors, such as the seed, to explain potential: “The wealthiest place on Earth is
        the cemetery—full of dreams never realized.” His teachings challenged people to live intentionally and to
        pour out everything placed inside them.<br><br>
        He believed that leadership begins with self-discovery and that true authority is rooted in character, not
        position. His emphasis on Kingdom thinking invited people to see themselves as stewards of influence rather
        than passive observers of life.
      `
    },
    {
      id: "impact-bahamas",
      title: "Impact on the Bahamas and Beyond",
      type: "narrative",
      content: `
        Beyond ministry, Munroe served as a national advisor in the Bahamas, contributing to policy discussions on
        youth development, leadership training, and education. His influence helped shape a generation of leaders in
        government, business, and faith communities.<br><br>
        He received the Order of the British Empire (OBE) for his contributions to national development and was widely
        respected as a voice for moral leadership and nation-building.<br><br>
        Munroe believed that spiritual insight should translate into practical solutions. He encouraged leaders to
        address poverty, injustice, and corruption through principled governance and ethical leadership.
      `
    },
    {
      id: "tragic-passing",
      title: "Tragic Passing and Enduring Legacy",
      type: "narrative",
      content: `
        On November 9, 2014, Dr. Myles Munroe, his wife Ruth, and several ministry leaders died in a plane crash near
        Grand Bahama while traveling to a leadership conference. The tragedy shocked the world and deeply affected
        those impacted by his work.<br><br>
        Despite his passing, BFMI and Myles Munroe International continue his vision, led by protégés and family
        members who uphold his teachings on purpose, leadership, and the Kingdom.<br><br>
        His legacy lives on through his books, recorded messages, and the leaders he mentored. Many of his protégés
        now lead organizations, churches, and initiatives that carry forward his emphasis on purpose-driven leadership.
      `
    },
    {
      id: "interesting-facts",
      title: "Interesting Facts",
      type: "list",
      content: `
        • He was a pilot, musician, and visual artist before becoming a full-time minister.<br>
        • He preferred raising successors over followers and often said, “I don’t want followers; I want successors.”<br>
        • His sermons and teachings were broadcast in over 100 countries.<br>
        • He believed in nation-building through moral and spiritual leadership, not just religious preaching.<br>
        • He often urged people: “Don’t die old—die empty. Pour out everything God placed inside you.”
      `
    }
  ];

  const timelineEvents = [
    {
      year: 1954,
      label: "Birth",
      description: "Born in Nassau, Bahamas, into a large family facing economic hardship."
    },
    {
      year: 1978,
      label: "Education Milestone",
      description: "Graduated from Oral Roberts University with a Bachelor’s degree in Fine Arts, Education, and Theology."
    },
    {
      year: 1980,
      label: "Advanced Studies",
      description: "Completed a Master’s degree in Administration at the University of Tulsa."
    },
    {
      year: 1980,
      label: "Founding BFMI",
      description: "Began laying the foundations for Bahamas Faith Ministries International in Nassau."
    },
    {
      year: 1990,
      label: "Global Expansion",
      description: "BFMI’s influence expanded across continents, with partnerships in Africa, Europe, and North America."
    },
    {
      year: 2000,
      label: "Leadership Influence",
      description: "Recognized globally as a leading voice on purpose, leadership, and Kingdom principles."
    },
    {
      year: 2014,
      label: "Passing",
      description: "Died in a plane crash near Grand Bahama while traveling to a leadership conference."
    }
  ];

  const quotes = [
    {
      text: "The greatest tragedy in life is not death, but life without purpose.",
      theme: "Purpose"
    },
    {
      text: "True leadership is born when you discover something worth dying for.",
      theme: "Leadership"
    },
    {
      text: "The wealthiest place on Earth is the cemetery—full of dreams never realized.",
      theme: "Potential"
    },
    {
      text: "Don’t die old—die empty. Pour out everything God placed inside you.",
      theme: "Legacy"
    },
    {
      text: "I don’t want followers; I want successors.",
      theme: "Mentorship"
    }
  ];

  // ---------------------------------------------------------------------------
  // RENDER HELPERS
  // ---------------------------------------------------------------------------

  function createSectionWrapper(id, title) {
    const section = document.createElement("section");
    section.className = "mm-section";
    section.id = id;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    section.appendChild(h2);
    return section;
  }

  function createParagraph(htmlContent) {
    const p = document.createElement("p");
    p.innerHTML = htmlContent;
    return p;
  }

  function renderNarrativeSection(sectionData) {
    const wrapper = createSectionWrapper(sectionData.id, sectionData.title);
    const p = createParagraph(sectionData.content);
    wrapper.appendChild(p);
    return wrapper;
  }

  function renderListSection(sectionData) {
    const wrapper = createSectionWrapper(sectionData.id, sectionData.title);
    const p = createParagraph(sectionData.content);
    wrapper.appendChild(p);
    return wrapper;
  }

  function renderTimeline(events) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-timeline";
    wrapper.id = "mm-timeline";

    const h2 = document.createElement("h2");
    h2.textContent = "Timeline of Key Events";
    wrapper.appendChild(h2);

    const list = document.createElement("ul");
    list.className = "mm-timeline-list";

    events.forEach(event => {
      const li = document.createElement("li");
      li.className = "mm-timeline-item";

      const yearSpan = document.createElement("span");
      yearSpan.className = "mm-timeline-year";
      yearSpan.textContent = event.year;

      const labelSpan = document.createElement("span");
      labelSpan.className = "mm-timeline-label";
      labelSpan.textContent = event.label;

      const descP = document.createElement("p");
      descP.className = "mm-timeline-description";
      descP.textContent = event.description;

      li.appendChild(yearSpan);
      li.appendChild(labelSpan);
      li.appendChild(descP);
      list.appendChild(li);
    });

    wrapper.appendChild(list);
    return wrapper;
  }

  function renderQuotes(quotesArray) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-quotes";
    wrapper.id = "mm-quotes";

    const h2 = document.createElement("h2");
    h2.textContent = "Selected Quotes";
    wrapper.appendChild(h2);

    const list = document.createElement("ul");
    list.className = "mm-quotes-list";

    quotesArray.forEach(q => {
      const li = document.createElement("li");
      li.className = "mm-quote-item";

      const quoteText = document.createElement("blockquote");
      quoteText.textContent = q.text;

      const themeSpan = document.createElement("span");
      themeSpan.className = "mm-quote-theme";
      themeSpan.textContent = `Theme: ${q.theme}`;

      li.appendChild(quoteText);
      li.appendChild(themeSpan);
      list.appendChild(li);
    });

    wrapper.appendChild(list);
    return wrapper;
  }

  function renderMeta(meta) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-meta";
    wrapper.id = "mm-meta";

    const h2 = document.createElement("h2");
    h2.textContent = "Biographical Overview";
    wrapper.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = `
      <strong>Name:</strong> ${meta.fullName}<br>
      <strong>Born:</strong> ${meta.birthDate}, ${meta.birthPlace}<br>
      <strong>Died:</strong> ${meta.deathDate}, ${meta.deathPlace}<br>
      <strong>Main Themes:</strong> ${meta.mainThemes.join(", ")}<br><br>
      ${meta.summary}
    `;
    wrapper.appendChild(p);

    return wrapper;
  }

  // ---------------------------------------------------------------------------
  // EXTRA STRUCTURE: THEMES, TAGS, AND INDEX
  // ---------------------------------------------------------------------------

  const themeIndex = {
    Purpose: [],
    Leadership: [],
    "Kingdom Principles": [],
    Vision: [],
    Potential: [],
    Legacy: [],
    Mentorship: []
  };

  function indexQuotesByTheme(quotesArray) {
    quotesArray.forEach(q => {
      if (!themeIndex[q.theme]) {
        themeIndex[q.theme] = [];
      }
      themeIndex[q.theme].push(q.text);
    });
  }

  function renderThemeIndex() {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-theme-index";
    wrapper.id = "mm-theme-index";

    const h2 = document.createElement("h2");
    h2.textContent = "Themes and Ideas Index";
    wrapper.appendChild(h2);

    const list = document.createElement("ul");
    list.className = "mm-theme-list";

    Object.keys(themeIndex).forEach(theme => {
      const li = document.createElement("li");
      li.className = "mm-theme-item";

      const themeTitle = document.createElement("h3");
      themeTitle.textContent = theme;

      const themeQuotes = document.createElement("ul");
      themeQuotes.className = "mm-theme-quotes";

      themeIndex[theme].forEach(text => {
        const qLi = document.createElement("li");
        qLi.textContent = text;
        themeQuotes.appendChild(qLi);
      });

      li.appendChild(themeTitle);
      li.appendChild(themeQuotes);
      list.appendChild(li);
    });

    wrapper.appendChild(list);
    return wrapper;
  }

  // ---------------------------------------------------------------------------
  // RENDERING PIPELINE
  // ---------------------------------------------------------------------------

  function renderBiography() {
    // Meta overview
    container.appendChild(renderMeta(biographyMeta));

    // Main sections
    sections.forEach(sectionData => {
      let rendered;
      if (sectionData.type === "narrative") {
        rendered = renderNarrativeSection(sectionData);
      } else if (sectionData.type === "list") {
        rendered = renderListSection(sectionData);
      } else {
        rendered = renderNarrativeSection(sectionData);
      }
      container.appendChild(rendered);
    });

    // Timeline
    container.appendChild(renderTimeline(timelineEvents));

    // Quotes
    indexQuotesByTheme(quotes);
    container.appendChild(renderQuotes(quotes));

    // Theme index
    container.appendChild(renderThemeIndex());
  }

  // ---------------------------------------------------------------------------
  // INIT
  // ---------------------------------------------------------------------------

  renderBiography();

  // ---------------------------------------------------------------------------
  // BELOW: ADDITIONAL DETAIL FUNCTIONS TO EXTEND CONTENT (LONG JS)
  // ---------------------------------------------------------------------------

  // Extended narrative fragments for deeper reading experience
  const extendedNarratives = {
    earlyLifeDetail: `
      Growing up in Nassau, Munroe often faced social and economic barriers that could have limited his vision.
      However, he developed a habit of reading, studying, and reflecting on the stories of great leaders and
      historical figures. These stories expanded his imagination and helped him see beyond the constraints of
      his immediate environment.<br><br>
      He frequently shared how his childhood experiences taught him resilience and empathy. The lack of material
      resources forced him to rely on creativity and faith, shaping his belief that true wealth begins in the mind
      and spirit rather than in possessions.
    `,
    callingDetail: `
      Munroe’s sense of calling emerged gradually as he observed the confusion and frustration in the lives of
      people around him. He noticed that many individuals drifted through life without clear direction, reacting
      to circumstances rather than living by design.<br><br>
      This observation led him to study the concept of purpose from both a theological and philosophical perspective.
      He concluded that purpose is discovered, not invented, and that it is rooted in the original intent of the
      Creator. This conviction became the foundation of his teaching ministry.
    `,
    leadershipDetail: `
      As Munroe’s influence grew, he began to focus more intentionally on leadership development. He believed that
      leadership is the key to transforming societies and that every person carries leadership potential within them.<br><br>
      He challenged traditional views that equated leadership with position or title. Instead, he defined leadership
      as the capacity to influence others through vision, values, and example. This redefinition opened the door for
      ordinary people to see themselves as leaders in their homes, communities, and workplaces.
    `
  };

  function renderExtendedNarrative(title, htmlContent) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-extended";
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const p = document.createElement("p");
    p.innerHTML = htmlContent;
    wrapper.appendChild(h2);
    wrapper.appendChild(p);
    return wrapper;
  }

  // Add extended narrative sections for more depth
  container.appendChild(
    renderExtendedNarrative("Early Life – Deeper Reflections", extendedNarratives.earlyLifeDetail)
  );
  container.appendChild(
    renderExtendedNarrative("Calling – The Discovery of Purpose", extendedNarratives.callingDetail)
  );
  container.appendChild(
    renderExtendedNarrative("Leadership – Redefining Influence", extendedNarratives.leadershipDetail)
  );

  // ---------------------------------------------------------------------------
  // QUOTE HIGHLIGHTER (INTERACTIVE STYLE WITHOUT REAL EVENTS)
  // ---------------------------------------------------------------------------

  function createQuoteHighlightSection(quotesArray) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-quote-highlight";
    const h2 = document.createElement("h2");
    h2.textContent = "Quote Highlights by Theme";
    wrapper.appendChild(h2);

    quotesArray.forEach(q => {
      const block = document.createElement("div");
      block.className = "mm-quote-highlight-block";

      const quoteText = document.createElement("p");
      quoteText.className = "mm-quote-highlight-text";
      quoteText.textContent = q.text;

      const themeLabel = document.createElement("span");
      themeLabel.className = "mm-quote-highlight-theme";
      themeLabel.textContent = q.theme;

      block.appendChild(quoteText);
      block.appendChild(themeLabel);
      wrapper.appendChild(block);
    });

    return wrapper;
  }

  container.appendChild(createQuoteHighlightSection(quotes));

  // ---------------------------------------------------------------------------
  // PURPOSE-FOCUSED SUMMARY SECTION
  // ---------------------------------------------------------------------------

  const purposeSummary = `
    At the core of Dr. Myles Munroe’s life was a relentless focus on purpose. He believed that every human being
    carries a unique assignment that, when discovered and pursued, brings fulfillment and contributes to the
    betterment of society.<br><br>
    His teachings on purpose were not abstract; they were deeply practical. He encouraged people to examine their
    gifts, passions, and experiences to discern the patterns that point toward their calling. He insisted that
    purpose is not merely about personal success but about service and impact.<br><br>
    Munroe’s emphasis on purpose continues to resonate with individuals across cultures and generations, inspiring
    them to live intentionally and to refuse a life of passive existence.
  `;

  container.appendChild(
    renderExtendedNarrative("Purpose – The Central Theme of His Life", purposeSummary)
  );

  // ---------------------------------------------------------------------------
  // KINGDOM PRINCIPLES SECTION
  // ---------------------------------------------------------------------------

  const kingdomPrinciplesContent = `
    One of the most distinctive aspects of Munroe’s teaching was his focus on Kingdom principles. He argued that
    the message of the Kingdom is not merely religious but governmental, dealing with authority, responsibility,
    and stewardship.<br><br>
    He taught that the Kingdom of God is a present reality that shapes how believers think, act, and lead. This
    perspective challenged people to see themselves as ambassadors of a higher order, tasked with representing
    divine values in earthly systems.<br><br>
    Munroe’s Kingdom teachings emphasized righteousness, justice, and service. He believed that when leaders
    embrace Kingdom principles, they become agents of transformation in their nations and communities.
  `;

  container.appendChild(
    renderExtendedNarrative("Kingdom Principles – A Governmental Perspective", kingdomPrinciplesContent)
  );

  // ---------------------------------------------------------------------------
  // LEGACY REFLECTION SECTION
  // ---------------------------------------------------------------------------

  const legacyReflectionContent = `
    Reflecting on Dr. Myles Munroe’s legacy, it becomes clear that his impact cannot be measured solely by the
    number of books he wrote or the conferences he hosted. His true legacy lies in the lives he touched and the
    leaders he helped shape.<br><br>
    Many individuals testify that his teachings awakened them to their purpose, gave them courage to lead, and
    inspired them to pursue excellence. His influence continues through the organizations he founded, the
    recordings of his messages, and the ongoing work of those he mentored.<br><br>
    Munroe often spoke about dying empty—pouring out every gift, idea, and assignment before leaving the earth.
    By that measure, his life stands as a powerful example of what it means to live fully and intentionally.
  `;

  container.appendChild(
    renderExtendedNarrative("Legacy – Living and Dying Empty", legacyReflectionContent)
  );

  // ---------------------------------------------------------------------------
  // ADDITIONAL QUOTE CLUSTERS FOR LENGTH AND DEPTH
  // ---------------------------------------------------------------------------

  const extendedQuotes = [
    "Leadership is not about control; it is about service.",
    "Vision is the ability to see beyond the present.",
    "Potential is what you can do that you haven’t done yet.",
    "Character is the foundation of lasting influence.",
    "Success without purpose is failure in disguise.",
    "Your future is not ahead of you; it is trapped inside you.",
    "You were born to make a difference, not just to make a living.",
    "The greatest enemy of progress is your last success.",
    "If you don’t know where you are going, any road will take you there.",
    "Purpose gives pain a reason and struggle a direction."
  ];

  function renderExtendedQuoteCluster(quotesArray, title) {
    const wrapper = document.createElement("section");
    wrapper.className = "mm-section mm-extended-quotes";
    const h2 = document.createElement("h2");
    h2.textContent = title;
    wrapper.appendChild(h2);

    const list = document.createElement("ul");
    list.className = "mm-extended-quotes-list";

    quotesArray.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });

    wrapper.appendChild(list);
    return wrapper;
  }

  container.appendChild(
    renderExtendedQuoteCluster(extendedQuotes, "Extended Reflections on Purpose and Leadership")
  );

  // ---------------------------------------------------------------------------
  // LONG-FORM LEADERSHIP SECTION
  // ---------------------------------------------------------------------------

  const leadershipLongForm = `
    Munroe’s approach to leadership was holistic. He believed that leadership begins with self-governance and
    extends to the ability to influence others through example, vision, and values.<br><br>
    He challenged leaders to cultivate integrity, discipline, and humility. In his view, leadership divorced from
    character becomes dangerous, leading to abuse of power and erosion of trust.<br><br>
    He taught that leaders must be students of history, culture, and human behavior. By understanding the forces
    that shape societies, leaders can respond wisely and strategically to the challenges of their time.<br><br>
    Munroe’s leadership seminars often included practical tools for decision-making, conflict resolution, and
    organizational development. He emphasized that leadership is a skill that can be learned and refined, not
    merely a gift reserved for a select few.
  `;

  container.appendChild(
    renderExtendedNarrative("Leadership – Character, Vision, and Influence", leadershipLongForm)
  );

  // ---------------------------------------------------------------------------
  // PURPOSE QUESTIONS SECTION
  // ---------------------------------------------------------------------------

  const purposeQuestionsContent = `
    Throughout his ministry, Munroe encouraged people to ask themselves probing questions to uncover their purpose:<br><br>
    • What do I love to do so much that I would do it for free?<br>
    • What problems do I feel compelled to solve?<br>
    • What injustices disturb me deeply?<br>
    • What talents and gifts come naturally to me?<br>
    • What experiences have shaped my perspective and passion?<br><br>
    He believed that honest reflection on these questions could reveal patterns that point toward a person’s
    assignment. Purpose, he taught, is often hidden in the intersection of passion, gifting, and need.
  `;

  container.appendChild(
    renderExtendedNarrative("Purpose – Questions That Reveal Your Assignment", purposeQuestionsContent)
  );

  // ---------------------------------------------------------------------------
  // GLOBAL IMPACT SECTION
  // ---------------------------------------------------------------------------

  const globalImpactContent = `
    Munroe’s global impact can be seen in the diversity of audiences he addressed. From small community gatherings
    to large international conferences, he carried the same message: you were born to lead and to live with purpose.<br><br>
    He traveled extensively, speaking in Africa, Europe, Asia, North America, and the Caribbean. In each context,
    he adapted his examples and illustrations to resonate with local realities while maintaining the core principles
    of his teaching.<br><br>
    His ability to connect across cultures made him a bridge-builder, helping people see the universal relevance of
    purpose, leadership, and Kingdom values.
  `;

  container.appendChild(
    renderExtendedNarrative("Global Impact – A Voice Across Nations", globalImpactContent)
  );

  // ---------------------------------------------------------------------------
  // FINAL REFLECTION SECTION
  // ---------------------------------------------------------------------------

  const finalReflectionContent = `
    Reading the story of Dr. Myles Munroe is not merely an exercise in biography; it is an invitation to examine
    one’s own life. His journey from poverty in Nassau to global influence demonstrates what can happen when a
    person embraces purpose, cultivates character, and commits to serving others.<br><br>
    His teachings continue to challenge and inspire, calling people to live intentionally, lead courageously, and
    leave a legacy that outlives them. In this sense, his life is not just a story to be admired but a pattern to
    be studied and applied.<br><br>
    As you reflect on his life and words, the question that remains is simple yet profound: What will you do with
    the potential and purpose placed inside you?
  `;

  container.appendChild(
    renderExtendedNarrative("Final Reflections – An Invitation to Purpose", finalReflectionContent)
  );

  // ---------------------------------------------------------------------------
  // (JS FILE INTENTIONALLY LONG AND RICH FOR READING EXPERIENCE)
  // ---------------------------------------------------------------------------
});
