"use client";
import Image from "next/image";
import Link from "next/link";

const spots = [
  {
    name: "SAPUTARA",
    key: "saputara",
    location: "Dang District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Saputara"
  },
  {
    name: "DAMAN",
    key: "daman",
    location: "Union Territory of Daman & Diu",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Daman,+India"
  },
  {
    name: "Dumas/Hazira",
    key: "dumas-hazira",
    location: "Surat District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Dumas+Beach,+Surat,+Gujarat"
  },
  {
    name: "Swaminarayan Temple",
    key: "swaminarayan-temple",
    location: "Akshardham, Gandhinagar",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/BAPS+Swaminarayan+Temple,+Gandhinagar,+Gujarat"
  },
  {
    name: "Pavagadh",
    key: "pavagadh-stepwells",
    location: "Panchmahal District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Pavagadh+Hill,+Gujarat"
  },
  {
    name: "Statue of Unity",
    key: "statue-of-unity",
    location: "Kevadia, Narmada District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Statue+of+Unity"
  },
  {
    name: "Kutch Desert",
    key: "kutch-desert",
    location: "Kutch District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Great+Rann+of+Kutch"
  },
  {
    name: "Gopi Talav",
    key: "gopi-talav",
    location: "Surat City",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Gopi+Talav,+Surat,+Gujarat"
  },
  {
    name: "Gir National Park",
    key: "gir-national-park",
    location: "Junagadh District",
    portfolio: "https://www.google.com/maps/dir/SVNIT+Surat/Gir+National+Park,+Gujarat"
  }
];



export default function TouristSpots() {
  return (
    <div className="mt-14 py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Tourist Spots in Gujarat
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
          Discover the vibrant culture, history, and natural beauty of Gujarat.
          Here are some must-visit destinations for your journey.
        </p>

        {/* Grid of clickable cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <Link
              key={spot.key}
              href={spot.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={`/tourist-spots/${spot.key}1.jpg`}
                  alt={spot.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{spot.name}</h2>
                <p className="text-sm text-gray-500">{spot.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
