import Image from "next/image";


const imageData = [
	{ src: "/highlights/image1.png", width: 289, height: 217 },
	{ src: "/highlights/image2.png", width: 613, height: 368 },
	{ src: "/highlights/image3.png", width: 675, height: 304 },
	{ src: "/highlights/image4.png", width: 406, height: 305 },
	{ src: "/highlights/image5.png", width: 289, height: 217 },
	{ src: "/highlights/image6.png", width: 284, height: 214 },
	{ src: "/highlights/image7.png", width: 600, height: 338 },
	{ src: "/highlights/image8.png", width: 662, height: 373 },
	{ src: "/highlights/image9.png", width: 575, height: 323 },
	{ src: "/highlights/image10.png", width: 853, height: 480 },
	{ src: "/highlights/image11.png", width: 877, height: 493 },
	{ src: "/highlights/image12.png", width: 1366, height: 768 },
	{ src: "/highlights/image13.png", width: 406, height: 465 },
	{ src: "/highlights/image14.png", width: 532, height: 385 },
	{ src: "/highlights/image15.png", width: 599, height: 270 },
	{ src: "/highlights/image16.png", width: 714, height: 491 },
	{ src: "/highlights/image17.jpeg", width: 1290, height: 654 },
	{ src: "/highlights/image18.png", width: 958, height: 1346 },
	{ src: "/highlights/image19.jpeg", width: 897, height: 574 },
	{ src: "/highlights/image20.jpeg", width: 1280, height: 720 },
	{ src: "/highlights/image21.jpeg", width: 896, height: 576 },
	{ src: "/highlights/image22.png", width: 923, height: 603 },
];

export default function HighlightsPage() {
	return (
		<div className="mt-14 py-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Conference Highlights 2021</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
				<p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
					Explore memorable moments from our 2021 online conference. Here are some highlights capturing the energy, engagement, and spirit of our participants and speakers.
				</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{imageData.map((img, idx) => (
								<div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-50" style={{ minHeight: 220 }}>
									<Image
										src={img.src}
										alt={`Conference highlight ${idx + 1}`}
										width={img.width}
										height={img.height}
										className="object-contain mx-auto"
										style={{ display: 'block', margin: '0 auto', background: '#f8fafc' }}
										priority={idx < 4}
									/>
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center">
										Highlight {idx + 1}
									</div>
								</div>
							))}
						</div>
			</div>
		</div>
	);
}
