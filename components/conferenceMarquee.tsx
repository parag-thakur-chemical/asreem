"use client";

import Marquee from "react-fast-marquee";

export default function ConferenceMarquee() {
  return (
    <div className="text-red-600 font-extrabold">
    <Marquee className="mask-l-from-80% mask-r-from-80%" pauseOnHover speed={80}>The conference has been rescheduled to 15-17 May. 2026.
      <span style={{ paddingRight: "6rem" }}></span>
    </Marquee>
    </div>
  );
}