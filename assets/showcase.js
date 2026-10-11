/* Lightweight public presentation: no backend or production business logic. */
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

/* Actual project screenshots, uploaded by the team to its media CDN.
   The image gallery is separate from the illustrative UI sample above. */
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
      const remote = typeof entry.src === "string" ? entry.src : "";
      const source = /^https:\/\/d2ol7oe51mr4n9\.cloudfront\.net\/[^\s"'<>]+\.(png|jpe?g|webp)(\?[^\s"'<>]*)?$/i.test(remote)
        ? remote
        : /^[A-Za-z0-9_-]+\.(png|jpe?g|webp)$/i.test(filename) ? "./screenshots/" + filename : "";
      if (!source) continue;
      const picture = document.createElement("img");
      picture.src = source;
      picture.alt = typeof entry.alt === "string" ? entry.alt : "VILNXT product screenshot";
      picture.loading = "lazy";
      picture.decoding = "async";
      try { await picture.decode(); } catch { continue; }
      const figure = document.createElement("figure");
      figure.className = "shot";
      figure.style.margin = "0";
      const link = document.createElement("a");
      link.href = source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "Open full screenshot: " + picture.alt);
      link.appendChild(picture);
      const caption = document.createElement("figcaption");
      caption.textContent = typeof entry.caption === "string" ? entry.caption : picture.alt;
      figure.append(link, caption);
      gallery.appendChild(figure);
    }
    if (gallery.children.length) {
      const fallback = document.querySelector(".galleryFallback");
      if (fallback) fallback.hidden = true;
      const description = document.querySelector("#screenshots .sectionHeader p");
      if (description) description.textContent = "Autentiški VILNXT produkto ekrano vaizdai, pateikti komandos. Pilną veikiantį produktą galima išbandyti per vilnxt.com.";
    }
  } catch {
    // Fallback CTA remains visible if images cannot load.
  }
})();