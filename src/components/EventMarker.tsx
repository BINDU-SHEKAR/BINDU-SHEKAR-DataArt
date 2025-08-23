import type { Event } from '../types/types';

const EventMarker = ({ event, onClick }: { event: Event; onClick: () => void }) => (
  <article className="event" onClick={onClick}>
    <h3>{event.year} - {event.title}</h3>
    <p>{event.description.substring(0, 50)}...</p>
  </article>
);

export default EventMarker;
