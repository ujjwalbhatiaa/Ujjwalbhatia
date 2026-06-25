/* ============================================================================
   PORTFOLIO CONTENT CONFIG  —  EDIT THIS FILE TO UPDATE YOUR SITE
   ----------------------------------------------------------------------------
   Everything on the website is generated from the object below.
   You almost never need to touch the HTML/CSS/JS. Just edit values here,
   save, and refresh the page.

   HOW TO ADD THINGS LATER (quick guide):
   • New skill            -> add to DATA.skills[category].items
   • New job / internship -> add an object to DATA.experience (top = most recent)
   • New project          -> add an object to DATA.projects
   • New achievement       -> add an object to DATA.achievements
   • New social link       -> add an object to DATA.socials
   • LeetCode / stats      -> edit DATA.stats (set show:true to display a card)
   • The AI chatbot answers -> add Q&A pairs to DATA.assistantKnowledge
   ========================================================================== */

const DATA = {
  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Ujjwal Bhatia",
    // The rotating words in the hero headline ("I build ___")
    roles: [
      "AI & Machine Learning",
      "Computing Science",
      "intelligent systems",
      "clean, fast software",
      "things that think",
    ],
    tagline:
      "BSc Honours Computing Science (AI Specialization) student at the University of Alberta — building intelligent systems, teaching code, and shipping software that solves real problems.",
    location: "Edmonton, Alberta, Canada",
    email: "ujjwalbhatia2819@gmail.com",
    phone: "+1 (780) 709-3479",
    // Short status line shown near your name
    status: "Open to AI / Software Engineering internships & new-grad roles",
    // Optional: path to a profile photo. Leave "" to show an animated monogram instead.
    photo: "",
    // Optional: path to your resume PDF (drop the file in this folder to enable the button)
    resumeUrl: "Ujjwal_Bhatia_Resume.pdf",
  },

  /* ----------------------------------------------------------- QUICK STATS  */
  // Set show:true to render a stat card. Great for LeetCode, GPA, projects, etc.
  stats: [
    { show: true, value: "50+", label: "Students mentored as TA", icon: "users" },
    { show: true, value: "2024", label: "Started BSc Honours CS-AI", icon: "school" },
    { show: true, value: "3+", label: "Years operating a business", icon: "briefcase" },
    // Example LeetCode card — flip show to true and update the number when ready:
    { show: false, value: "150+", label: "LeetCode problems solved", icon: "code" },
  ],

  /* ------------------------------------------------------------------ ABOUT */
  about: [
    "I'm a Computing Science Honours student at the University of Alberta specializing in Artificial Intelligence. I care about the full path from idea to working system — designing the model, writing the code, and making it usable for real people.",
    "As a Teaching Assistant I help 50+ students per term master Python and core computing concepts, debugging unfamiliar errors live and turning confusion into understanding. Before university I founded and ran a business for three years, which taught me ownership, operations, and how to keep customers happy under pressure.",
    "I move fast on new tools, write clearly, and I'm looking for AI / software engineering roles where I can learn from strong engineers and contribute from day one.",
  ],

  /* ----------------------------------------------------------------- SKILLS */
  // Add or remove categories and items freely. `level` (0-100) drives the bar.
  skills: {
    "Languages & AI": {
      icon: "brain",
      items: [
        { name: "Python", level: 88 },
        { name: "Machine Learning", level: 72 },
        { name: "Data Structures & Algorithms", level: 78 },
        { name: "HTML / CSS", level: 85 },
        { name: "JavaScript", level: 70 },
      ],
    },
    "Tools & Platforms": {
      icon: "tools",
      items: [
        { name: "Git / GitHub", level: 80 },
        { name: "Google Workspace", level: 90 },
        { name: "MS Office (Excel/Word/PPT)", level: 90 },
        { name: "SEO Management", level: 72 },
      ],
    },
    "Strengths": {
      icon: "spark",
      items: [
        { name: "Teaching & Mentoring", level: 92 },
        { name: "Problem Solving", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 85 },
      ],
    },
  },

  /* ------------------------------------------------------------- EXPERIENCE */
  // Most recent first. Add internships / jobs here as you get them.
  experience: [
    {
      role: "Teaching Assistant",
      org: "University of Alberta",
      location: "Edmonton, AB",
      start: "Jan 2025",
      end: "Present",
      current: true,
      bullets: [
        "Support 50+ students per term in introductory computing and Python, explaining technical concepts in plain language.",
        "Debug unfamiliar errors in real time during weekly lab sessions and provide one-on-one troubleshooting.",
        "Grade assignments with detailed, constructive feedback and coordinate closely with course instructors.",
      ],
      tags: ["Python", "Teaching", "Debugging", "Algorithms"],
    },
    {
      role: "Assistant Regional Coordinator",
      org: "Harrington Housing",
      location: "Edmonton, AB · Remote/Hybrid",
      start: "Apr 2025",
      end: "Present",
      current: true,
      bullets: [
        "Primary point of contact for residents, resolving 20+ inquiries per week across email, phone, and in person.",
        "Coordinate leasing, onboarding, and unit setup for co-living properties while maintaining occupancy goals.",
        "Document interactions and resolutions in internal systems to ensure accurate records and compliance.",
      ],
      tags: ["Operations", "Coordination", "CRM"],
    },
    {
      role: "Founder, Owner & Operator",
      org: "Quick-Service Restaurant",
      location: "Punjab, India",
      start: "Aug 2021",
      end: "Jul 2024",
      current: false,
      bullets: [
        "Built and ran a business for 3 years — online sales platforms, purchase orders, menu development, and daily operations.",
        "Grew repeat-customer loyalty through consistent service quality and a calm, solution-focused approach.",
        "Trained and supervised staff on customer service standards.",
      ],
      tags: ["Entrepreneurship", "Operations", "Leadership"],
    },
    {
      role: "Volunteer / Events Crew",
      org: "University of Alberta Students' Union (UASU)",
      location: "Edmonton, AB",
      start: "Sep 2024",
      end: "Nov 2024",
      current: false,
      bullets: [
        "Supported high-traffic campus events, helping students and visitors with directions, questions, and registration.",
        "Practiced fast, friendly communication in busy environments with diverse audiences.",
      ],
      tags: ["Events", "Communication"],
    },
  ],

  /* --------------------------------------------------------------- PROJECTS */
  // Showcase technical work here. Add new projects as you build them.
  // `link` and `repo` are optional — leave "" to hide the button.
  projects: [
    {
      title: "MagnoC — Smart Toy Concept",
      blurb:
        "Founded MagnoC and developed a toy with an inbuilt vacuum cleaner to encourage toddler physical activity. Led the concept from idea to working prototype.",
      tags: ["Product", "Hardware", "Innovation"],
      link: "",
      repo: "",
      highlight: "Founder / CEO",
    },
    {
      title: "Snapchat AR Filter — Top 10 Globally",
      blurb:
        "Designed an International Women's Day AR filter recognized by Snapchat as a top-10 filter worldwide — combining creative design with technical execution.",
      tags: ["AR", "Design", "Creative Tech"],
      link: "",
      repo: "",
      highlight: "Top 10 worldwide",
    },
    {
      title: "Award-Winning Science Exhibition Projects",
      blurb:
        "Built innovative projects earning regional 1st prize and a national consolation prize in CBSE science exhibitions — recognized for original engineering thinking.",
      tags: ["Engineering", "Research"],
      link: "",
      repo: "",
      highlight: "Regional 1st prize",
    },
    // TEMPLATE — copy this block for each new project (e.g. an ML model, a web app):
    // {
    //   title: "Project name",
    //   blurb: "One or two sentences on what it does and what you built.",
    //   tags: ["Python", "PyTorch"],
    //   link: "https://live-demo-url",   // or ""
    //   repo: "https://github.com/you/repo", // or ""
    //   highlight: "Featured",
    // },
  ],

  /* ----------------------------------------------------------- ACHIEVEMENTS */
  achievements: [
    { title: "Elected Head Boy & Deputy Head Boy", detail: "Student government leadership, chosen by consensus vote.", year: "2022–2024", icon: "crown" },
    { title: "Interschool Entrepreneurship Competition", detail: "2nd prize and ₹11,000 cash award for a viable business idea.", year: "2023", icon: "trophy" },
    { title: "Snapchat Filter — Top 10 Globally", detail: "International Women's Day AR filter recognized worldwide.", year: "2022", icon: "star" },
    { title: "CBSE Science Exhibitions", detail: "Regional 1st prize and national consolation prize.", year: "2022–2023", icon: "flask" },
    { title: "State-Level Badminton Player", detail: "Competed at the state level.", year: "—", icon: "medal" },
    { title: "CPR / First Aid / AED Certified", detail: "Current certification.", year: "—", icon: "shield" },
  ],

  /* ---------------------------------------------------------------- EDUCATION */
  education: [
    {
      school: "University of Alberta",
      degree: "BSc Honours, Computing Science — AI Specialization",
      location: "Edmonton, AB",
      period: "2024 – Present",
      note: "Honours program specializing in Artificial Intelligence.",
    },
    {
      school: "DAV Public School",
      degree: "Class XII — Science Stream (Distinction)",
      location: "Punjab, India",
      period: "2023 – 2024",
      note: "Distinction in science; strong analytical and academic record.",
    },
  ],

  /* ----------------------------------------------------------------- SOCIALS */
  // Add/replace your real links. Set url to "" to hide a button.
  socials: [
    { name: "Email", url: "mailto:ujjwalbhatia2819@gmail.com", icon: "mail" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ujjwal-bhatia2819", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/ujjwalbhatiaa", icon: "github" },
    { name: "LeetCode", url: "", icon: "code" },         // <- paste your LeetCode profile URL here
    { name: "Indeed", url: "", icon: "briefcase" },      // <- optional: paste your Indeed profile URL here
  ],

  /* ------------------------------------------------- AI ASSISTANT KNOWLEDGE */
  // The "Ask my resume" chatbot matches a visitor's question against these
  // keywords and replies with the answer. Add more pairs anytime.
  assistantKnowledge: [
    {
      keywords: ["ai", "machine learning", "ml", "artificial intelligence", "specialization"],
      answer:
        "Ujjwal is pursuing a BSc Honours in Computing Science with an AI specialization at the University of Alberta. He's focused on machine learning, intelligent systems, and the full path from model to working software.",
    },
    {
      keywords: ["experience", "work", "job", "background"],
      answer:
        "He's currently a Teaching Assistant at the University of Alberta (Python & intro computing, 50+ students/term), an Assistant Regional Coordinator at Harrington Housing, and previously founded and ran a quick-service restaurant for 3 years.",
    },
    {
      keywords: ["teaching", "ta", "teach", "assistant", "mentor"],
      answer:
        "As a TA he supports 50+ students per term, debugs unfamiliar Python errors live in labs, gives one-on-one help, and grades with detailed feedback. Teaching is one of his strongest skills.",
    },
    {
      keywords: ["skills", "languages", "programming", "tech stack", "python"],
      answer:
        "Core skills: Python (strongest), machine learning, data structures & algorithms, JavaScript, HTML/CSS, Git/GitHub, and SEO. He also speaks English, Hindi, and Punjabi fluently, with beginner French.",
    },
    {
      keywords: ["project", "projects", "built", "magnoc", "snapchat", "portfolio"],
      answer:
        "Highlights include founding MagnoC (a smart toy concept), a Snapchat AR filter ranked top-10 globally, and award-winning CBSE science exhibition projects. New software/ML projects are added to the Projects section as he builds them.",
    },
    {
      keywords: ["education", "university", "school", "degree", "study", "alberta"],
      answer:
        "He's at the University of Alberta (2024–present) in the BSc Honours Computing Science AI program, after graduating Class XII with distinction in the science stream from DAV Public School.",
    },
    {
      keywords: ["leadership", "head boy", "award", "achievement", "prize", "recognition"],
      answer:
        "Leadership & recognition: elected Head Boy and Deputy Head Boy, 2nd prize in an interschool entrepreneurship competition (₹11,000 award), a top-10 global Snapchat filter, and regional/national CBSE science prizes.",
    },
    {
      keywords: ["contact", "email", "reach", "hire", "available", "internship"],
      answer:
        "Ujjwal is open to AI / software engineering internships and new-grad roles. Reach him at ujjwalbhatia2819@gmail.com or +1 (780) 709-3479. He's based in Edmonton and open to remote work.",
    },
    {
      keywords: ["location", "where", "based", "edmonton", "remote"],
      answer:
        "He's based in Edmonton, Alberta, Canada, eligible to work in Canada, and open to remote and on-site roles.",
    },
    {
      keywords: ["language", "languages", "bilingual", "french", "hindi", "punjabi"],
      answer:
        "Languages: English (fluent), Hindi (fluent), Punjabi (fluent), and beginner French.",
    },
  ],

  // Fallback when the assistant can't match a question
  assistantFallback:
    "Great question! I don't have that exact detail on hand — but you can reach Ujjwal directly at ujjwalbhatia2819@gmail.com. Try asking about his AI studies, skills, experience, projects, or achievements.",
};

// Make available to the rest of the site
window.DATA = DATA;
