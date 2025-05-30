import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  return <dialog ref={modal}>{children}</dialog>;
}
