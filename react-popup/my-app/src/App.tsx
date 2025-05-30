import { useRef, useState } from 'react';
import Popup from './Popup';

export default function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p>Paragraph Above Popup</p>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>Paragraph Below Popup</p>
      <Popup isOpen={isOpen} />
    </>
  );
}
