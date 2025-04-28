import { useState } from 'react';
import './RotatingBanner.css';

function Banner({ item }: { item: string }) {
  return <div className="banner">{item}</div>;
}

function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="flex prev-btn" onClick={onClick}>
      Prev
    </button>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="flex next-btn" onClick={onClick}>
      Next
    </button>
  );
}

function Indicators({
  onClick,
  count,
  current,
}: {
  onClick: () => void;
  count: number;
  current: number;
}) {
  return Array.from({ length: count }, (_: any, index: number) => (
    <button
      className="indicator"
      index={index}
      style={{ backgroundColor: index === current ? 'lightblue' : 'white' }}
      onClick={onClick}>
      {index}
    </button>
  ));
}

export function RotatingBanner({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevNum() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function nextNum() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleSelect(e: React.MouseEvent<HTMLButtonElement>) {
    const newIndex = e.currentTarget.getAttribute('index');
    if (!newIndex) throw new Error('newIndex does not exist');
    setCurrentIndex(Number(newIndex));
  }

  return (
    <div className="flex rotating-banner">
      <Banner item={items[currentIndex]} />
      <PrevButton onClick={prevNum} />
      <div className="flex indicators">
        <Indicators
          onClick={handleSelect}
          count={items.length}
          current={currentIndex}
        />
      </div>
      <NextButton onClick={nextNum} />
    </div>
  );
}
