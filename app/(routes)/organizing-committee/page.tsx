import Image from "next/image";
import Link from "next/link";

const committee = [
  {
    role: "Chief Patron",
    members: [
      {
        name: "Dr. Anupam Shukla",
        post: "Director, SVNIT, Surat",
        photo: "/organizing-committee/anupam-shukla.jpg",
        portfolio: "https://www.svnit.ac.in/web/brief-about-director.php"
      },
    ],
  },
  {
    role: "Patron",
    members: [
      {
        name: "Dr. Meghal Desai",
        post: "Head, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/meghal-desai.jpg",
        portfolio: "https://svnit.ac.in/facup/CV_Meghal_Website_July2025.pdf"
      },
    ],
  },
  {
    role: "Chairman",
    members: [
      {
        name: "Dr. Mousumi Chakraborty",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/mousumi-chakraborty.jpg",
        portfolio: "https://svnit.ac.in/facup/Webpage_MC_19012024.pdf"
      },
      {
        name: "Dr. Arvind Kumar Mungray",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/arvind-mungray.jpg",
        portfolio: "https://www.svnit.ac.in/facup/akm.pdf"
      },
    ],
  },
  {
    role: "Secretary",
    members: [
      {
        name: "Dr. V.N. Lad",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/vn-lad.jpg",
        portfolio: "https://www.svnit.ac.in/facup/homepage__vnl/index%20vnl.htm"
      },
      {
        name: "Dr. Alka Mungray",
        post: "Associate Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/alka-mungray.jpg",
        portfolio: "https://www.svnit.ac.in/facup/aakm.pdf"
      },
      {
        name: "Dr. Jogender Singh",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/jogender-singh.jpg",
        portfolio: "https://www.svnit.ac.in/facup/Jogender-Singh-resume.pdf"
      },
      {
        name: "Dr. Parag Thakur",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat",
        photo: "/organizing-committee/parag-thakur.jpg",
        portfolio: "https://portfolio-website-drab-nine.vercel.app/"
      },
    ],
  },
  {
    role: "Faculty Coordinators",
    members: [
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
        name: "Dr. Priyanand Agale",
        post: "Founder President & Pioneer of Eco Revolution Movement, Water Hero of India",
        photo: "/keynote-speakers/priyanand-agale.jpg",
        portfolio: "https://www.linkedin.com/in/priyanandagale/"
      },
      {
        name: "Dr. Shirish H. Sonawane",
        post: "Professor , National Institute of Technology, Warangal",
        photo: "/organizing-committee/shirish-sonawane.jpg",
        portfolio: "https://www.researchgate.net/profile/Shirish-Sonawane"
      },
      {
        name: "Dr.  Sushil Kumar",
        post: "professor, Motilal Nehru National Institute of Technology Allahabad, Prayagraj",
        photo: "/keynote-speakers/sushilkumar.jpg",
        portfolio: "https://mnnit.ac.in/profile/sushilk"
      },
    ],
  },
  {
    role: "Student Coordinators",
    members: [
      {
        name: "Dushyant Singh Hada",
        post: "Student Coordinator",
        photo: "/organizing-committee/dushyant-singh-hada.jpg",
        portfolio: "https://www.linkedin.com/in/dushyant-singh-hada-7403912b0/"
      },
      {
        name: "Yash Dumbhare",
        post: "Student Coordinator",
        photo: "/organizing-committee/yash-dumbhare.jpg",
        portfolio: "https://www.linkedin.com/in/yash-dumbhare-95225b2b4/"
      },
      {
        name: "Shiv Pratap Gupta",
        post: "Student Coordinator",
        photo: "/organizing-committee/shiv-pratap.jpg",
        portfolio: "https://www.linkedin.com/in/shiv-pratap-gupta-u24ch005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
    ],
  },
];

export default function OrganizingCommittee() {
  return (
    <div className="mt-14 py-12 bg-white min-h-screen">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Organizing Committee
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>

        {/* Chief Patron + Patron in the same row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[committee[0], committee[1]].map((section, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
                {section.role}
              </h2>
              {section.members.map((member, mIdx) => (
                <Link
                  key={mIdx}
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-72 h-72 bg-gradient-to-br from-lime-50 via-white to-emerald-100 
                             rounded-2xl shadow-lg flex flex-col items-center p-6 
                             border border-lime-200 hover:scale-105 transition-transform 
                             duration-200 group cursor-pointer"
                >
                  <div className="w-32 h-32 mb-4 relative rounded-md overflow-hidden 
                                  border-4 border-emerald-600 bg-white shadow-md 
                                  group-hover:border-lime-500">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="128px"
                    />
                  </div>
                  <div className="text-lg font-bold text-emerald-900 text-center 
                                  group-hover:text-lime-700 transition-colors">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-700 text-center mt-2 
                                  group-hover:text-emerald-800 transition-colors">
                    {member.post}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Render the rest of the committee */}
        <div className="space-y-12">
          {committee.slice(2).map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                {section.role}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {section.members.map((member, mIdx) => (
                  <Link
                    key={mIdx}
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-72 h-72 bg-gradient-to-br from-lime-50 via-white to-emerald-100 
                               rounded-2xl shadow-lg flex flex-col items-center p-6 
                               border border-lime-200 hover:scale-105 transition-transform 
                               duration-200 group cursor-pointer"
                  >
                    <div className="w-32 h-32 mb-4 relative rounded-md overflow-hidden 
                                    border-4 border-emerald-600 bg-white shadow-md 
                                    group-hover:border-lime-500">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="128px"
                      />
                    </div>
                    <div className="text-lg font-bold text-emerald-900 text-center 
                                    group-hover:text-lime-700 transition-colors">
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-700 text-center mt-2 
                                    group-hover:text-emerald-800 transition-colors">
                      {member.post}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
