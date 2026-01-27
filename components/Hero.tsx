"use client";

import Image from "next/image";
import Link from "next/link";
import ConferenceMarquee from "@/components/conferenceMarquee";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-primary-darkGreen via-primary-forestGreen to-primary-sageGreen text-offWhite overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/final_hero.png"
        alt="Background"
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex flex-col justify-center items-center
          min-h-[100dvh]
          px-2 sm:px-4
          text-center
              pt-[65px]

        "
      >
        <div className="w-full max-w-5xl space-y-[clamp(1rem,1.9vh,1.25rem)]">


          {/* Association Section */}
          <div className="flex flex-row items-center justify-center gap-4">

            {/* Organizer */}
            <div className="flex flex-col items-center gap-2 
                  bg-white/50 backdrop-blur-md 
                  px-4 py-3 rounded-lg 
                  border border-white/30
                  min-h-[96px]">
              <span className="text-sm font-medium text-[#0c284e]">
                Organized by
              </span>
              <Image
                src="/nit-surat-logo.png"
                alt="SVNIT Logo"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-20 sm:h-20"
                priority
              />
            </div>

            {/* Association */}
            <div
              className="flex flex-col items-center gap-2
             bg-white/50 backdrop-blur-md
             px-4 py-3 rounded-lg
             border border-white/30
             min-h-[104px]"
            >
              <span className="text-sm font-medium text-[#0c284e]">
                In association with
              </span>

              <div className="flex items-center gap-6">
                {/* CISR NEERI */}
                {/* <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/cisr-neeri-logo.png"
                    alt="CISR NEERI Logo"
                    width={128}
                    height={128}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div> */}

                {/* CIPET */}
                <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center bg-white">
                  <Image
                    src="/cipet-logo.jpg"
                    alt="CIPET Logo"
                    width={128}
                    height={128}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>



          </div>


          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-[Montserrat]">
            <span className="block text-xl md:text-2xl font-medium mb-2 text-[#0c284e]">
              2<sup>nd</sup> Edition of The International Conference on
            </span>
            <span className="block text-[#035e32] font-extrabold">
              Advances in Sustainable Research for Energy and Environmental
              Management
            </span>
          </h1>

          {/* Subheading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-[#023450]">
              ASREEM 2.0
            </h2>
            <p className="text-lg md:text-xl text-[#051f3d] max-w-2xl mx-auto font-[Lora] italic">
              Rendezvous for sustainable future
            </p>
          </div>

          {/* Marquee */}
          {/* <ConferenceMarquee /> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://forms.gle/B8QHHTja4SRSoTw38"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full border-black border-2 bg-[oklch(0.73_0.17_60.47)] text-darkCharcoal font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-earthYellow/30">
                Submit Abstract
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1c9mTqEvBlYnlm2wLxNK6cbScQ52ysESy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full border-2 border-black bg-[oklch(0.73_0.17_60.47)] font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-black">
                Open Brochure
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-offWhite to-transparent z-10 pointer-events-none" />
    </section>
  );
}
