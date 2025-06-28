import Image from "next/image";

const committee = [
  {
    role: "Chief Patron",
    members: [
      {
        name: "Prof. Anupam Shukla",
        post: "Director, SVNIT, Surat-395 007",
        photo: "/organizing-committee/anupam-shukla.jpg",
      },
    ],
  },
  {
    role: "Patron",
    members: [
      {
        name: "Prof. Meghal Desai",
        post: "Head, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/meghal-desai.jpg",
      },
    ],
  },
  {
    role: "Conveners",
    members: [
      {
        name: "Prof. Mousumi Chakraborty",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/mousumi-chakraborty.jpg",
      },
      {
        name: "Prof. Arvind Kumar Mungray",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/arvind-mungray.jpg",
      },
    ],
  },
  {
    role: "Coordinators",
    members: [
      {
        name: "Prof. V.N. Lad",
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/vn-lad.jpg",
      },
      {
        name: "Dr. Alka Mungray",
        post: "Associate Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/alka-mungray.jpg",
      },
      {
        name: "Dr. Jogender Singh",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/jogender-singh.jpg",
      },
      {
        name: "Dr. Parag Thakur",
        post: "Assistant Professor, Dept. of Chem Engg, SVNIT, Surat-395 007",
        photo: "/organizing-committee/parag-thakur.jpg",
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
      },
      {
        name: "Yash Dumbhare",
        post: "Student Coordinator",
        photo: "/organizing-committee/yash-dumbhare.jpg",
      },
    ],
  },
];

export default function OrganizingCommittee() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Organizing Committee
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        <div className="space-y-12">
          {committee.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                {section.role}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {section.members.map((member, mIdx) => (
                  <div
                    key={mIdx}
                    className="w-72 h-72 bg-gradient-to-br from-lime-50 via-white to-emerald-100 rounded-2xl shadow-lg flex flex-col items-center p-6 border border-lime-200 hover:scale-105 transition-transform duration-200 group"
                  >
                    <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-emerald-600 bg-white shadow-md group-hover:border-lime-500">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="128px"
                      />
                    </div>
                    <div className="text-lg font-bold text-emerald-900 text-center group-hover:text-lime-700 transition-colors">
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-700 text-center mt-2 group-hover:text-emerald-800 transition-colors">
                      {member.post}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}