import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [pausePlayIcon, setPausePlayIcon] = useState(<FaPlay />);
  const [intervalID, setIntervalId] = useState<any | undefined>(undefined);
  const increment = () => {
    setCount((count) => count + 1);
    console.log('count', count);
  };

  function pausePlay() {
    setIsPlaying(!isPlaying);
    setPausePlayIcon(isPlaying ? <FaPause /> : <FaPlay />);
    if (isPlaying) {
      const newIntervalID = setInterval(increment, 1000);
      setIntervalId(newIntervalID);
    } else {
      clearInterval(intervalID);
    }
  }
  return (
    <div className="stopwatch">
      <div className="timepiece">
        <div className="time-elapsed">{count}</div>
      </div>
      <div className="pause-play" onClick={pausePlay}>
        {pausePlayIcon}
      </div>
    </div>
  );
}
