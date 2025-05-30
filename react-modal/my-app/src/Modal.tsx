import React, { useRef, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modal.current) return;

    if (isOpen) {
      if (!modal.current.open) modal.current.showModal();
    } else {
      if (modal.current.open) modal.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modal} onClose={onClose}>
      {children}
    </dialog>
  );
}
