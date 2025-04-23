// import { useState, FormEvent } from 'react';

// export function RegistrationFormControlled() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Controlled State:', { username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
