"use client";

import Product from "@/components/product";
import { ProductType } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <section className="flex flex-col space-y-12 my-10">
        <h1 className="text-5xl font-bold text-center">SHOP DEALS</h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
