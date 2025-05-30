import { useRef } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modal.current?.showModal();
  };
  const closeModal = () => {
    modal.current?.close();
  };
  const handleDelete = () => {
    alert('Item deleted!');
    modal.current?.close();
  };

  return (
    <>
      <button onClick={openModal}>Delete Me!</button>
      <Modal>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
