import React from "react";

function About() {
  return (
    <div className="w-full grid md:grid-cols-2 md:gap-14 ">
      <div className="pt-12">
        <h1 className="text-2xl md:text-3xl text-darkBlue font-semibold  pt-8 leading-12">
          What is different about <br /> manage?
        </h1>
        <p className="text-lightGray my-4 leading-7">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our <br /> software is tailor-made for modern digital{" "}
          <br />
          product teams.
        </p>
      </div>
      <div className="">
        <div className="flex gap-5">
          <div className="bg-brightRed rounded-full py-4 px-6 h-5 w-5 flex items-center justify-center text-white">
            01
          </div>
          <div>
            <h2 className="text-sm text-darkBlue font-extrabold  leading-5">
              Track company-wide progress
            </h2>
            <p className="text-sm text-lightGray my-4 leading-5">
              Manage provides all the functionality your <br /> team needs,
              without the complexity. Our <br /> software is tailor-made for
              modern digital <br />
              product teams.
            </p>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="bg-brightRed rounded-full py-4 px-6 h-5 w-5 flex items-center justify-center text-white">
            02
          </div>
          <div>
            <h2 className="text-sm text-darkBlue font-extrabold  leading-5">
              Advanced built-in reports
            </h2>
            <p className="text-sm text-lightGray my-4 leading-5">
              Manage provides all the functionality your <br /> team needs,
              without the complexity. Our <br /> software is tailor-made for
              modern digital <br />
              product teams.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-brightRed rounded-full py-4 px-6 h-5 w-5 flex items-center justify-center text-white">
            03
          </div>
          <div>
            <h2 className="text-sm text-darkBlue font-extrabold  leading-5">
              Everything you need in one place
            </h2>
            <p className="text-sm text-lightGray my-4 leading-5">
              Manage provides all the functionality your <br /> team needs,
              without the complexity. Our <br /> software is tailor-made for
              modern digital <br />
              product teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
