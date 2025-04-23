import { useState, FormEvent } from 'react';

type User = {
  username: string;
  password: string;
};

type Prop = {
  user?: User;
};

export function UserForm({ user }: Prop) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');
  const isCreating = user === undefined;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isCreating) {
      console.log('Created', { username, password });
    } else {
      user.username = username;
      user.password = password;
      console.log('Edited', user);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">{isCreating ? 'Create' : 'Update'}</button>
    </form>
  );
}
