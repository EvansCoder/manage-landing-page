import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"

function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center py-10">
        <div className="logo font-bold text-xl">
          <Link href="/">
            <a>
            <Image src={logo} />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center space-x-5 text-darkBlue">
          <Link href="/">
            <a className="hover:text-lightGray">Pricing</a>
          </Link>

          <Link href="/">
            <a className="hover:text-lightGray">Product</a>
          </Link>

          <Link href="/">
            <a className="hover:text-lightGray">About Us</a>
          </Link>

          <Link href="/">
            <a className="hover:text-lightGray">Careers</a>
          </Link>

          <Link href="/">
            <a className="hover:text-lightGray">Community</a>
          </Link>
        </div>
        <div  className="hidden lg:block">
          <Link href="/">
            <a className="py-3 px-5 my-2  font-semibold text-white bg-brightRed rounded-full shadow-md shadow-brightRed/50 hover:opacity-75">
              Get Started
            </a>
          </Link>
        </div>
        <div  className="lg:hidden cursor-pointer">
          <GiHamburgerMenu className="scale-120"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;
