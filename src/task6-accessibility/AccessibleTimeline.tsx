// AccessibleTimeline.tsx
import { useState, useRef } from 'react';
import { AccessibleModal } from './AccessibleModal';
import events from '../data/events.json';

export function AccessibleTimeline() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const openModal = (eventData, e: React.MouseEvent<HTMLButtonElement>) => {
    lastFocused.current = e.currentTarget;
    setSelectedEvent(eventData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    lastFocused.current?.focus();
  };

  const handleKeyNav = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const markers = document.querySelectorAll('.event-marker');
    if (e.key === 'ArrowRight' && markers[index + 1]) {
      (markers[index + 1] as HTMLElement).focus();
    } else if (e.key === 'ArrowLeft' && markers[index - 1]) {
      (markers[index - 1] as HTMLElement).focus();
    }
  };

  return (
    <section aria-label="Timeline of learning and projects">
      <ul id="timeline">
        {events.map((event, index) => (
          <li key={index}>
            <button
              className="event-marker"
              aria-haspopup="dialog"
              aria-current={event.year === '2025' ? 'step' : undefined}
              onClick={(e) => openModal(event, e)}
              onKeyDown={(e) => handleKeyNav(e, index)}
            >
              {event.year}
            </button>
          </li>
        ))}
      </ul>

      {modalOpen && selectedEvent && (
        <AccessibleModal
          open={modalOpen}
          onClose={closeModal}
          content={selectedEvent}
        />
      )}
    </section>
  );
}
