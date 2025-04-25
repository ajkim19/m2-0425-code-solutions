// import { FormEvent } from 'react';

// export function RegistrationFormUncontrolled() {
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const eventTarget = e.currentTarget as HTMLFormElement;
//     const formData = new FormData(eventTarget);
//     const { username, password } = Object.fromEntries(formData);
//     console.log('Uncontrolled State:', { username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" placeholder="Username" />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" placeholder="Password" />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
