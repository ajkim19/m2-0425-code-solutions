import { useState } from 'react';

type Props = {
  descriptions: string[];
};

export function Description({ descriptions }: Props) {
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  function handleClick() {
    if (descriptionIndex >= descriptions.length - 1) {
      setDescriptionIndex(0);
    } else {
      setDescriptionIndex(descriptionIndex + 1);
    }
  }
  return <p onClick={handleClick}>{descriptions[descriptionIndex]}</p>;
}
