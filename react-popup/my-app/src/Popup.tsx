import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  positionTo?: HTMLElement | null;
  opacity?: number;
}

export default function Popup({
  isOpen,
  onClose,
  children,
  positionTo,
  opacity,
}: Props) {
  if (!isOpen) return null;

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  return createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: `rgba(159, 159, 159 ${opacity})`,
          zIndex: 999,
          pointerEvents: 'auto',
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'absolute',
          top,
          left,
          transform: 'translate(-50%, 0)',
          zIndex: 1000,
          background: 'rgb(159, 159, 159)',
          border: '1px solid #ccc',
          padding: '5px',
          boxShadow: '0 2px 10px rgba(159, 159, 159,0.2)',
        }}>
        {children}
      </div>
    </>,
    document.body
  );
}
