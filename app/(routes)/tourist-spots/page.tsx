"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spots = [
	{
		name: "SAPUTARA",
		key: "saputara",
		location: "Dang District",
		cells: [1],
		count: 3,
	},
	{
		name: "DAMAN",
		key: "daman",
		location: "Union Territory of Daman & Diu",
		cells: [4],
		count: 3,
	},
	{
		name: "Dumas/Hazira",
		key: "dumas-hazira",
		location: "Surat District",
		cells: [7],
		count: 3,
	},
	{
		name: "Swaminarayan Temple",
		key: "swaminarayan-temple",
		location: "Akshardham, Gandhinagar",
		cells: [8],
		count: 3,
	},
	{
		name: "Pavagadh Step wells",
		key: "pavagadh-stepwells",
		location: "Panchmahal District",
		cells: [9],
		count: 3,
	},
	{
		name: "Statue of Unity",
		key: "statue-of-unity",
		location: "Kevadia, Narmada District",
		cells: [2, 3, 5, 6],
		count: 5,
	},
];

// Map cell number to spot
const cellToSpot = Array(10).fill(null);
spots.forEach((spot) => {
	spot.cells.forEach((cell) => {
		cellToSpot[cell] = spot;
	});
});

function SpotCarousel({ spot }: { spot: { name: string; key: string; location: string; count: number } }) {
	const [idx, setIdx] = useState(0);
	const [direction, setDirection] = useState(1); // 1 for right, -1 for left (future use)
	const images = Array.from(
		{ length: spot.count },
		(_, i) => `/tourist-spots/${spot.key}${i + 1}.jpg`
	);
	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setIdx((i) => (i + 1) % images.length);
		}, 4500);
		return () => clearInterval(timer);
	}, [images.length]);
	return (
		<div className="w-full h-full relative overflow-hidden">
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={idx}
					custom={direction}
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.3 },
					}}
					className="absolute inset-0"
				>
					<Image
						src={images[idx]}
						alt={spot.name}
						fill
						style={{ objectFit: "cover" }}
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
						<div className="text-xs font-bold text-white drop-shadow">
							{spot.name}
						</div>
						<div className="text-xs text-gray-200 drop-shadow">
							{spot.location}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default function TouristSpots() {
	return (
		<div className="py-12 bg-white min-h-screen">
			<div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Tourist Spots in Gujarat
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
					Discover the vibrant culture, history, and natural beauty of Gujarat.
					Here are some must-visit destinations for your journey.
				</p>
				<div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square min-h-[500px]">
					{Array.from({ length: 9 }, (_, i) => {
						const cell = i + 1;
						const spot = cellToSpot[cell];
						if (!spot) return <div key={cell} />;
						// Statue of Unity spans 4 cells
						if (spot.key === "statue-of-unity" && cell === 2) {
							return (
								<div
									key={cell}
									className="relative col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg border-2 border-amber-100 bg-white"
									style={{
										gridColumn: "2 / span 2",
										gridRow: "1 / span 2",
									}}
								>
									<SpotCarousel spot={spot} />
								</div>
							);
						}
						// Only render Statue of Unity once
						if (spot.key === "statue-of-unity" && cell !== 2) return null;
						return (
							<div
								key={cell}
								className="relative rounded-xl overflow-hidden shadow-lg border-2 border-amber-100 bg-white"
							>
								<SpotCarousel spot={spot} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}