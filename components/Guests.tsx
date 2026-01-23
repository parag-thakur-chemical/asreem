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
import { Linkedin, Twitter, MapPin } from "lucide-react";

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
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                  <motion.button 
                      initial={{ scale: 0 }} 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                      <Linkedin size={20} />
                  </motion.button>
                  <motion.button 
                      initial={{ scale: 0 }} 
                      whileHover={{ scale: 1.1 }} 
                      className="bg-white p-2 rounded-full text-sky-500 hover:bg-sky-50 transition-colors"
                  >
                      <Twitter size={20} />
                  </motion.button>
              </div>

              <Image
                src={item.image} // Ensure you have a placeholder if image fails
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex w-full sm:w-1/2 flex-col justify-center gap-5 p-6 sm:p-8 text-center sm:text-left sm:min-h-[360px]">
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