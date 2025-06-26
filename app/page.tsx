import Hero from "@/components/Hero";
import { KeynoteSpeakers } from "@/components/KeynoteSpeakers";
import { AboutConference } from "@/components/AboutConference";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutConference />
      <KeynoteSpeakers />
      
      {/* Additional sections will go here */}
    </main>
  );
}
