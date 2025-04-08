import './Image.css';

type Props = {
  src: string;
};

export function Image(props: Props) {
  const { src } = props;
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
