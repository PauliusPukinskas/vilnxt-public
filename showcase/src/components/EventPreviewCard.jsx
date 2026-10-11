// Public, intentionally reduced event-card demonstration.
// Adapted from the private EventCard presentation, with NO business logic,
// community lookups, accounts, persistence, APIs or organizer feed.
import EventDate from "./EventDate.jsx";

export default function EventPreviewCard({ event, saved, onToggleSaved }) {
  return (
    <article className="eventCard">
      <div className="eventTop">
        <EventDate date={event.date} />
        <button type="button" className="bookmark" onClick={() => onToggleSaved(event.id)}
          aria-label={saved ? "Pašalinti iš pažymėtų" : "Pažymėti kortelę"}
          aria-pressed={saved}>{saved ? "★" : "☆"}</button>
      </div>
      <div className="eventBody">
        <span className="topic">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
      <div className="eventFooter">
        <span>DEMO DATA · NOT A REAL EVENT</span>
        <span aria-hidden="true">↗</span>
      </div>
    </article>
  );
}
