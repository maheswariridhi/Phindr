import { useParams } from "react-router-dom";

export function useURLID() {
  const { productId } = useParams();
  return productId;
}