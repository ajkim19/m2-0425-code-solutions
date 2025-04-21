import { useState, FormEvent } from 'react';

type User = {
  username: string;
  password: string;
};

type Prop = {
  user?: User;
};

export function UserForm({ user }: Prop) {
  const [usernameState, setUsernameState] = useState(user?.username ?? '');
  const [passwordState, setPasswordState] = useState(user?.password ?? '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventTarget = e.currentTarget as HTMLFormElement;
    const formData = new FormData(eventTarget);
    const userInfo = Object.fromEntries(formData) as User;
    console.log('User:', userInfo);
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
