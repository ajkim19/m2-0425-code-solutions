import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const handleDelete = () => {
    alert('Deleted!');
    closeDialog();
  };

  return (
    <>
      <button onClick={openDialog}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={closeDialog}>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={closeDialog}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
