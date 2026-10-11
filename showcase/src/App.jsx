import { useMemo, useState } from "react";
import BrandMark from "./components/BrandMark.jsx";
import EventPreviewCard from "./components/EventPreviewCard.jsx";

// Intentionally fictional samples. The actual event catalogue is PRIVATE and
// this excerpt performs no external fetches or calls to internal APIs.
const sampleEvents = [
  { id: "demo-ai", category: "AI", date: "2026-11-06",
    title: "AI builders meet", description: "A fictional example of how a technical community event could appear." },
  { id: "demo-startups", category: "Startup", date: "2026-11-13",
    title: "Founders roundtable", description: "An illustrative card for founders looking to meet collaborators." },
  { id: "demo-product", category: "Product", date: "2026-11-20",
    title: "Product studio", description: "A design-oriented sample to demonstrate the interface and responsive layout." }
];
const topics = [
  { label: "Visi", value: "all" },
  { label: "AI", value: "AI" },
  { label: "Startuoliai", value: "Startup" },
  { label: "Produktai", value: "Product" }
];

export default function App() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState([]);
  const results = useMemo(() => sampleEvents.filter(event =>
    (category === "all" || event.category === category) &&
    [event.title, event.description, event.category].join(" ").toLowerCase().includes(query.trim().toLowerCase())
  ), [category, query]);

  const toggleSaved = id => setSaved(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="https://vilnxt.com/" aria-label="VILNXT live website"><BrandMark /><span>VILNXT</span></a>
        <span className="topStatus">HACK4VILNIUS 2026 · PUBLIC UI EXCERPT</span>
        <a className="mainButton" href="https://vilnxt.com/" target="_blank" rel="noopener noreferrer">Atidaryti produktą ↗</a>
      </header>
      <main>
        <section className="hero">
          <span className="eyebrow">01 / LIMITED FRONTEND PREVIEW</span>
          <h1>Find your<br /><em>next room.</em></h1>
          <p>Mažas VILNXT frontend pavyzdys, skirtas parodyti vizualinę kalbą ir kelis sąsajos komponentus. Tikroji aplikacija ir didžioji dalis kodo lieka privačiai.</p>
        </section>
        <div className="warning" role="note">
          <strong>SHOWCASE ONLY / TIK PRISTATYMAS</strong>
          <span>Žemiau esančios kortelės ir datos yra fiktyvūs UI pavyzdžiai. Tai nėra tikri renginiai ar pilna VILNXT aplikacija. Backend, autentifikacija, algoritmai ir duomenų bazė čia neįtraukti.</span>
        </div>
        <section className="workspace" aria-labelledby="workspace-title">
          <div className="sectionHead"><div><span className="eyebrow">DISCOVER / MINI UI</span><h2 id="workspace-title">Atrask savo kryptį.</h2></div><span className="results">{results.length} pavyzdžiai</span></div>
          <label className="search"><span aria-hidden="true">⌕</span><span className="srOnly">Ieškoti demonstracijoje</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ieškoti demonstracinėse kortelėse…" /></label>
          <div className="chips" role="group" aria-label="Demo filtrai">
            {topics.map(topic => <button key={topic.value} type="button" aria-pressed={category === topic.value} onClick={() => setCategory(topic.value)}>{topic.label}</button>)}
          </div>
          <div className="grid">
            {results.length ? results.map(event => <EventPreviewCard key={event.id} event={event} saved={saved.includes(event.id)} onToggleSaved={toggleSaved} />)
              : <div className="empty">Nėra demonstracinių kortelių pagal šią paiešką.</div>}
          </div>
          <p className="disclaimer">No live event data · No tracking · No private integrations · No production code</p>
        </section>
      </main>
      <footer><span>© 2026 VILNXT Team and respective rights holders · All rights reserved.</span><a href="https://github.com/PauliusPukinskas/vilnxt-public/blob/main/LICENSE">Proprietary notice ↗</a></footer>
    </div>
  );
}
