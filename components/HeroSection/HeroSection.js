import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/images/illustration-intro.svg";
import pattern from "../../assets/images/bg-tablet-pattern.svg";

function HeroSection() {
  return (
    <div className="block  md:flex justify-between ">
      <div className="pt-12">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-darkBlue font-extrabold  pt-8 leading-12">
          Bring everyone <br />
          together to build <br />
          better products
        </h1>
        <p className="text-lightGray my-4 leading-7">
          Manage makes it simpler for software teams <br /> to plan day-to-day
          tasks while keeping the <br /> larger teams picture in view.
        </p>
        <div className="my-7">
          <Link href="/">
            <a className="py-3 px-5 mt-8  font-semibold text-white bg-brightRed rounded-full shadow-md shadow-brightRed/50 hover:opacity-75">
              Get Started
            </a>
          </Link>
        </div>
      </div>
      <div className="py-3 relative">
        <Image src={heroImage} />
        <div className="fixed top-top right-right z-minus-1 scale-75">
          <Image src={pattern} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

