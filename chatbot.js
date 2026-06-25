/* ============================================================================
   chatbot.js — "Ask my resume" AI assistant.
   Runs 100% client-side (works on GitHub Pages, no API key needed).
   Matches a visitor's question against keywords in DATA.assistantKnowledge
   and replies with the best answer. Add Q&A pairs in js/data.js.
   ========================================================================== */
(function () {
  const D = window.DATA;
  const $ = (s) => document.querySelector(s);

  const fab = $("#chat-fab");
  const panel = $("#chat-panel");
  const closeBtn = $("#chat-close");
  const messages = $("#chat-messages");
  const form = $("#chat-form");
  const text = $("#chat-text");
  const suggestions = $("#chat-suggestions");

  const SUGGESTED = [
    "What's his AI experience?",
    "What are his skills?",
    "Tell me about his projects",
    "How can I contact him?",
  ];

  let opened = false;

  function openChat() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (!opened) {
      opened = true;
      botSay(`Hi! 👋 I'm ${D.profile.name.split(" ")[0]}'s AI assistant. Ask me anything about his background, skills, projects, or how to get in touch.`);
      renderSuggestions();
    }
    setTimeout(() => text.focus(), 300);
  }
  function closeChat() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }

  fab.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeChat(); });

  function addMsg(content, who) {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = content;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }
  function botSay(content) { addMsg(content, "bot"); }

  function renderSuggestions() {
    suggestions.innerHTML = "";
    SUGGESTED.forEach((q) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chat-chip";
      chip.textContent = q;
      chip.addEventListener("click", () => handleQuestion(q));
      suggestions.appendChild(chip);
    });
  }

  // Score each knowledge entry by how many keywords appear in the question
  function findAnswer(qRaw) {
    const q = qRaw.toLowerCase();
    let best = null, bestScore = 0;
    D.assistantKnowledge.forEach((entry) => {
      let score = 0;
      entry.keywords.forEach((kw) => {
        if (q.includes(kw.toLowerCase())) score += kw.length; // longer match = stronger
      });
      if (score > bestScore) { bestScore = score; best = entry; }
    });
    return bestScore > 0 ? best.answer : D.assistantFallback;
  }

  function handleQuestion(q) {
    addMsg(q, "user");
    // typing indicator
    const typing = document.createElement("div");
    typing.className = "msg bot typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    const answer = findAnswer(q);
    setTimeout(() => {
      typing.remove();
      botSay(answer);
    }, 600 + Math.random() * 500);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = text.value.trim();
    if (!q) return;
    text.value = "";
    handleQuestion(q);
  });
})();
