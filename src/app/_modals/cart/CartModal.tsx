"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/app/_redux/hooks";
import CartProduct from "../../_components/cart/CartProduct";
import { removalAllFromCart } from "@/app/_redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useGetTotal } from "@/app/_hooks/useGetTotal";
import iconCart from "../../../../public/assets/shared/desktop/icon-cart.svg";
import { useNumItemsInCart } from "@/app/_hooks/useNumItemsInCart";

export default function CartModal() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart.value);
  const cartElements = cart.map((product) => (
    <CartProduct key={product.id} product={product} />
  ));

  function checkout() {
    router.push("/checkout");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="">
          <Image
            src={iconCart}
            alt="cart icon"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="flex flex-col gap-3 ">
            {/* cart num and remove all line */}
            <div className="flex justify-between">
              <p className="font-bold tracking-wider uppercase text-black">
                Cart ({useNumItemsInCart()})
              </p>

              <Dialog.Close asChild>
                <button
                  type="button"
                  className="font-medium leading-6 underline text-black opacity-50"
                  onClick={() => dispatch(removalAllFromCart())}
                >
                  Removal All
                </button>
              </Dialog.Close>
            </div>

            {cartElements}

            <div className="flex justify-between">
              <p className="font-medium leading-6 text-black opacity-50">
                Total
              </p>
              <p className="font-bold text-lg leading-6 uppercase, text-black">
                ${new Intl.NumberFormat().format(useGetTotal())}
              </p>
            </div>

            <Dialog.Close asChild>
              <div className="">
                <button
                  className="font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-full h-12 hover:bg-lightOrange"
                  onClick={checkout}
                >
                  checkout
                </button>
              </div>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
