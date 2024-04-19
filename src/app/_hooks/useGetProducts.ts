"use client";
import { useAppSelector } from "../_redux/hooks";

export default function useGetProducts() {
  const products = useAppSelector((state) => state.products.value);

  return products;
}
