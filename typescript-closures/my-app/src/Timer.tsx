import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      // This function references `time` so it closes around `time`
      setTime(time + 1);
      console.log(`Time is: ${time}`);
    }, 1000);
    // The following arrow function references `timerId` so it closes around
    return () => clearTimeout(timerId);
  }, [time]);

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
