import Image from "next/image";
import Link from "next/link";

const speakers = [
  {
    name: "Dr. S. VenkataMohan",
    post: "Director, CSIR NEERI, Nagpur",
    photo: "/keynote-speakers/venkatamohan.jpg",
    portfolio: "https://www.neeri.res.in/file_divisions/62722439_Dr.%20S.%20Venkata%20Mohan%20CV.pdf"
  },
  {
    name: "Dr. Shishir Sinha",
    post: "Director-General, CIPET, Govt of India",
    photo: "/keynote-speakers/shishirsinha.jpg",
    portfolio: "https://www.cipet.gov.in/our-team/our-team-dg-profile.php"
  },
  {
    name: "Dr. K.K. Pant",
    post: "Director, IIT, Roorkee",
    photo: "/keynote-speakers/kkpant.jpg",
    portfolio: "https://iitr.ac.in/Departments/Chemical%20Engineering%20Department/People/Faculty/101000.html"
  },
  {
    name: "Dr. Makarand Ghangrekar",
    post: "Director, NIT, Puducherry",
    photo: "/keynote-speakers/ghangrekar.jpg",
    portfolio: "https://ghangrekar.com/"
  },
  {
    name: "Dr. Deepak Pant",
    post: "Senior Scientist, Sustainable Chemistry, VITO, Belgium",
    photo: "/keynote-speakers/deepakpant.jpg",
    portfolio: "https://vito.be/en/about-vito/employees/deepak-pant"
  },
  {
    name: "Aniruddha B. Pandit",
    post: "Vice-Chancellor, Institute of Chemical Technology, Mumbai",
    photo: "/keynote-speakers/pandit.jpg",
    portfolio: "https://abpandit.weebly.com/"
  },
  {
    name: "Dr. Sameer Jadhav",
    post: "Professor, IIT, Bombay",
    photo: "/keynote-speakers/sameerjadhav.jpg",
    portfolio: "https://www.che.iitb.ac.in/faculty/sameer-jadhav"
  },
  {
    name: "Anil Verma",
    post: "Professor, IIT, Delhi",
    photo: "/keynote-speakers/anilverma.jpg",
    portfolio: "https://web.iitd.ac.in/~anilverma/"
  },
  {
    name: "Dr. Shriram Sonawane",
    post: "Professor, VNIT, Nagpur",
    photo: "/keynote-speakers/sonawane.jpg",
    portfolio: "https://share.google/uih3MoOBY1aRDqIkX " 
  },
  {
    name: "Dr. Anand Kishor Kola",
    post: "Professor, NIT, Warangal",
    photo: "/keynote-speakers/kola.jpg",
    portfolio: "https://erp.nitw.ac.in/ext/profile/ch-kola"
  },
  {
    name: "Dr. Manish Vashishtha",
    post: "Professor, MNIT, Jaipur",
    photo: "/keynote-speakers/vashishtha.jpg",
    portfolio: "https://mnit.ac.in/dept_chemical/profile?fid=RK2I"
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
						<Link
							key={idx}
							href={speaker.portfolio}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-2xl 
							           shadow-lg flex flex-col items-center p-6 border border-green-100 
							           hover:scale-105 transition-transform duration-200 group cursor-pointer"
						>
							<div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden 
							                border-4 border-green-600 bg-white shadow-md 
							                group-hover:border-amber-500">
								<Image
									src={speaker.photo}
									alt={speaker.name}
									fill
									style={{ objectFit: "cover" }}
									sizes="128px"
								/>
							</div>
							<div className="text-lg font-bold text-green-900 text-center 
							                group-hover:text-amber-700 transition-colors">
								{speaker.name}
							</div>
							<div className="text-sm text-gray-700 text-center mt-2 
							                group-hover:text-green-800 transition-colors">
								{speaker.post}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
