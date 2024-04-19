"use client";
import React, { useState } from "react";
import { IProduct, ProductInCart } from "../../interfaces";
import Counter from "./Counter";
import { useAppSelector, useAppDispatch } from "@/app/_redux/hooks";
import {
  addProductToCart,
  updateProductQuantityInCart,
} from "@/app/_redux/features/cart/cartSlice";
import OtherProductYouMayLike from "./OtherProductYouMayLike";
import ItemAddedModal from "../../_modals/itemAdded/ItemAddedModal";
import Image from "next/image";
import { FadeInLeftSection } from "../../_animations/FadeInLeftSection";
import { FadeInRightSection } from "../../_animations/FadeInRightSection";
import { FadeInBottomSection } from "../../_animations/FadeInBottomSection";
import { useRouter } from "next/navigation";

interface Props {
  product: IProduct;
}

export default function ProductDetail({ product }: Props) {
  const [count, setCount] = useState(0);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.value);

  const {
    image,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
  } = product;

  const featuresEl = features
    ?.split("\n\n")
    .map((paragraph: string, index: number) => (
      <p key={index} className="mb-3">
        {paragraph}
      </p>
    ));

  const youMayAlsoLikeElements = others?.map((product, index) => (
    <OtherProductYouMayLike key={index} product={product} />
  ));

  function addToCart() {
    const productAlreadyInCart =
      cart.length > 0
        ? cart.find((cartProduct) => cartProduct.slug === product.slug)
        : null;

    if (productAlreadyInCart) {
      const updatedCart = cart.map((cartProduct) =>
        cartProduct.slug === product.slug
          ? { ...product, quantity: count }
          : product
      );
      dispatch(updateProductQuantityInCart(updatedCart as ProductInCart[]));
    } else {
      dispatch(addProductToCart({ ...product, quantity: count }));
    }
  }

  function goBack() {
    router.back();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  return (
    <div className="px-8 md:px-12 lg:px-32 ">
      {/* go back button link */}
      <button
        type="button"
        className=" fade-in font-medium text-black opacity-50 py-5"
        onClick={goBack}
      >
        Go Back
      </button>

      <div>
        <div className="fade-in md:flex md:gap-5 lg:gap-20">
          <div className="md:w-1/2">
            <Image
              src={`${image.mobile}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto md:hidden lg:hidden"
              alt={`${name} image`}
            />
            <Image
              src={`${image.tablet}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto hidden md:block lg:hidden"
              alt={`${name} image`}
            />
            <Image
              src={`${image.desktop}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto hidden md:hidden lg:block"
              alt={`${name} image`}
            />
          </div>

          <div className=" flex flex-col gap-5 py-5 md:w-1/2 md:justify-center md:gap-10 lg:pr-20">
            <p className="font-bold text-2xl tracking-wide pr-40 md:text-4xl">
              {name}
            </p>
            <p className="font-medium leading-6 text-black opacity-50">
              {description}
            </p>
            <p className="font-bold text-lg  uppercase text-black">
              {" "}
              ${" "}
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(price)}
            </p>

            <div className="flex gap-3">
              <div className="w-1/2">
                <Counter count={count} setCount={setCount} />
              </div>

              <ItemAddedModal
                addToCart={addToCart}
                productName={product.name}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex lg:gap-10 lg:mb-20">
          <div
            className="lg:w-2/3 "
            data-aos="fade-right"
            // data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-5 mt-10">
              <p className=" font-bold text-2xl tracking-wide uppercase text-black md:text-3xl">
                Features:
              </p>
              <div className="font-medium leading-6 text-black opacity-50 lg:pr-10">
                {featuresEl}
              </div>
            </div>
          </div>

          {/* in the box */}
          <div
            className="flex flex-col gap-5 mt-10 mb-20 md:flex-row lg:flex-col "
            data-aos="fade-left"
            // data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <p className=" font-bold text-2xl tracking-wide uppercase text-black md:text-3xl md:w-1/2 lg:w-full">
              in the box
            </p>
            <ul className="list-none md:w-1/2 lg:w-full">
              {includes.map((item, index) => (
                <li key={index} className="my-2 lg:mt-0 lg:mb-5">
                  <span className="font-bold text-orange">
                    {item?.quantity}x{" "}
                  </span>
                  <span className="font-medium text-black opacity-50 ml-2">
                    {" "}
                    {item?.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <div className=" flex flex-col md:flex-row gap-5">
            <div
              className="md:w-1/2 flex flex-col gap-5 md:justify-between  "
              data-aos="fade-right"
              // data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image
                src={`${gallery?.first.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                alt={`${name} image`}
              />

              <Image
                src={`${gallery?.second.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                alt={`${name} image`}
              />
            </div>

            <div
              className="md:w-1/2"
              data-aos="fade-left"
              // data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image
                src={`${gallery?.third.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                alt={`${name} image`}
              />
            </div>
          </div>
        </div>

        <div className="mb-44">
          <p className="font-bold text-2xl tracking-wide uppercase text-black mb-12 text-center">
            you may also like{" "}
          </p>
          <div className="md:flex md:gap-5">{youMayAlsoLikeElements}</div>
        </div>
      </div>
    </div>
  );
}
