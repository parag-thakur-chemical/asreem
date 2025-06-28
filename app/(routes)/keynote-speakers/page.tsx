import Image from "next/image";

const speakers = [
	{
		name: "Dr. S. VenkataMohan",
		post: "Director, CSIR NEERI, Nagpur",
		photo: "/keynote-speakers/venkatamohan.jpg",
	},
	{
		name: "Dr. Shishir Sinha",
		post: "Director-General, CIPET, Govt of India",
		photo: "/keynote-speakers/shishirsinha.jpg",
	},
	{
		name: "Dr. K.K. Pant",
		post: "Director, IIT, Roorkee",
		photo: "/keynote-speakers/kkpant.jpg",
	},
	{
		name: "Dr. Makarand Ghangrekar",
		post: "Director, NIT, Puducherry",
		photo: "/keynote-speakers/ghangrekar.jpg",
	},
	{
		name: "Dr. Deepak Pant",
		post: "Senior Scientist, Sustainable Chemistry, Flemish Institute for Technological Research, VITO, Belgium",
		photo: "/keynote-speakers/deepakpant.jpg",
	},
	{
		name: "Aniruddha B. Pandit",
		post: "Vice-Chancellor, Institute of Chemical Technology, Mumbai",
		photo: "/keynote-speakers/pandit.jpg",
	},
	{
		name: "Dr. Sameer Jadhav",
		post: "Professor, IIT, Bombay",
		photo: "/keynote-speakers/sameerjadhav.jpg",
	},
	{
		name: "Anil Verma",
		post: "Professor, IIT, Delhi",
		photo: "/keynote-speakers/anilverma.jpg",
	},
	{
		name: "Dr. P. Sesha Talpa Sai",
		post: "Professor, IIT, Madras",
		photo: "/keynote-speakers/sesha.jpg",
	},
	{
		name: "Dr. Shriram Sonawane",
		post: "Professor, VNIT, Nagpur",
		photo: "/keynote-speakers/sonawane.jpg",
	},
	{
		name: "Dr. Anand Kishor Kola",
		post: "Professor, NIT, Warangal",
		photo: "/keynote-speakers/kola.jpg",
	},
	{
		name: "Dr. Manish Vashishtha",
		post: "Professor, MNIT, Jaipur",
		photo: "/keynote-speakers/vashishtha.jpg",
	},
	{
		name: "Dr. Sushil Kumar",
		post: "Associate Professor, MNNIT, Allahabad (Prayagraj)",
		photo: "/keynote-speakers/sushilkumar.jpg",
	},
	{
		name: "Dr. Sunil A Patil",
		post: "Associate Professor, IISER-Mohali",
		photo: "/keynote-speakers/sunilpatil.jpg",
	},
	{
		name: "Dr. Deepak Jadhav",
		post: "Eminent Scientist, Korea Maritime and Ocean University (KMOU), South Korea",
		photo: "/keynote-speakers/deepakjadhav.jpg",
	},
	{
		name: "Dr. Parag Sadgir",
		post: "Professor, COEP, Pune",
		photo: "/keynote-speakers/sadgir.jpg",
	},
	{
		name: "Dr. Hiren Rawal",
		post: "Eminent scientist, CSIR CSMCRI, Bhavnagar",
		photo: "/keynote-speakers/rawal.jpg",
	},
	{
		name: "Mahesh S. Dharne",
		post: "Eminent scientist, CSIR-NCL, Pune",
		photo: "/keynote-speakers/dharne.jpg",
	},
];

export default function KeynoteSpeakers() {
	return (
		<div className="py-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Keynote Speakers
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-2">
					ASREEM 2026 brings together distinguished keynote speakers from premier
					institutions and organizations worldwide.
				</p>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
					Their expertise and insights will inspire, inform, and elevate the
					conference experience for all participants.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{speakers.map((speaker, idx) => (
						<div
							key={idx}
							className="bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-2xl shadow-lg flex flex-col items-center p-6 border border-green-100 hover:scale-105 transition-transform duration-200 group"
						>
							<div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-green-600 bg-white shadow-md group-hover:border-amber-500">
								<Image
									src={speaker.photo}
									alt={speaker.name}
									fill
									style={{ objectFit: "cover" }}
									sizes="128px"
								/>
							</div>
							<div className="text-lg font-bold text-green-900 text-center group-hover:text-amber-700 transition-colors">
								{speaker.name}
							</div>
							<div className="text-sm text-gray-700 text-center mt-2 group-hover:text-green-800 transition-colors">
								{speaker.post}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}