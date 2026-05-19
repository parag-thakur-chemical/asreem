"use client";

import Image from "next/image";
import Link from "next/link";
import ConferenceMarquee from "@/components/conferenceMarquee";

export default function Hero() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=ASREEM%202.0%20Conference&dates=20260515/20260518&location=SVNIT%20Surat%2C%20Gujarat&details=ASREEM%202.0%20at%20SVNIT%20Surat%20(Gujarat)%20from%2015-17%20May%202026.%20More%20info:%20https://asreem.in";

  const scheduleButtons = [
    {
      label: "Online",
      href: "/schedule_online.pdf",
      accent: "#0f6f3a",
      accentBg: "bg-[#e9f6ee]",
      labelText: "text-[#0f6f3a]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f6f3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      label: "Offline",
      href: "/schedule_offline.pdf",
      accent: "#1f5ea8",
      accentBg: "bg-[#e7f0fb]",
      labelText: "text-[#1f5ea8]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f5ea8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      ),
    },
  ];

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

          {/* Schedule Buttons */}
          <div className="flex justify-center pt-5">
            <div className="w-full max-w-md rounded-2xl border border-[#0c284e]/10 bg-[#e7f0ed]/80 backdrop-blur-sm px-3 py-3 shadow-[0_10px_28px_rgba(2,52,80,0.12)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scheduleButtons.map(({ label, href, icon, accent, accentBg, labelText }) => (
                  <button
                    key={label}
                    onClick={() => window.open(href, "_blank")}
                    aria-label={`View ${label} Schedule`}
                    className="group relative flex items-center gap-2.5 rounded-xl border border-transparent bg-[#f4f8f6] px-3 py-2.5 shadow-[0_8px_18px_rgba(2,52,80,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0f6f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0c284e]/25"
                    style={{ borderLeftWidth: 4, borderLeftColor: accent }}
                  >
                    <span className={`w-8 h-8 rounded-[10px] ${accentBg} flex items-center justify-center shrink-0`}>
                      {icon}
                    </span>
                    <span className="flex flex-col items-start">
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}>
                        {label}
                      </span>
                      <span className="text-[13px] font-semibold text-[#0c284e]">Schedule</span>
                    </span>
                    <svg
                      className="ml-auto w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={accent}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
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
