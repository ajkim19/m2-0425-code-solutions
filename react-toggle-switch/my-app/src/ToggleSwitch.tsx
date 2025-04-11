import './ToggleSwitch.css';

export function ToggleSwitch() {
  return (
    <div className="flex wrapper">
      <div className="flex slider is-on">
        <div className="switch"></div>
      </div>
      <span className="label"></span>
    </div>
  );
}
