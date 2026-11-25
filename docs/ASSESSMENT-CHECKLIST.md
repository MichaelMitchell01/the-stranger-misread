# Before submitting to Dispatch Energy

- [ ] Read every section of the site and revise any literary interpretation you disagree with.
- [ ] Be able to explain `index.html`, CSS layout, and the exhibit array/event handlers in `script.js`.
- [ ] Test every navigation item and exhibit in Chrome and Edge.
- [ ] Test the tabs with a keyboard: Tab, Left/Right arrows, Home/End.
- [ ] Check desktop and mobile widths; check focus outlines and visible contrast.
- [ ] Check that the browser developer console has no errors.
- [ ] Publish the repository to GitHub and confirm the live GitHub Pages site works.
- [ ] Add your **actual coding-tool session history** (required by Dispatch).
- [ ] Remove private data, unrelated chats, tokens, and credentials from the export.
- [ ] Commit final changes and make sure GitHub shows them.
- [ ] Email the repository URL and optionally the live-site URL to hr@dispatchenergy.com before the three-calendar-day deadline.

# What to explain

- Why a static HTML/CSS/JavaScript site was appropriate for a three-day build.
- How the exhibit objects map to the screen and why `textContent` is used.
- How you accounted for mobile usability and keyboard navigation.
- How you tested the result and what you would change next.
- What ChatGPT supplied and what you personally reviewed, modified, and tested.


## Additions

- [ ] Confirm that the three claim cards reflect your own reading of the funeral, trial, and absurdism.
- [ ] Test the cross-examination classifier: four prompts, immediate feedback, advance, score, and replay.
- [ ] Try clicking an answer twice; score must not double-count.
- [ ] Check keyboard focus after advancing to the next prompt.
- [ ] Verify the 1955 preface reference link and attribution.
- [ ] Ensure you can explain why the site does not excuse Meursault's crime or erase the unnamed victim.

## Testing and Bug Fixes

### Missing Favicon (HTTP 404)

- **Issue:** Chrome DevTools Console displayed a 404 error because the browser requested a missing `favicon.ico` file.
- **Cause:** The project did not include a favicon.
- **Resolution:** Added `<link rel="icon" href="data:,">` inside the `<head>` section of `index.html`.
- **Validation:** Refreshed the website and confirmed the favicon error no longer appeared in DevTools Console.
- **Impact:** Eliminated an unnecessary resource request without affecting website functionality.
