import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [pausePlayIcon, setPausePlayIcon] = useState(<FaPlay />);
  const [intervalID, setIntervalId] = useState<any | undefined>(undefined);
  const increment = () => {
    setCount((count) => count + 1);
  };

  function pausePlay() {
    if (isPlaying) {
      const newIntervalID = setInterval(increment, 1000);
      setIntervalId(newIntervalID);
    } else {
      clearInterval(intervalID);
    }
    setIsPlaying(!isPlaying);
    setPausePlayIcon(isPlaying ? <FaPause fa-10x /> : <FaPlay fa-10x />);
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
        {pausePlayIcon}
      </div>
    </div>
  );
}
