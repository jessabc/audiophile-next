"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeaturedProduct1() {
  const router = useRouter();

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center bg-orange  mx-8 rounded-lg gap-5 px-5 py-14 text-center md:mx-12 md:gap-10 md:py-10 lg:mx-32 lg:grid lg:grid-cols-2 lg:p-0 lg:gap-0 relative lg:pt-10`}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="w-1/2 md:w-1/3 lg:w-3/4 lg:self-end lg:justify-self-center z-10">
          <Image
            src={"/assets/home/mobile/image-speaker-zx9.png"}
            width="0"
            height="0"
            sizes="100vw"
            alt="ZX9 Speaker"
            className="w-full md:hidden lg:hidden "
          />
          <Image
            src={"/assets/home/tablet/image-speaker-zx9.png"}
            width="0"
            height="0"
            sizes="100vw"
            alt="ZX9 Speaker"
            className="w-full hidden md:block lg:hidden "
          />
          <Image
            src={"/assets/home/desktop/image-speaker-zx9.png"}
            width="0"
            height="0"
            sizes="100vw"
            alt="ZX9 Speaker"
            className="w-full hidden lg:block lg:object-scale-down lg:h-72"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 px-5 text-center md:gap-10  lg:items-start lg:text-left lg:gap-5 lg:p-10 z-10">
          <p className="font-bold text-4xl leading-10 tracking-widest uppercase text-white md:text-6xl  md:px-40 lg:text-5xl lg:p-0">
            ZX9 SPEAKER
          </p>
          <p
            className="font-medium leading-7 text-white opacity-75 md:px-40
                    lg:p-0"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button
            className="font-bold text-sm leading-5 tracking-wide uppercase text-white bg-black w-40 h-12 cursor-pointer hover:bg-white hover:text-black"
            onClick={() => router.push("/speakers/zx9-speaker")}
          >
            see product
          </button>
        </div>
      </div>
    </>
  );
}
