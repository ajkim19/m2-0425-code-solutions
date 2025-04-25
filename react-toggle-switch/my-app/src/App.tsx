import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import './App.css';

const switchState = [
  {
    switchStatus: 'flex slider is-on',
    label: 'On',
  },
  {
    switchStatus: 'flex slider is-off',
    label: 'Off',
  },
];

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === 1) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }
  return (
    <>
      <ToggleSwitch
        switchStatus={switchState[index].switchStatus}
        onClick={handleClick}
        label={switchState[index].label}
      />
    </>
  );
}

export default App;

/// ///////////////////////////////////////////////////////

// import './App.css';
// import { ToggleSwitch } from './ToggleSwitch';

// export function App() {
//   return <ToggleSwitch />;
// }
