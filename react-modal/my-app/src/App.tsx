import { useRef } from 'react';
import './App.css';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modal.current?.showModal();
  };
  const closeModal = () => {
    modal.current?.close();
  };

  return (
    <>
      <button onClick={openModal}>Delete Me!</button>
      <dialog ref={modal}>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={closeModal}>Cancel</button>
        <button>Delete</button>
      </dialog>
    </>
  );
}

export default App;
