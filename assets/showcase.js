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
