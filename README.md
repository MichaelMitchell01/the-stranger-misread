# The Stranger, Misread

A responsive, single-page interpretation of *The Stranger* (1942) by Albert Camus. Thesis: Meursault's trial exposes a tension between responsibility for a killing and society's demand for recognizable expressions of grief.

> **Note about authorship:** An initial concept and starter version of the site were generated with assistance from ChatGPT on November 24, 2026. The applicant should review, test, revise, and be able to explain the code. The required actual coding-tool session history must be added before submission.

## Why this subject?

*The Stranger* is acclaimed rather than underrated. This site argues that the novel is **misunderstood** when it is described only as a celebration of apathy or nihilism. It distinguishes critique of Meursault's trial from exoneration of his crime and acknowledges the unnamed victim and colonial context.

## Features

- Editorial hero graphic drawn entirely with CSS (no third-party images).
- Three misconception-versus-reading cards, revised to connect specific scenes to the prosecution's argument.
- Context from Camus's 1955 preface, carefully distinguished from clinical claims or a defense of murder.
- Interactive, keyboard-accessible four-exhibit case file.
- Live review counter and next-exhibit control.
- Four-prompt cross-examination mini-game: choose whether each detail concerns the shooting or the social expectations used against Meursault; get immediate explanatory feedback and a replay option.
- Responsive layout with reduced-motion preference support.
- No third-party scripts, analytics, APIs, accounts, or cookies.

## Technology and files

- `index.html` — page structure, content, and semantic accessibility landmarks.
- `styles.css` — layout, color, typography, CSS sun illustration, mobile styles.
- `script.js` — exhibit data, event listeners, and dynamic content.
- `docs/ASSESSMENT-CHECKLIST.md` — testing and delivery checklist.
- `docs/SESSION-HISTORY-INSTRUCTIONS.md` — how to include authentic coding-tool history.

## Run locally

The site needs no installation or compilation. Open `index.html` directly, or from the project directory run:

```powershell
py -m http.server 5500
```

Then open `http://localhost:5500` in a browser. Press `Ctrl+C` to stop the server.

## Manual testing

1. Check all navigation links, including keyboard focus and Skip to content.
2. Switch between all four exhibits by clicking and pressing the arrow keys.
3. Complete the four-step cross-examination using both correct and incorrect answers, then replay it.
4. Check the exhibit counter (should reach `04 / 04`).
5. Resize the browser to mobile widths (375 px, 768 px) and check for overflow.
6. Check DevTools Console for JavaScript errors.
7. Test in Edge and Chrome; optionally test with JavaScript disabled.
8. Read the argument again for accuracy and clarity; revise in your own words.

## Deploy with GitHub Pages

Create a **public** GitHub repository, commit the files at the top level, then go to **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. The website will be available at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` after deployment.

## AI and development history

The hiring assessment explicitly requests coding-tool session history. Include the relevant actual ChatGPT development conversation, including prompts, code generated, debugging, and your subsequent edits. Do **not** upload an export of all your personal chats or claim a generated summary is a verbatim transcript. See `docs/SESSION-HISTORY-INSTRUCTIONS.md`.

## Intellectual property

This is independent commentary on Albert Camus's novel. No full text of the novel, book-cover art, or movie stills are used. The site's copy is interpretive paraphrase, not quotation.

The cross-examination classifier lets visitors actively distinguish evidence of the act from observations of social expectations. It is an interpretive exercise, not a legal opinion about what could be admitted as evidence. All copy is original paraphrase.

**Reference:** Albert Camus, [1955 preface to *L'Étranger* (archived French PDF)](https://pedagogie-archive.ac-orleans-tours.fr/fileadmin/user_upload/lettres/EAF_Doublants/Etranger/Etranger_preface.pdf).