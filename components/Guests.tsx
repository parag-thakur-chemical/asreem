"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, ChevronRight } from "lucide-react";

// --- 1. Data Object ---
const speakers = [
  {
    id: 2,
    name: "Shri Harsh Sanghavi",
    position:
      "Deputy Chief Minister, Government of Gujarat",
    college: "Government of Gujarat",
    image: "/keynote-speakers/harsh-sanghawi.jpg",
    role: "Chief Guest",
    description:
      "Champions youth, sports, and civic engagement programs across Gujarat.",
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
      "Leads national polymer, materials, and skill development across CIPET centres.",
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
      "Pioneer in microbial fuel cells converting waste into clean electricity.",
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
      "Environmental biotechnologist advancing circular bioeconomy and waste-to-energy solutions.",
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
      "Leads IIT Roorkee, pioneering catalysis and CO₂ conversion research.",
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
      "Leading innovations in microbial fuel cells and sanitation infrastructure.",
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
      "Cavitation pioneer enabling cleaner manufacturing across chemical industries.",
    portfolio: "https://abpandit.weebly.com/"
  },
];

// --- 2. Speaker Card Component (with Framer Motion) ---
const SpeakerCard = ({ item, showSwipeHint }: { item: typeof speakers[0]; showSwipeHint: boolean }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full p-2 max-w-sm sm:max-w-lg mx-auto"
    >
      <Card className="overflow-hidden border-none shadow-lg h-full bg-white dark:bg-zinc-900 group relative rounded-2xl">
        <CardContent className="p-0 h-full">
          <div className="flex h-full flex-col sm:flex-row sm:min-h-[320px]">
            {/* Image Container */}
            <div className="relative w-full sm:w-1/2 h-72 sm:h-auto sm:min-h-[320px] overflow-hidden">
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
            <div className="flex w-full sm:w-1/2 flex-col gap-3 sm:gap-4 p-4 sm:p-6 text-center sm:text-left sm:min-h-[320px]">
              {item.role && (
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="mx-auto sm:mx-0 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {item.role}
                  </span>
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                {item.name}
              </h3>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.15em]">
                  {item.position}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-muted-foreground text-xs">
                  <MapPin size={12} />
                  <span className="line-clamp-1">{item.college}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4">
                {item.description}
              </p>
            </div>
          </div>
        </CardContent>

        {/* Swipe Hint Overlay */}
        <AnimatePresence>
          {showSwipeHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none z-20"
            >
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-primary/90 backdrop-blur-sm rounded-l-2xl px-3 py-6 shadow-2xl flex flex-col items-center gap-1"
              >
                <ChevronRight size={28} className="text-white" strokeWidth={3} />
                {/* <span className="text-white text-xs font-semibold uppercase tracking-wider">Swipe</span> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

// --- 3. Main Carousel Section ---
const GuestSpeakers = () => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-6 lg:py-10 w-full bg-zinc-50 dark:bg-black">
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
            className="w-full max-w-md sm:max-w-xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {speakers.map((speaker) => (
                <CarouselItem
                  key={speaker.id}
                  className="pl-2 md:pl-4 basis-full"
                >
                  <SpeakerCard item={speaker} showSwipeHint={showSwipeHint} />
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
