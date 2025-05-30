import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
}

export default function Popup({ isOpen }: Props) {
  if (!isOpen) return null;

  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  return createPortal(
    <>
      <div
        style={{
          position: 'absolute',
          top,
          left,
          transform: 'translate(-50%, 0)',
          zIndex: 1000,
          background: 'white',
          border: '1px solid #ccc',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <div className="wrapper">
          <ul className="menu">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </div>
      </div>
    </>,
    document.body
  );
}
