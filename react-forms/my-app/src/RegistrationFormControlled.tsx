import { useState, FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [usernameState, setUsernameState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventTarget = e.currentTarget as HTMLFormElement;
    const formData = new FormData(eventTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={usernameState}
          onChange={(e) => setUsernameState(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
