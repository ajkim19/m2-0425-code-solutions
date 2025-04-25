import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalId] = useState<any | undefined>(undefined);

  function pausePlay() {
    if (isPlaying) {
      const newIntervalID = setInterval(
        () => setCount((count) => count + 1),
        1000
      );
      setIntervalId(newIntervalID);
    } else {
      clearInterval(intervalID);
    }
    setIsPlaying(!isPlaying);
  }

  function resetTime() {
    if (isPlaying) {
      setCount(0);
      setIntervalId(undefined);
    }
  }

  return (
    <div className="flex stopwatch">
      <div className="flex timepiece">
        <div className="time-elapsed" onClick={resetTime}>
          {count}
        </div>
      </div>
      <div className="pause-play" onClick={pausePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
}
