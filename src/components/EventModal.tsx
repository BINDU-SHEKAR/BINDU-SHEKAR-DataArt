import type { Event } from '../types/types';

interface Props {
  event: Event | null;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: Props) => {
  if (!event) return null;

  return (
    <div
      id="modal"
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        border: '1px solid #005f73',
        padding: '1rem',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <span
          style={{ cursor: 'pointer', float: 'right', fontSize: '20px' }}
          onClick={onClose}
        >
          &times;
        </span>
        <h2>{event.year} - {event.title}</h2>
        <img src={event.imageURL} alt={event.title} style={{ maxWidth: '100%' }} />
        <p>{event.description}</p>
        <p><strong>Category:</strong> {event.category}</p>
      </div>
    </div>
  );
};

export default EventModal;
