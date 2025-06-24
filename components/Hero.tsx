"use client"

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { Particles } from "./ui/particles";

export default function Hero() {
  const color = "oklch(0.27 0.06 153)";

  return (
    <section className="relative bg-gradient-to-br from-primary-darkGreen via-primary-forestGreen to-primary-sageGreen text-offWhite overflow-hidden">
      {/* Logos */}
      <div className="absolute top-4 left-4 md:left-8 z-10">
        <Image 
          src="/asreem-logo.png" 
          alt="ASREEM Logo" 
          width={80} 
          height={80}
          className="w-16 h-16 md:w-20 md:h-20"
          priority
        />
      </div>
      <div className="absolute top-4 right-4 md:right-8 z-10">
        <Image 
          src="/nit-surat-logo.png" 
          alt="NIT Surat Logo" 
          width={80} 
          height={80}
          className="w-16 h-16 md:w-20 md:h-20"
          priority
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-earthYellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-skyBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block bg-offWhite bg-opacity-10 backdrop-blur-sm px-6 py-2 rounded-full mb-2 mt-2">
            <span className="text-accent-earthYellow font-semibold tracking-wider text-sm md:text-base">
              <CiCalendarDate className="w-8 h-8 inline-block mr-2" /> 
              FEBRUARY 6-8, 2026
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-xl md:text-2xl font-medium mb-2 text-accent-earthYellow">International Conference on</span>
            <span className="block text-[#00c950]">Advances in Sustainable Research</span>
            <span className="block text-[#00c950]">for Energy and Environmental</span>
            <span className="block text-[#00c950]">Management</span>
          </h1>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-accent-earthYellow">ASREEM 2.0</h2>
            <div className="w-24 h-1 bg-accent-earthYellow my-2"></div>
            <p className="text-lg md:text-xl text-offWhite/80 max-w-2xl mx-auto">
              Department of Chemical Engineering
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00c950] hover:bg-opacity-90 text-darkCharcoal font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-earthYellow/30">
              Register Now
            </button>
            <button className="border-2 border-offWhite hover:bg-offWhite hover:bg-opacity-10 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-offWhite/10">
              Learn More
            </button>
          </div>

          <div className="pt-6 flex items-center justify-center space-x-4 text-base text-offWhite/80">
            <div className="flex items-center space-x-2">
              <CiLocationOn className="w-8 h-8" />
              <span>Sardar Vallabhbhai National Institute of Technology, Surat (Gujarat)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offWhite to-transparent"></div>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
}