import { useRef } from 'react';
import './App.css';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button>Delete Me!</button>
      <dialog ref={modal}>
        <p>Are you sure you want to delete?</p>
        <button>Cancel</button>
        <button>Delete</button>
      </dialog>
    </>
  );
}

export default App;
