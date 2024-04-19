"use client";
import { useRouter } from "next/navigation";

export default function HeroProduct() {
  const router = useRouter();
  return (
    <div
      className=" bg-black h-[calc(100vh-5rem)] bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-no-repeat bg-center flex flex-col"
      data-aos="fade"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div className="text-white px-8  flex flex-col items-center justify-center h-full gap-4 md:px-32 md:gap-6 lg:items-start lg:w-1/2 ">
        <p className="text-sm leading-5 text-center tracking-widest uppercase text-white opacity-50">
          NEW PRODUCT
        </p>
        <p className="font-bold text-4xl leading-10 text-center tracking-wider uppercase md:text-6xl lg:text-5xl  lg:text-left">
          XX99 MARK II HEADPHONES
        </p>
        <p className="font-semibold text-center text-white opacity-75 leading-loose my-3 lg:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          onClick={() => router.push(`/headphones/xx99-mark-one-headphones`)}
          className="font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange   "
        >
          see product
        </button>
      </div>
    </div>
  );
}
