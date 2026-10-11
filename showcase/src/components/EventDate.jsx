// Original small presentational component from the private VILNXT frontend.
// All demo dates supplied by this showcase are illustrative, not live events.
export default function EventDate({ date, day, month }) {
  let displayDay = day;
  let displayMonth = month;

  if (date && (!displayDay || !displayMonth)) {
    const parsed = new Date(`${date}T12:00:00`);
    displayDay ||= String(parsed.getDate()).padStart(2, "0");
    displayMonth ||= parsed
      .toLocaleString("en-GB", { month: "short" })
      .toUpperCase();
  }

  return (
    <div className="eventDate" aria-label={`${displayMonth} ${displayDay}`}>
      <strong>{displayDay}</strong>
      <span>{displayMonth}</span>
    </div>
  );
}
