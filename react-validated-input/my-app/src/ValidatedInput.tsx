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

/// ///////////////////////////////////////////////////////////////////

// import { useState } from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';

// // Note on styles:
// // This component uses `Tailwind`, which is imported in `index.html`.

// export function ValidatedInput() {
//   // The current value of the password.
//   // It will be `undefined` until the user types (makes it dirty).
//   const [password, setPassword] = useState<string>();

//   /**
//    * Validates a password according to the password rules.
//    * The password will be considered valid if it is `undefined` so
//    * that `undefined` can be used to indicate the field is not dirty.
//    */
//   function validate(password: string | undefined): string | undefined {
//     if (password === undefined) return undefined;
//     const trimmed = password.trim();
//     if (!trimmed) return 'A password is required.';
//     if (trimmed.length < 8) return 'Your password is too short.';
//     if (!/\d/g.test(trimmed)) return 'Password must contain a number.';
//     if (!/[A-Z]/g.test(trimmed))
//       return 'Password must contain a capital letter.';
//     if (!/[a-z]/g.test(trimmed))
//       return 'Password must contain a lowercase letter.';
//     if (!/[!@#$%^&*()]/g.test(trimmed))
//       return 'Password must contain a special character.';
//     return undefined;
//   }

//   const error = validate(password);
//   const validationIcon = error ? (
//     <FaTimes color="red" />
//   ) : (
//     <FaCheck color="green" />
//   );
//   return (
//     <div className="flex w-full m-12">
//       <label>
//         <span className="text-gray-700">Password:</span>
//         <div className="relative w-80">
//           <input
//             value={password ?? ''}
//             type="password"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded"
//           />
//           <div className="z-10 absolute inset-y-0 right-0 flex items-center">
//             {validationIcon}
//           </div>
//         </div>
//         <div className="p-1 text-red-700">{error ?? <span>&nbsp;</span>}</div>
//       </label>
//     </div>
//   );
// }
