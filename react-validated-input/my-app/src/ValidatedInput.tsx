import { ChangeEvent } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

type Prop = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  acceptance: number;
  errorClass: string;
  errorMessage: string;
};

export function ValidatedInput({
  onChange,
  acceptance,
  errorClass,
  errorMessage,
}: Prop) {
  return (
    <div className="flex container">
      <label>Password</label>
      <div className="flex ps-input">
        <input onChange={onChange} type="password" />
        {acceptance === 1 ? (
          <FaTimes style={{ color: 'red', margin: '5px 10px' }} />
        ) : acceptance === 2 ? (
          <FaCheck style={{ color: 'green', margin: '5px 10px' }} />
        ) : (
          <div></div>
        )}
      </div>
      <div className={errorClass}>{errorMessage}</div>
    </div>
  );
}
