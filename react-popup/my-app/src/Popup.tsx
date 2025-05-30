import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  positionTo?: HTMLElement | null;
  opacity?: number;
}

export default function Popup({ isOpen, onClose, positionTo, opacity }: Props) {
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
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
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
        }}
        onClick={onClose}>
        <div className="wrapper">
          <ul className="menu">
            <li id="item">Item 1</li>
            <li id="item">Item 2</li>
            <li id="item">Item 3</li>
            <li id="item">Item 4</li>
          </ul>
        </div>
      </div>
    </>,
    document.body
  );
}
