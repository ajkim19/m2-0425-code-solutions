type Props = {
  clickNum: string;
};
export function Caption({ clickNum }: Props) {
  return <h3>Clicks: {clickNum}</h3>;
}
