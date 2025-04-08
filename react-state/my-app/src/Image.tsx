import { useState } from 'react';

type Props = {
  srcs: string[];
};

export function Image({ srcs }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleClick() {
    if (imageIndex >= srcs.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          src={srcs[imageIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
