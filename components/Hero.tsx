"use client";

import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-primary-darkGreen via-primary-forestGreen to-primary-sageGreen text-offWhite overflow-hidden"
      style={{ height: "100dvh" }}
    >

      {/* Background */}
      <img
        className=" absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="\final_hero.png"
        alt="Background"
      />

      {/* Logos */}
      <div className="absolute top-20 sm:top-24 left-4 md:left-8 z-10">
        <div className="bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg shadow-black/10">
          <Image
            src="/asreem-logo.png"
            alt="ASREEM Logo"
            width={80}
            height={80}
            className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
            priority
          />
        </div>
      </div>


      <div className="absolute top-20 sm:top-24 right-4 md:right-8 z-10">
  <div className="bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg shadow-black/10">
    <Image
      src="/nit-surat-logo.png"
      alt="NIT Surat Logo"
      width={80}
      height={80}
      className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
      priority
    />
  </div>
</div>


      {/* Decorative blur circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-earthYellow rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-skyBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-2 sm:px-4 z-10 h-full flex flex-col justify-center">
        <div className="max-w-5xl w-full mx-auto text-center space-y-6 mt-16">
          {/* Date */}
<div className="inline-block bg-offWhite bg-opacity-10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-md mb-2 mt-2">
  <Link href="/dates-fees">
    <span className="text-[#0b1439] font-semibold tracking-wide text-xs sm:text-sm md:text-base flex items-center justify-center">
      <CiCalendarDate className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
      FEBRUARY 6-8, 2026
    </span>
  </Link>
</div>


          {/* Main heading */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight break-words font-[Montserrat]">
            <span className="block text-xl md:text-2xl font-medium mb-2 text-[#0c284e] font-[Montserrat]">
              2<sup>nd</sup> Edition of The International Conference on
            </span>
            <span className="block text-[#035e32] font-[Montserrat] font-extrabold">
              Advances in Sustainable Research for Energy and Environmental Management
            </span>
          </h1>

          {/* Subheading */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-[Montserrat] font-black tracking-wider text-[#023450]">
              ASREEM 2.0
            </h2>
            <p className="text-lg md:text-xl text-[#051f3d] max-w-2xl mx-auto font-[Lora] italic">
              Rendezvous for sustainable future
            </p>
          </div>

          {/* Buttons */}
<div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="https://forms.gle/B8QHHTja4SRSoTw38"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <button className="w-full sm:w-auto border-black border-2 bg-[oklch(0.73_0.17_60.47)] hover:bg-opacity-90 text-darkCharcoal font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-earthYellow/30 cursor-pointer">
      Submit Abstract
    </button>
  </a>
  <a
  href="https://drive.google.com/uc?export=preview&id=12Ik5teQ_BhNdciqxkkOxVDr7oqrhOWv7"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto border-2 bg-[oklch(0.73_0.17_60.47)] border-black hover:bg-offWhite hover:bg-opacity-10 font-medium py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-offWhite/10 text-black text-center inline-block"
>
  open Brochure
</a>

</div>

        </div>
      </div>

      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offWhite to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
