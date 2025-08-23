// AccessibleModal.tsx
import { useEffect, useRef } from 'react';
import { trapFocus } from './accessibilityUtils';

export function AccessibleModal({ open, onClose, content }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    trapFocus(modalRef.current);

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', escHandler);
    modalRef.current.querySelector('button')?.focus();

    return () => {
      window.removeEventListener('keydown', escHandler);
    };
  }, [open]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
      style={{
        display: open ? 'block' : 'none',
        background: 'white',
        padding: '1rem',
        border: '2px solid #0077cc',
        borderRadius: '8px',
      }}
    >
      <h2 id="modalTitle">{content.title}</h2>
      <p id="modalDesc">{content.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
type ModalProps = {
  open: boolean;
  onClose: () => void;
  content: {
    title: string;
    description: string;
  };
};
