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
        src="\9325cf2e-39a4-4fff-b10a-183dab5b6d3c.png"
        alt="Background"
      />

      {/* Logos */}
      <div className="absolute top-4 left-4 md:left-8 z-10">
        <div className="bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg shadow-black/10">
          <Image
            src="/asreem-logo.png"
            alt="ASREEM Logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            priority
          />
        </div>
      </div>


      <div className="absolute top-4 right-4 md:right-8 z-10">
  <div className="bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg shadow-black/10">
    <Image
      src="/nit-surat-logo.png"
      alt="NIT Surat Logo"
      width={80}
      height={80}
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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
        <div className="max-w-5xl w-full mx-auto text-center space-y-6">
          {/* Date */}
          <div className="inline-block bg-offWhite bg-opacity-10 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-2 mt-2">
            <Link href="/dates-fees">
              <span className="text-accent-earthYellow font-semibold tracking-wider text-sm md:text-base flex items-center justify-center">
                <CiCalendarDate className="w-8 h-8 mr-2" />
                FEBRUARY 6-8, 2026
              </span>
            </Link>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight break-words
            text-shadow:
            0 0 4px rgba(255,255,255,0.8),
            0 0 12px rgba(255,255,255,0.9),
            0 0 24px rgba(255,255,255,0.8);"

          >
            <span className="block text-xl md:text-2xl font-medium mb-2 text-accent-earthYellow">
              2<sup>nd</sup> Edition of The International Conference on
            </span>

            <span className="block text-green-950">
              Advances in Sustainable Research for Energy and Environmental Management
            </span>
          </h1>


          {/* Subheading */}
          <div className="flex flex-col items-center justify-center space-y-2 ">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-[#a6ffc6]">
              ASREEM 2.0
            </h2>
            <div className="w-24 h-1 bg-accent-earthYellow my-2"></div>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
              {/* Department of Chemical Engineering */}
            </p>
          </div>

          {/* Buttons */}
<div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
  <Link href="/register" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto border-black border-2 bg-[oklch(0.73_0.17_60.47)] hover:bg-opacity-90 text-darkCharcoal font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-earthYellow/30 cursor-pointer">
      Register Now
    </button>
  </Link>
  <a
    href="\ASREEM_2_brochure.pdf"
    download
    className="w-full sm:w-auto border-2 bg-[oklch(0.73_0.17_60.47)] border-black hover:bg-offWhite hover:bg-opacity-10 font-medium py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-offWhite/10 text-black text-center inline-block"
  >
    Download Brochure
  </a>
</div>

        </div>
      </div>

      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offWhite to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
