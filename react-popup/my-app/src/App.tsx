import { useState } from 'react';
import Popup from './Popup';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p>Paragraph Above Popup</p>
      <button onClick={() => setIsOpen(!isOpen)}>Pop up!</button>
      <p>Paragraph Below Popup</p>
      <Popup isOpen={isOpen} />
    </>
  );
}
