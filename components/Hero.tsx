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
          <div className="flex flex-row flex-nowrap w-full gap-[clamp(0.3rem,1vw,0.75rem)]">

            {/* Organizer — 1 unit */}
            <div className="flex min-w-0 flex-col items-center justify-between gap-1 bg-white/50 backdrop-blur-md px-[clamp(0.3rem,1vw,0.75rem)] py-[clamp(0.4rem,1vw,0.75rem)] rounded-xl border border-white/30"
              style={{ flex: '0.5 1 0' }}
            >
              <span className="text-[clamp(0.4rem,1.2vw,0.8rem)] font-medium text-[#0c284e] whitespace-nowrap text-center">
                Organized by
              </span>
              <Image
                src="/nit-surat-logo.png"
                alt="SVNIT Logo"
                width={120}
                height={120}
                className="object-contain w-auto"
                style={{ height: 'clamp(1.5rem, 5vw, 4rem)' }}
                priority
              />
            </div>

            {/* Association — 1 unit */}
            <div className="flex min-w-0 flex-col items-center justify-between gap-1 bg-white/50 backdrop-blur-md px-[clamp(0.3rem,1vw,0.75rem)] py-[clamp(0.4rem,1vw,0.75rem)] rounded-xl border border-white/30"
              style={{ flex: '0.5 1 0' }}
            >
              <span className="text-[clamp(0.4rem,1.2vw,0.8rem)] font-medium text-[#0c284e] whitespace-nowrap text-center">
                In association with
              </span>
              <div className="bg-white rounded-md px-1 flex items-center justify-center">
                <Image
                  src="/cipet-logo.jpg"
                  alt="CIPET Logo"
                  width={128}
                  height={128}
                  className="object-contain w-auto"
                  style={{ height: 'clamp(1.5rem, 5vw, 4rem)' }}
                  priority
                />
              </div>
            </div>

            {/* Sponsor — 2.5 units */}
            <div className="flex min-w-0 flex-col items-center justify-between gap-1 bg-white/60 backdrop-blur-md px-[clamp(0.3rem,1vw,0.75rem)] py-[clamp(0.4rem,1vw,0.75rem)] rounded-xl border border-white/30"
              style={{ flex: '0.8 1 0' }}
            >
              <span className="text-[clamp(0.4rem,1.2vw,0.8rem)] font-medium text-[#0c284e] whitespace-nowrap text-center">
                Sponsored by
              </span>
              <Image
                src="/sponsors/luthra.jpg"
                alt="Luthra Group Logo"
                width={220}
                height={120}
                className="object-contain w-auto"
                style={{ height: 'clamp(1.5rem, 5vw, 4rem)' }}
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

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-offWhite to-transparent z-10 pointer-events-none" />
    </section>
  );
}
