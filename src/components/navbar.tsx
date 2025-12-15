"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow z-50">
      <div className="relative max-w-7xl mx-auto flex items-center max-xl:px-4 py-2">
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden absolute left-4"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu size={24} />}
        </button>

        <Link href="/" className="mx-auto sm:mx-0 sm:mr-auto flex items-center">
          <Image src="/next.svg" alt="logo" width={150} height={30} />
        </Link>

        <div className="hidden sm:flex items-center space-x-6 text-sm font-medium">
          <nav className="flex items-center">
            <Link
              href="/"
              className="mr-5 hover:scale-105 hover:font-semibold transition-all duration-300"
            >
              Home page
            </Link>
            <Link
              href="/products"
              className="mr-5 hover:scale-105 hover:font-semibold transition-all duration-300"
            >
              All products
            </Link>
          </nav>

          <Link href="/shopping-cart">
            <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black transition-all">
              My bag
            </button>
          </Link>
        </div>
        <Link href="/shopping-cart">
          <button className="sm:hidden button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black transition-all">
            My bag
          </button>
        </Link>
      </div>

      {open && (
        <div className="sm:hidden border-t absolute top-16 left-0 right-0 bg-white px-4 py-3 space-y-3 z-10 shadow">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block font-medium hover:underline"
          >
            Home page
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="block font-medium hover:underline"
          >
            All products
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
