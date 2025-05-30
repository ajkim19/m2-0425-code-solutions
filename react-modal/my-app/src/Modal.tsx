import React, { useRef, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export default function Modal({ children, isOpen }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = modal.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  return <dialog ref={modal}>{children}</dialog>;
}
