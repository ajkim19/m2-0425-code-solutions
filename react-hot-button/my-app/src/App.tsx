import { useState } from 'react';
import { Button } from './Button';
import { Caption } from './Caption';
import './App.css';

export default function App() {
  const tempClasses = ['cold', 'cool', 'tepid', 'warm', 'hot', 'nuclear'];
  const [clickIndex, setClickIndex] = useState(0);
  const [tempClassIndex, setTempClassIndex] = useState(0);

  function handleClick() {
    setClickIndex(clickIndex + 1);
    if (
      clickIndex > 0 &&
      clickIndex % 3 === 0 &&
      tempClassIndex < tempClasses.length - 1
    ) {
      setTempClassIndex(tempClassIndex + 1);
    }
  }
  return (
    <>
      <Button onClick={handleClick} tempClass={tempClasses[tempClassIndex]} />
      <Caption clickNum={clickIndex.toString()} />
    </>
  );
}
