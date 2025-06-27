import Hero from "@/components/Hero";
import { KeynoteSpeakers } from "@/components/KeynoteSpeakers";
import { AboutConference } from "@/components/AboutConference";
import { AboutSVNIT } from "@/components/AboutSVNIT";
import { AboutChED } from "@/components/AboutChED";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutConference />
      <KeynoteSpeakers />
      <AboutSVNIT />
      <AboutChED />
    </main>
  );
}
