"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Speaker {
  id: number;
  name: string;
  position: string;
  college: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    position: "Professor of Computer Science",
    college: "Stanford University",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    position: "Director of AI Research",
    college: "MIT",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    position: "Head of Engineering",
    college: "ETH Zurich",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    position: "Professor of Data Science",
    college: "National University of Singapore",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
  },
];

export function KeynoteSpeakers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSpeaker();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSpeaker = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-10 bg-green-300 text-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Guest Of Honour
          </h2>
          <div className="w-16 h-1 bg-accent-earthYellow mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-[500px] md:h-[550px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
              >
                <div className="w-4/5 max-w-xs aspect-[3/4] overflow-hidden mb-4 shadow-2xl rounded-lg border-2 border-white/20">
                  <img
                    src={speakers[currentIndex].image}
                    alt={speakers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {speakers[currentIndex].name}
                  </h3>
                  <p className="text-md text-accent-earthYellow font-medium">
                    {speakers[currentIndex].position}
                  </p>
                  <p className="text-sm  mt-1">
                    {speakers[currentIndex].college}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-3">
            <button
              onClick={prevSpeaker}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous speaker"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent-earthYellow scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to speaker ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSpeaker}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next speaker"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
