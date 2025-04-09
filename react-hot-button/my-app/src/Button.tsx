type Props = {
  tempClass: string;
  onClick: () => void;
};
export function Button({ tempClass, onClick }: Props) {
  return (
    <button onClick={onClick} className={tempClass}>
      Hot Button
    </button>
  );
}
