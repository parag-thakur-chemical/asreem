"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

// --- 1. Data Object ---
const speakers = [
  {
    id: 2,
    name: "Shri Harsh Sanghavi",
    position:
      "Minister of State (Home, Sports, Youth, Cultural and Disaster Management), Government of Gujarat",
    college: "Government of Gujarat",
    image: "/keynote-speakers/harsh-sanghawi.jpg",
    role: "Chief Guest",
    description:
      "Champions statewide youth, sports, and civic engagement programs while steering flagship entrepreneurship and safety initiatives across Gujarat.",
    portfolio: "https://x.com/sanghaviharsh",
  },
  {
    id: 6,
    name: "Dr. Shishir Sinha",
    position: "Director-General, CIPET, Govt of India",
    college: "CIPET, Government of India",
    image: "/keynote-speakers/shishirsinha.jpg",
    role: "Guest of Honour",
    description:
      "Seasoned chemical engineer driving national capacity for advanced polymer, materials, and skill development ecosystems across CIPET centres.",
    portfolio: "https://www.cipet.gov.in/our-team/our-team-dg-profile.php"
  },
  {
    id: 7,
    name: "Prof. Yannis Ieropoulos",
    position:
      "Professor & Head of Department - Civil, Maritime & Environmental Engineering, University of Southampton, UK",
    college: "University of Southampton",
    image: "/keynote-speakers/yannis.jpg",
    role: "Guest of Honour",
    description:
      "Globally recognized for pioneering microbial fuel cells that turn waste streams into clean electricity and circular sanitation solutions.",
    portfolio: "https://www.southampton.ac.uk/people/5z9k7x/professor-yannis-ieropoulos",
  },
  {
    id: 8,
    name: "Dr. S. Venkata Mohan",
    position: "Director, CSIR NEERI, Nagpur",
    college: "CSIR-NEERI, Nagpur",
    image: "/keynote-speakers/venkatamohan.jpg",
    role: "Keynote Speaker",
    description:
      "Environmental biotechnologist and Shanti Swarup Bhatnagar laureate advancing circular bioeconomy pathways that turn waste carbon into low-carbon fuels and materials.",
    portfolio: "https://www.neeri.res.in/file_divisions/62722439_Dr.%20S.%20Venkata%20Mohan%20CV.pdf",
  },
  {
    id: 9,
    name: "Dr. K. K. Pant",
    position: "Director, IIT Roorkee",
    college: "Indian Institute of Technology Roorkee",
    image: "/keynote-speakers/kkpant.jpg",
    role: "Keynote Speaker",
    description:
      "Leads IIT Roorkee while pioneering heterogeneous catalysis, CO₂ conversion, and sustainable fuels research that link labs to large-scale impact.",
    portfolio: "https://iitr.ac.in/Departments/Chemical%20Engineering%20Department/People/Faculty/101000.html"
  },
  {
    id: 10,
    name: "Dr. Makarand Ghangrekar",
    position: "Director, NIT Puducherry",
    college: "National Institute of Technology Puducherry",
    image: "/keynote-speakers/ghangrekar.jpg",
    role: "Keynote Speaker",
    description:
      "Wastewater innovation leader translating microbial fuel cells and anaerobic treatment know-how into resilient sanitation infrastructure.",
    portfolio: "https://ghangrekar.com/"
  },
  {
    id: 11,
    name: "Prof. Aniruddha B. Pandit",
    position: "Vice-Chancellor, ICT Mumbai",
    college: "Institute of Chemical Technology, Mumbai",
    image: "/keynote-speakers/pandit.jpg",
    role: "Keynote Speaker",
    description:
      "Cavitation and sonochemistry pioneer whose hydrodynamic reactor designs enable cleaner manufacturing and scale-up across chemical industries.",
    portfolio: "https://abpandit.weebly.com/"
  },
];

// --- 2. Speaker Card Component (with Framer Motion) ---
const SpeakerCard = ({ item }: { item: typeof speakers[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full p-3 max-w-md sm:max-w-xl mx-auto"
    >
      <Card className="overflow-hidden border-none shadow-lg h-full bg-white dark:bg-zinc-900 group relative rounded-2xl">
        <CardContent className="p-0 h-full">
          <div className="flex h-full flex-col sm:flex-row sm:min-h-[360px]">
            {/* Image Container */}
            <div className="relative w-full sm:w-1/2 h-80 sm:h-auto sm:min-h-[360px] overflow-hidden">
              {/* Gradient Overlay (visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-xs rounded-2xl border border-white/40 bg-white/90 p-4 text-center shadow-2xl backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Profile</p>
                    <p className="mt-2 text-base font-semibold text-zinc-900 line-clamp-2">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 line-clamp-2">
                      {item.position}
                    </p>
                    {item.portfolio ? (
                      <motion.a
                        href={item.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-4 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg"
                      >
                        <span>Know more</span>
                        <span aria-hidden="true">→</span>
                      </motion.a>
                    ) : (
                      <span className="mt-4 inline-flex items-center justify-center rounded-full bg-zinc-200 px-5 py-2 text-xs font-semibold text-zinc-600">
                        Portfolio coming soon
                      </span>
                    )}
                  </motion.div>
              </div>

              <Image
                src={item.image} // Ensure you have a placeholder if image fails
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex w-full sm:w-1/2 flex-col  gap-5 p-6 sm:p-8 text-center sm:text-left sm:min-h-[360px]">
              {item.role && (
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="mx-auto sm:mx-0 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.role}
                  </span>

                </div>
              )}
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {item.name}
              </h3>
              <div className="space-y-1">
                <p className="text-sm font-medium text-primary uppercase tracking-[0.2em]">
                  {item.position}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{item.college}</span>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// --- 3. Main Carousel Section ---
const GuestSpeakers = () => {
  return (
    <section className="py-8 lg:py-12 w-full bg-zinc-50 dark:bg-black">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            Meet Our <span className="text-primary">Visionaries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            Distinguished experts and industry leaders joining us at Asreem.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative px-2 sm:px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-lg sm:max-w-2xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {speakers.map((speaker) => (
                <CarouselItem
                  key={speaker.id}
                  className="pl-2 md:pl-4 basis-full"
                >
                  <SpeakerCard item={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom styled navigation buttons */}
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 border-zinc-200 hover:border-primary hover:text-primary transition-all" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 border-zinc-200 hover:border-primary hover:text-primary transition-all" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default GuestSpeakers;