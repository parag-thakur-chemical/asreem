"use client";

import Marquee from "react-fast-marquee";

export default function ConferenceMarquee() {
  return (
    <div className="text-red-600">
    <Marquee className="mask-l-from-80% mask-r-from-80%" pauseOnHover speed={80}>The dates of the conference have been updated.
      <span style={{ paddingRight: "6rem" }}></span>
    </Marquee>
    </div>
  );
}