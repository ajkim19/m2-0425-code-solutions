import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);

  setIsPlaying(!isPlaying);

  return (
    <div className="stopwatch">
      <div className="timepiece">
        <div className="time-elapsed"></div>
      </div>
      <div className="pause-play">
        {isPlaying} ? <FaPlay /> : <FaPause />
      </div>
    </div>
  );
}
