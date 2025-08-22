import Image from "next/image";
import Link from "next/link";

const speakers = [

  {
    name: "Dr Hussein Mohammed",
    post: " Professor,  School of Engineering of Edith Cowan University",
    photo: "/keynote-speakers/hussein-mohammed.jpg",
    portfolio: "https://www.ecu.edu.au/schools/engineering/staff/profiles/senior-lecturers/dr-hussein-mohammed"
  },
  {
    name: "Dr. Deepak Pant",
    post: "Senior Scientist, Sustainable Chemistry, VITO, Belgium",
    photo: "/keynote-speakers/deepakpant.jpg",
    portfolio: "https://vito.be/en/about-vito/employees/deepak-pant"
  },

  {
    name: "Dr. Dyllon Randall",
    post: "Associate Professor, University of Capetown, South Africa",
    photo: "/keynote-speakers/dyllon.jpg",
    portfolio: "https://ebe.uct.ac.za/department-civil-engineering/aprof-dyllon-randall"
  },
  {
    name: "Dr. Sherub Phuntsho",
    post: "Associate Professor, University of Technology Sydney, Australia",
    photo: "/keynote-speakers/sherub.jpg",
    portfolio: "https://scholar.google.com/citations?user=qTLAA70AAAAJ&hl=en"
  },
  


  {
    name: "Dr. Sage R. Hiibel",
    post: "Associate Professor ,University of Nevada, Reno",
    photo: "/keynote-speakers/sagehiibel.jpg",
    portfolio: "https://www.unr.edu/cme/people/sage-hiibel"
  },

  {
    name: "Dr. Eldon R. Rene",
    post: "Associate Professor ,Resource Recovery Technology, IHE Delft Institute for Water Education, The Netherlands",
    photo: "/keynote-speakers/eldon-raj.jpg",
    portfolio: "https://www.un-ihe.org/people/staff/eldon-raj"
  },


  
  {
    name: "Dr. Athar Hussain",
    post: "Professor, Netaji Subhas University of Technology",
    photo: "/keynote-speakers/athar-hussain.jpg",
    portfolio: "athar-hussain.jpg"
  },
  {
    name: "Dr. S Senthilmurugan",
    post: "Professor, Indian Institute of Technology Guwahati",
    photo: "/keynote-speakers/senthlimurugan.jpg",
    portfolio: "https://iitg.ac.in/chemeng/faculty_profile.php?name=ss"
  },
  {
    name: "Dr. Hiralal Pramanik",
    post: "Professor, Indian Institute of Technology (BHU) Varanasi",
    photo: "/keynote-speakers/hiralal-pramanik.jpg",
    portfolio: "https://iitg.ac.in/chemeng/faculty_profile.php?name=ss"
  },
  
 
  {
    name: "Dr. Shirish H. Sonawane",
    post: "Professor , National Institute of Technology, Warangal",
    photo: "/organizing-committee/shirish-sonawane.jpg",
    portfolio: "https://www.researchgate.net/profile/Shirish-Sonawane"
  },
  {
    name: "Dr. Anil Kumar Katare",
    post: "Senior Principal Scientist ,CSIR – Indian Institute of Integrative Medicine",
    photo: "/keynote-speakers/anil-katara.jpg",
    portfolio: "https://iiim.res.in/people-iiim/4159/"
  },
  {
    name: "Dr.  Sushil Kumar",
    post: "professor, Motilal Nehru National Institute of Technology Allahabad, Prayagraj",
    photo: "/keynote-speakers/sushilkumar.jpg",
    portfolio: "https://mnnit.ac.in/profile/sushilk"
  },
  {
    name: "Dr. Sunil A. Patil",
    post: "Assistant Professor ,  Indian Institute of Science Education and Research Mohali (IISER Mohali)",
    photo: "/keynote-speakers/sunilpatil.jpg",
    portfolio: "https://www.iisermohali.ac.in/faculty/ees/sunil"
  },
  {
    name: "Dr. Priyanand Agale",
    post: "Founder President & Pioneer of Eco Revolution Movement, Water Hero of India",
    photo: "/keynote-speakers/priyanand-agale.jpg",
    portfolio: "https://www.linkedin.com/in/priyanandagale/"
  },
 

 
];


export default function KeynoteSpeakers() {
	return (
		<div className="mt-14 py-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Invited Speakers
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-2">
					ASREEM 2026 features an exceptional lineup of invited speakers representing leading research institutions, academia, and industry.
				</p>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
					They will share their cutting-edge work, diverse perspectives, and valuable experiences to foster collaboration and spark meaningful discussions among participants.
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
