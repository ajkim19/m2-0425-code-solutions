import './Header.css';

type Props = {
  header: string;
};

export function Header(props: Props) {
  const { header } = props;
  return <h1>{header}</h1>;
}
