import { useAppSelector } from "@/app/_redux/hooks";

export function useGetTotal() {
  const cart = useAppSelector((state) => state.cart.value);

  function getTotal() {
    let total = cart.reduce((acc, curr) => {
      return acc + curr.quantity! * curr.price;
    }, 0);

    return total;
  }

  return getTotal();
}
