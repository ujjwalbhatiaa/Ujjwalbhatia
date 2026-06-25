# Ujjwal Bhatia — Portfolio

A modern, animated portfolio website built with **vanilla HTML, CSS & JavaScript** — no build step, no frameworks, no dependencies. It runs anywhere you can host a static file.

**Features**
- Animated neural-network hero background that reacts to your mouse
- Dark / neon "AI" theme with glassmorphism and scroll animations
- "Ask my resume" AI chat assistant (runs fully in the browser — no API key, no cost)
- Interactive terminal you can type commands into
- Animated skill bars, experience timeline, project cards, achievements
- Fully responsive (looks great on phones)
- **Everything is driven by one file: `js/data.js`** — edit it to update the site

---

## Folder structure

```
portfolio/
├── index.html         ← page structure (rarely needs editing)
├── README.md          ← this file
├── .nojekyll          ← lets GitHub Pages serve the js/ folder correctly
├── css/
│   └── styles.css     ← all styling + theme colors (top of file)
└── js/
    ├── data.js        ← ⭐ EDIT THIS to change content
    ├── neural.js      ← animated background
    ├── main.js        ← renders the page + interactions
    └── chatbot.js     ← the AI assistant
```

---

## ✏️ How to update your site (the only file you need)

Open **`js/data.js`** in any text editor. It's full of comments telling you exactly what to do. Common edits:

| I want to…                       | Do this in `js/data.js`                                   |
|----------------------------------|-----------------------------------------------------------|
| Add a new skill                  | Add to `skills["Category"].items`                         |
| Add an internship / job          | Add an object to the top of `experience`                  |
| Add a project                    | Copy the project template in `projects` and fill it in    |
| Add an achievement               | Add an object to `achievements`                           |
| Show your LeetCode count         | In `stats`, set the LeetCode card's `show: true`          |
| Add LinkedIn / GitHub / Indeed   | Paste your URL into the matching entry in `socials`       |
| Teach the chatbot a new answer   | Add a `{ keywords, answer }` pair to `assistantKnowledge` |

Save the file and refresh the browser. That's it.

### Add your resume PDF
Drop your resume file into the `portfolio/` folder and make sure the name matches `profile.resumeUrl` in `data.js` (default: `Ujjwal_Bhatia_Resume.pdf`). The "Resume ↗" button will then work.

### Add your links (important!)
In `data.js` → `socials`, fill in the empty `url: ""` fields for LinkedIn, GitHub, LeetCode, and Indeed. Empty ones are automatically hidden.

### Change the colors
Open `css/styles.css` — the top `:root` block has `--c1`, `--c2`, `--accent-pink`. Change those three to re-skin the whole site.

---

## 👀 Preview it locally

Just double-click `index.html` to open it in your browser. Everything works offline.

(Optional, if a browser blocks local files: run a tiny server from inside the `portfolio` folder:)
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Deploy it live

### Option A — GitHub Pages (free, recommended)
1. Create a new repository on GitHub (e.g. `ujjwal-portfolio`).
2. Upload **the contents of this `portfolio/` folder** (so `index.html` sits at the repo root).
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
5. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/<repo-name>/`.

The included `.nojekyll` file ensures the `js/` folder loads correctly.

**Custom domain (optional):** in Settings → Pages add your domain, then point a CNAME/DNS record at GitHub per their instructions.

### Option B — Netlify / Vercel (drag & drop, also free)
- Netlify: go to app.netlify.com → "Add new site" → "Deploy manually" → drag the `portfolio` folder in. Done.
- Vercel: `vercel` CLI or drag-and-drop import; framework preset = "Other".

### Option C — Your own hosting
Upload the contents of `portfolio/` to your web host's public folder (e.g. `public_html`) via FTP or their file manager. No server-side setup needed — it's all static.

---

## Notes
- The AI chat assistant answers from the knowledge base in `data.js` — it works without any backend or API key, so it's free and private. If you ever want a "real" LLM-powered version, that would require a small backend with an API key (ask and it can be added).
- No tracking, no cookies, no external dependencies except Google Fonts.

Built for Ujjwal Bhatia. Go land that AI role. 🚀
