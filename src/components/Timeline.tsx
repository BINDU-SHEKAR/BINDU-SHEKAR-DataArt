import type { Event } from '../types/types';
import EventMarker from './EventMarker';

const Timeline = ({ events, onSelect }: { events: Event[]; onSelect: (event: Event) => void }) => {
  return (
    <section id="timeline">
      {events.map((event, idx) => (
        <EventMarker key={idx} event={event} onClick={() => onSelect(event)} />
      ))}
    </section>
  );
};

export default Timeline;
