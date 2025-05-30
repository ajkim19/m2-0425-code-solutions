import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
}

export default function Popup({ isOpen }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div className="menu-wrapper">
      <ul className="menu">
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
        <li className="item">Item 4</li>
      </ul>
    </div>,
    document.body
  );
}
