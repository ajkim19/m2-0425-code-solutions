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
