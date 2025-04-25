import './ToggleSwitch.css';

type Props = {
  switchStatus: string;
  onClick: () => void;
  label: string;
};

export function ToggleSwitch({ switchStatus, onClick, label }: Props) {
  return (
    <div className="flex wrapper">
      <div className={switchStatus}>
        <div className="switch" onClick={onClick}></div>
      </div>
      <span className="label">{label}</span>
    </div>
  );
}

/// //////////////////////////////////////////////////////

// import { useState } from 'react';
// import './ToggleSwitch.css';

// export function ToggleSwitch() {
//   const [isOn, setIsOn] = useState(false);

//   const label = isOn ? 'ON' : 'OFF';
//   const modifierClass = isOn ? 'is-on' : '';
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className={`toggle-switch ${modifierClass}`}>
//       <div className="slider">
//         <div className="switch"></div>
//       </div>
//       <span className="state-label">{label}</span>
//     </div>
//   );
// }
