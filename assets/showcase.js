/* Read-only presentation interactions. No production code, external requests or user data. */
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-demo-topic]');
const count = document.querySelector('[data-count]');
for (const button of buttons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
    let visible = 0;
    for (const card of cards) {
      const show = filter === 'all' || card.dataset.demoTopic === filter;
      card.hidden = !show;
      if (show) visible += 1;
    }
    if (count) count.textContent = String(visible);
  });
}


/* Optional user-provided screenshot gallery.
 * The manifest is public. Only actually available image files are rendered.
 * No generated or example images are represented as product screenshots. */
(async function initScreenshots() {
  const gallery = document.querySelector("#screenshotGallery");
  if (!gallery) return;
  try {
    const response = await fetch("./screenshots/manifest.json");
    if (!response.ok) return;
    const manifest = await response.json();
    const entries = Array.isArray(manifest.images) ? manifest.images : [];
    for (const entry of entries.slice(0, 16)) {
      const filename = typeof entry.file === "string" ? entry.file : "";
      if (!/^[A-Za-z0-9_-]+\.(png|jpg|jpeg|webp)$/i.test(filename)) continue;
      const picture = document.createElement("img");
      picture.src = "./screenshots/" + filename;
      picture.alt = typeof entry.caption === "string" ? entry.caption : "VILNXT screenshot";
      picture.loading = "lazy";
      try {
        await picture.decode();
      } catch {
        continue; // Don't render empty or missing screenshot slots.
      }
      const figure = document.createElement("figure");
      figure.className = "shot";
      figure.style.margin = "0";
      const caption = document.createElement("figcaption");
      caption.textContent = picture.alt;
      figure.append(picture, caption);
      gallery.appendChild(figure);
    }
    if (gallery.children.length) {
      const fallback = document.querySelector(".galleryFallback");
      if (fallback) fallback.hidden = true;
      const description = document.querySelector("#screenshots .sectionHeader p");
      if (description) description.textContent = "VILNXT produkto ekrano vaizdai. Pilną veikiantį produktą galima išbandyti per vilnxt.com.";
    }
  } catch {
    // Static landing page remains completely functional without a manifest.
  }
})();
