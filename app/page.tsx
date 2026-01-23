"use client"

import Hero from "@/components/Hero";
import  GuestSpeakers  from "@/components/Guests";
import { AboutConference } from "@/components/AboutConference";
import { AboutSVNIT } from "@/components/AboutSVNIT";
import { AboutChED } from "@/components/AboutChED";
import IndustryAcademia from "@/components/IndustryAcademia";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <GuestSpeakers />
        <IndustryAcademia/>
        <AboutConference />
        <AboutSVNIT />
        <AboutChED />
    </main>
  );
}
