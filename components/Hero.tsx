import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="border border-red-400 max-container py-36 flex flex-col md:flex-row gap-10 md:px-10 sm:px-10">
      <div className=" flex-1 flex flex-col gap-10 justify-center sm:pl-4">
        <div className="border regular-16 rounded-full max-w-sm p-4 max-h-4 flex items-center justify-center">
          <p>Electrical Service - Trust Partner</p>
        </div>
        <h1 className="bold-52 lg:bold-72 ">
          Keeping Your Home Cool and Powered Up
        </h1>
        <p className="regular-16 lg:regular-20 text-gray-30 xl:max-w-[640px] text-start ">
          Tegak Teguh Teknik provides top-notch air conditioning services to
          ensure your environment is comfortable all year round. <br />
          <span className="italic">
            Trust us for installations, maintenance, and repairs.
          </span>
        </p>
        {/* <p className='text-gray-30 italic'>
        </p> */}

        <div className="flex  gap-5">
          <button className="border rounded-2xl p-4 bg-gray-200">
            Schedule Service
          </button>
          <button className="border rounded-2xl p-4 bg-gray-200">
            View Offers
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={"/hero.jpeg"}
          width={600}
          height={150}
          alt="Tegak Teguh Teknik"
          className="rounded-lg  md:block"
        />
      </div>
    </section>
  );
};

export default Hero;
