"use client";
import Product from "@/app/_components/product/Product";
import Menu from "@/app/_components/menu/Menu";
import { IProduct } from "@/app/interfaces";
import Head from "next/head";
import useGetProducts from "@/app/_hooks/useGetProducts";

export default function Earphones() {
  const products = useGetProducts();

  const earphones = products.filter((item) => item.category === "earphones");

  const earphoneElements = earphones.map((item: IProduct, index: number) => (
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
      <Head>
        <title>Earphones</title>
      </Head>

      <div className="bg-black ">
        <h2 className="font-bold text-3xl text-center tracking-wider uppercase text-white py-10">
          Earphones
        </h2>
      </div>

      <div className="px-8 md:px-12 lg:px-32 mt-20 mb-52">
        {earphoneElements}
      </div>

      <Menu />
    </main>
  );
}
