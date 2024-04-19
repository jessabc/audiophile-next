"use client";
import Product from "@/app/_components/product/Product";
import Menu from "@/app/_components/menu/Menu";
import { IProduct } from "@/app/interfaces";
import useGetProducts from "@/app/_hooks/useGetProducts";

export default function Headphones() {
  const products = useGetProducts();

  const headphones = products.filter((item) => item.category === "headphones");
  const headphoneElements = headphones?.map((item: IProduct, index: number) => (
    <Product key={item.id} item={item} index={index} />
  ));

  return (
    <main
      className=""
      data-aos="fade"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div className="bg-black ">
        <h2 className="font-bold text-3xl text-center tracking-wider uppercase text-white py-10">
          Headphones
        </h2>
      </div>

      <div className="px-8 md:px-12 lg:px-32 mt-20 mb-52">
        {headphoneElements}
      </div>

      <Menu />
    </main>
  );
}
