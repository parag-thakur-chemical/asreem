"use client";

import Image from "next/image";
import Link from "next/link";
import ConferenceMarquee from "@/components/conferenceMarquee";

export default function Hero() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=ASREEM%202.0%20Conference&dates=20260515/20260518&location=SVNIT%20Surat%2C%20Gujarat&details=ASREEM%202.0%20at%20SVNIT%20Surat%20(Gujarat)%20from%2015-17%20May%202026.%20More%20info:%20https://asreem.in";

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
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-3 sm:px-6 text-center pt-[52px]">
        <div className="w-full max-w-5xl space-y-[clamp(0.75rem,1.6vh,1.25rem)]">
          {/* Association Section */}
          <div className="flex flex-row flex-wrap items-stretch justify-center gap-2 sm:gap-3 lg:gap-4">
            {/* Organizer */}
            <div className="flex flex-col items-center gap-2 bg-white/50 backdrop-blur-md px-2 sm:px-4 py-3 rounded-xl border border-white/30">
              <span className="text-[clamp(0.6rem,1.6vw,0.85rem)] font-medium text-[#0c284e]">Organized by</span>
              <Image
                src="/nit-surat-logo.png"
                alt="SVNIT Logo"
                width={120}
                height={120}
                className="h-auto w-[clamp(2.25rem,8vw,5rem)] object-contain"
                priority
              />
            </div>

            {/* Association */}
            <div className="flex flex-col items-center gap-2 bg-white/50 backdrop-blur-md px-2 sm:px-4 py-3 rounded-xl border border-white/30">
              <span className="text-[clamp(0.6rem,1.6vw,0.85rem)] font-medium text-[#0c284e]">In association with</span>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-white rounded-md px-2">
                  <Image
                    src="/cipet-logo.jpg"
                    alt="CIPET Logo"
                    width={128}
                    height={128}
                    className="h-auto w-[clamp(2.25rem,8vw,5rem)] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Sponsor */}
            <div className="flex flex-col items-center gap-2 bg-white/60 backdrop-blur-md px-2 sm:px-4 py-3 rounded-xl border border-white/30">
              <span className="text-[clamp(0.6rem,1.6vw,0.85rem)] font-medium text-[#0c284e]">Sponsored by</span>
              <Image
                src="/sponsors/luthra_vertical.png"
                alt="Luthra Group Logo"
                width={200}
                height={120}
                className="h-auto max-h-[clamp(2.25rem,7vw,4.75rem)] w-[clamp(2.5rem,10vw,6rem)] object-contain"
                priority
              />
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

          {/* Date Capsule */}
          <div className="flex justify-center">
            <Link
              href="/dates-fees"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] hover:border-white/60 hover:bg-white/25"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#035e32] text-white text-[11px] font-semibold tracking-tight shadow-inner shadow-black/10">
                <span className="leading-none text-center whitespace-nowrap">15-17<br />May</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#0c284e]">Conference Dates</span>
                <span className="text-[13px] md:text-sm font-semibold text-[#023450]">SVNIT Surat, Gujarat</span>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
                }}
                className="cursor-pointer text-[10px] font-semibold text-[#035e32] px-2 py-1 rounded-full border border-[#035e32]/30 bg-[#035e32]/10 uppercase tracking-[0.12em] hover:bg-[#035e32]/20"
                aria-label="Save to Google Calendar"
              >
                Save
              </button>
            </Link>
          </div>

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
