import Image from "next/image";
import Link from "next/link";

const committee = [
  {
    role: "Chief Patron",
    members: [
      {
        name: "Dr. Anupam Shukla",
        post: "Director, SVNIT, Surat-395 007",
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
        post: "Head, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/meghal-desai.jpg",
        portfolio: "https://svnit.ac.in/facup/CV_Meghal_Website_July2025.pdf"
      },
    ],
  },
  {
    role: "Conveners",
    members: [
      {
        name: "Dr. Mousumi Chakraborty",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/mousumi-chakraborty.jpg",
        portfolio: "https://svnit.ac.in/facup/Webpage_MC_19012024.pdf"
      },
      {
        name: "Dr. Arvind Kumar Mungray",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/arvind-mungray.jpg",
        portfolio: "https://www.svnit.ac.in/facup/akm.pdf"
      },
    ],
  },
  {
    role: "Coordinators",
    members: [
      {
        name: "Dr. V.N. Lad",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/vn-lad.jpg",
        portfolio: "https://www.svnit.ac.in/facup/homepage__vnl/index%20vnl.htm"
      },
      {
        name: "Dr. Alka Mungray",
        post: "Associate Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/alka-mungray.jpg",
        portfolio: "https://www.svnit.ac.in/facup/aakm.pdf"
      },
      {
        name: "Dr. Jogender Singh",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/jogender-singh.jpg",
        portfolio: "https://www.svnit.ac.in/facup/Jogender-Singh-resume.pdf"
      },
      {
        name: "Dr. Parag Thakur",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/parag-thakur.jpg",
        portfolio: "https://portfolio-website-drab-nine.vercel.app/"
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
    ],
  },
];

export default function OrganizingCommittee() {
  return (
    <div className="py-12 bg-white min-h-screen">
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
