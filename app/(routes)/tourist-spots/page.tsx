"use client";
import Image from "next/image";

const spots = [
	{
		name: "SAPUTARA",
		key: "saputara",
		location: "Dang District",
		count: 3,
	},
	{
		name: "DAMAN",
		key: "daman",
		location: "Union Territory of Daman & Diu",
		count: 3,
	},
	{
		name: "Dumas/Hazira",
		key: "dumas-hazira",
		location: "Surat District",
		count: 3,
	},
	{
		name: "Swaminarayan Temple",
		key: "swaminarayan-temple",
		location: "Akshardham, Gandhinagar",
		count: 3,
	},
	{
		name: "Pavagadh Step wells",
		key: "pavagadh-stepwells",
		location: "Panchmahal District",
		count: 3,
	},
	{
		name: "Statue of Unity",
		key: "statue-of-unity",
		location: "Kevadia, Narmada District",
		count: 3,
	},
	{
		name: "Kutch Desert",
		key: "kutch-desert",
		location: "Kutch District",
		count: 3,
	},
];

export default function TouristSpots() {
	return (
		<div className="py-12 bg-white min-h-screen">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Tourist Spots in Gujarat
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
					Discover the vibrant culture, history, and natural beauty of Gujarat.
					Here are some must-visit destinations for your journey.
				</p>

				{/* Simple static grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{spots.map((spot) => (
						<div
							key={spot.key}
							className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
						>
							<div className="relative h-56 w-full">
								<Image
									src={`/tourist-spots/${spot.key}1.jpg`}
									alt={spot.name}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4">
								<h2 className="text-lg font-semibold text-gray-800">{spot.name}</h2>
								<p className="text-sm text-gray-500">{spot.location}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
