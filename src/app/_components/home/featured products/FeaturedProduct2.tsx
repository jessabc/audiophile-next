"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeaturedProduct2() {
  const router = useRouter();

  return (
    <>
      <div
        className={`relative mx-8 md:mx-12 lg:mx-32`}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <Image
          src={"/assets/home/mobile/image-speaker-zx7.jpg"}
          width="0"
          height="0"
          sizes="100vw"
          alt="ZX7 Speaker"
          className="w-full rounded-lg md:hidden lg:hidden"
        />
        <Image
          src={"/assets/home/tablet/image-speaker-zx7.jpg"}
          width="0"
          height="0"
          sizes="100vw"
          alt="ZX7 Speaker"
          className=" w-full  rounded-lg hidden md:block lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-speaker-zx7.jpg"}
          width="0"
          height="0"
          sizes="100vw"
          alt="ZX7 Speaker"
          className="w-full rounded-lg hidden lg:block"
        />

        <div className="absolute top-20 left-5 flex flex-col gap-10 md:left-10">
          <p className="font-bold text-2xl leading-9 tracking-wider uppercase text-black md:text-4xl ">
            ZX7 SPEAKER
          </p>
          <button
            className="font-bold text-sm leading-5 tracking-wide uppercase text-black border  w-40 h-12 cursor-pointer hover:bg-black hover:text-white  lg:bg-black lg:text-white hover:lg:bg-white hover:lg:text-black"
            onClick={() => router.push("/speakers/zx7-speaker")}
          >
            see product
          </button>
        </div>
      </div>
    </>
  );
}
