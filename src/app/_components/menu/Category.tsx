"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import iconArrow from "../../../../public/assets/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";

interface Props {
  image: string;
  link: string;
}

export default function Category({ image, link }: Props) {
  const router = useRouter();

  return (
    <Link href={`/${link}`}>
      <div
        className={`flex flex-col justify-center items-center bg-gray py-5 mx-8 rounded-lg md:mx-0 md:relative md:pt-28 md:justify-end`}
        data-aos="fade"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="md:absolute md:bottom-16">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full  max-h-64 object-contain"
            alt="category image"
          />
        </div>

        <p className="font-bold leading-5 tracking-wider text-black uppercase pb-2">
          {link}
        </p>

        <button className="flex justify-center items-center gap-3">
          <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50 hover:text-orange">
            Shop
          </p>
          <div>
            <Image
              src={iconArrow}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="arrow icon"
            />
          </div>
        </button>
      </div>
    </Link>
  );
}
