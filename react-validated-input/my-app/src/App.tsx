import { useState, ChangeEvent } from 'react';
import { ValidatedInput } from './ValidatedInput';
import './App.css';

const digits = /[0-9]/;
const capLetters = /[A-Z]/;
const specialChars = /[!@#$%^&*()]/;

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptance, setAcceptance] = useState(0);
  const [errorClass, setErrorClass] = useState('error-message hidden');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorClass('error-message');
    const psMessage = event.target.value;
    const hasDigit = digits.test(psMessage);
    const hasCapLetter = capLetters.test(psMessage);
    const hasSPChar = specialChars.test(psMessage);
    if (psMessage.length === 0) {
      setAcceptance(1);
      setErrorMessage('A password is required.');
    } else if (psMessage.length < 8) {
      setAcceptance(1);
      setErrorMessage('Your password is too short.');
    } else {
      if (hasDigit === false) {
        setAcceptance(1);
        setErrorMessage('Your password must contain a number.');
      } else if (hasCapLetter === false) {
        setAcceptance(1);
        setErrorMessage('Your password must contain a capital letter.');
      } else if (hasSPChar === false) {
        setAcceptance(1);
        setErrorMessage(
          'Your password must contain a special character (i.e. !, @, #, $, %, ^, &, *, (, or )).'
        );
      } else {
        setAcceptance(2);
        setErrorClass('error-message hidden');
      }
    }
  }

  return (
    <>
      <ValidatedInput
        onChange={onChange}
        errorMessage={errorMessage}
        acceptance={acceptance}
        errorClass={errorClass}
      />
    </>
  );
}

export default App;

/// ///////////////////////////////////////////////////////

// import { ValidatedInput } from './ValidatedInput';

// export function App() {
//   return (
//     <div>
//       <ValidatedInput />
//     </div>
//   );
// }
