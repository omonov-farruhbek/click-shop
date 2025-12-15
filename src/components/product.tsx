"use client";
import { ProductType } from "@/interfaces";
import Link from "next/link";
import { FC } from "react";
import { toast } from "react-toastify";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];
    const isExistProduct = products?.find((c) => c.id === product?.id);

    if (isExistProduct) {
      const updatedData = products?.map((c) => {
        if (c.id === product?.id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }
        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
    toast("Product added to your bag!!");
  };
  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border"
    >
      <div className="relative max-h-80 flex-1">
        <CustomImage product={product} fill />
      </div>
      <h3 className="text-center tracking-widest mt-6 text-indigo-500 text-base font-medium title-font">
        {product.category}
      </h3>
      <p className="leading-relaxed text-base text-center">
        Price: {product.price} $
      </p>
      <button
        className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"
        onClick={handleClick}
      >
        Add to bag
      </button>
    </Link>
  );
};

export default Product;
