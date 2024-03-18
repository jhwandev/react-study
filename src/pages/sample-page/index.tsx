import { useParams } from "react-router-dom";

export default function SamplePage() {
  const { opt, req } = useParams();
  return <div data-page="sample-page">{`${opt}, ${req}`}</div>;
}
