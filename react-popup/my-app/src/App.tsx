import { useRef, useState } from 'react';
import Popup from './Popup';

export default function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>Paragraph Above Popup</p>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>Paragraph Below Popup</p>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={() => setIsOpen(false)}
        opacity={0.5}>
        <div className="menu-wrapper">
          <ul className="menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      </Popup>
    </div>
  );
}
