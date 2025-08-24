import Image from "next/image";
import Link from "next/link";
const speakers = [
  {
    name: "Dr. Shishir Sinha",
    post: "Director-General, CIPET, Govt of India",
    photo: "/keynote-speakers/shishirsinha.jpg",
    portfolio: "https://www.cipet.gov.in/our-team/our-team-dg-profile.php"
  },
  {
    name: "Dr. Yannis Ieropoulos ",
    post: "Professor & Head of Department - Civil, Maritime & Environmental Engineering, Faculty of Engineering and Physical Sciences ,University of Southampton, UK",
    photo: "/keynote-speakers/yannis.jpg",
    portfolio: "https://www.southampton.ac.uk/people/5z9k7x/professor-yannis-ieropoulos"
  },
  {
    name: "Dr. S. VenkataMohan",
    post: "Director, CSIR NEERI, Nagpur",
    photo: "/keynote-speakers/venkatamohan.jpg",
    portfolio: "https://www.neeri.res.in/file_divisions/62722439_Dr.%20S.%20Venkata%20Mohan%20CV.pdf"
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
    name: "Dr. Aniruddha B. Pandit",
    post: "Vice-Chancellor, Institute of Chemical Technology, Mumbai",
    photo: "/keynote-speakers/pandit.jpg",
    portfolio: "https://abpandit.weebly.com/"
  },
  {
    name: "Dr. Muthupandian Ashokkumar",
    post: "Director, Melbourne Global Centre - Delhi , University of Melbourne, Australia",
    photo: "/keynote-speakers/muthupandian-ashokkumar.jpg",
    portfolio: "https://findanexpert.unimelb.edu.au/profile/1590-muthupandian-ashokkumar"
  },
  {
    name: "Dr. Mohsen Sharifpur",
    post: "Professor, School of Mechanical, Industrial and Aeronautical Engineering at the University of the Witwatersrand (Wits), South Africa.",
    photo: "/keynote-speakers/mohsen-sharifpur.jpg",
    portfolio: "https://scholar.google.com/citations?hl=en&user=Ws1wL5MAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    name: "Dr. Sivakumar Manickam",
    post: "Professor, University of Technology Brunei",
    photo: "/keynote-speakers/sivakumar.jpg",
    portfolio: "https://www.utb.edu.bn/academics/people/sivakumar-manickam/"
  },
  {
    name: "Dr. Monoj Kumar Mondal",
    post: "Professor, IIT, BHU",
    photo: "/keynote-speakers/manoj-kumar-mondal.jpg",
    portfolio: "https://iitbhu.ac.in/dept/che/people/mkmondalche"
  },
  {
    name: "Dr. Anil Verma",
    post: "Professor, IIT, Delhi",
    photo: "/keynote-speakers/anilverma.jpg",
    portfolio: "https://web.iitd.ac.in/~anilverma/"
  },
  {
    name: "Dr. Treavor Boyer",
    post: "Professor, School of Sustainable Engineering and the Built Environment (SSEBE) at ASU",
    photo: "/keynote-speakers/treavor-boyer.jpg",
    portfolio: "https://newsroom.asu.edu/experts/treavor-boyer"
  },
  {
    name: "Dr. Dong Hoon Kim",
    post: "Professor , Inha University, South Korea",
    photo: "/keynote-speakers/dong-hoon.jpg",
    portfolio: "https://www.unr.edu/cme/people/sage-hiibel"
  },

  {
    name: "Dr. Salim Hiziroglu",
    post: "Professor, Emeritus Oklahoma State University, Natural Resource Ecology & Management, Stillwater, Oklahoma, United States",
    photo: "/keynote-speakers/salim-hiziroglu.jpg",
    portfolio: "https://experts.okstate.edu/salim.hiziroglu"
  },
  {
    name: "Dr. Mohammad Ali Abdelkareem",
    post: "Professor, Sustainable and Renewable Energy Engineering Department, University of Sharjah",
    photo: "/keynote-speakers/abdelkareem.jpg",
    portfolio: "https://sciprofiles.com/profile/603600"
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
    name: "Dr. Upendra (Muni) Raval",
    post: "Science and Stewardship",
    photo: "/keynote-speakers/upendra-raval.jpg",
    portfolio: "..."
  }
];



export default function KeynoteSpeakers() {
	return (
		<div className="mt-14 py-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Plenary/Keynote Speakers
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-2">
					ASREEM 2026 brings together distinguished Plenary/keynote speakers from premier
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
