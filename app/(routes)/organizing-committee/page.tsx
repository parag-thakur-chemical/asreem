import Image from "next/image";
import Link from "next/link";

const committee = [
  {
    role: "Patron",
    members: [
      {
        name: "Prof(Dr). Anupam Shukla",
        post: "Director, SVNIT, Surat",
        photo: "/organizing-committee/anupam-shukla.jpg",
        portfolio: "https://www.svnit.ac.in/web/brief-about-director.php"
      },
      {
        name: "Dr. Shishir Sinha",
        post: "Director-General, CIPET, Govt of India",
        photo: "/keynote-speakers/shishirsinha.jpg",
        portfolio: "https://www.cipet.gov.in/our-team/our-team-dg-profile.php"
      },
    ],
  },
  {
    role: "Chairmen",
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
        post: "Professor, Dept. of Chem Engg, SVNIT, Surat",
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
        post: "Professor, Motilal Nehru National Institute of Technology Allahabad, Prayagraj",
        photo: "/keynote-speakers/sushilkumar.jpg",
        portfolio: "https://mnnit.ac.in/profile/sushilk"
      },
      {
        name: "Dr.  Parag Sadgir",
        post: "Dean, Engineering and Technology, COEP, Pune",
        photo: "/keynote-speakers/parag-sadgir.jpg",
        portfolio: "https://www.paragsadgir.com/"
      },
    ],
  },
  {
    role: "Student Coordinators",
    members: [
      {
        name: "Dr. Zavin R. Gajera",
        post: "Student Coordinator (Overall Session Management)",
        photo: "/organizing-committee/zavin.jpg",
        portfolio: "https://www.linkedin.com/in/dr-zavin-r-gajera-170771168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Pavitra Sarang",
        post: "Student Coordinator (Venue	&	Logistics	Committee)",
        photo: "/organizing-committee/pavitra.jpg",
        portfolio: "https://www.linkedin.com/in/pavitra-sarang-616a901b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      // {
      //   name: "Aaliya Javed",
      //   post: "Student Coordinator (Student	Coordination Committee)",
      //   photo: "/organizing-committee/aaliya-javed.jpg",
      //   portfolio: "https://www.linkedin.com/in/aaliya-javed-42a338204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      // },
      {
        name: "Bhargav Shukla",
        post: "Student Coordinator (Student	Coordination Committee )",
        photo: "/organizing-committee/bhargava.jpg",
        portfolio: "https://www.linkedin.com/in/bhargav-shukla-7442a2150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Priti Bansod",
        post: "Student Coordinator (Venue	&	Logistics	Committee)",
        photo: "/organizing-committee/priti.jpg",
        portfolio: "https://www.linkedin.com/in/priti-bansod-72aa61238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Jayraj Rana",
        post: "Student Coordinator (Sponsorship	&	Finance	Committee)	",
        photo: "/organizing-committee/jayraj'.jpg",
        portfolio: "https://www.linkedin.com/in/jayraj-rana-3502841b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Jay Narang",
        post: "Student Coordinator (Publicity	&	Promotion	Committee) ",
        photo: "/organizing-committee/jay-narang.jpg",
        portfolio: "https://www.linkedin.com/in/jay-narang-937a27144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Anushriba Rathod",
        post: "Student Coordinator (Hospitality	&	Accommodation	Committee)",
        photo: "/organizing-committee/anushriba.jpg",
        portfolio: "https://www.linkedin.com/in/anushriba-rathod-647627222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Raj Parmar",
        post: "Student Coordinator (Registration	&	Session	Management Committee)",
        photo: "/organizing-committee/raj-parmar.jpg",
        portfolio: "https://www.linkedin.com/in/rcparmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Nishit Patel",
        post: "Student Coordinator (Registration	&	Session	Management Committee)",
        photo: "/organizing-committee/nishit.jpg",
        portfolio: "https://www.linkedin.com/in/nishit-patel-43835819a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Smit Sachani",
        post: "Student Coordinator (Registration	&	Session	Management Committee)",
        photo: "/organizing-committee/smit sachnai.jpg",
        portfolio: "https://www.linkedin.com/in/smit-sachani-2388b321b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Dushyant Singh Hada",
        post: "Student Coordinator (Website	&	Social	Media	Committee )",
        photo: "/organizing-committee/dushyant-singh-hada.jpg",
        portfolio: "https://www.linkedin.com/in/dushyant-singh-hada-7403912b0/"
      },
      {
        name: "Yash Dumbhare",
        post: "Student Coordinator (Website	&	Social	Media	Committee )",
        photo: "/organizing-committee/yash-dumbhare.jpg",
        portfolio: "https://www.linkedin.com/in/yash-dumbhare-95225b2b4/"
      },
      {
        name: "Shiv Pratap Gupta",
        post: "Student Coordinator (Website	&	Social	Media	Committee )",
        photo: "/organizing-committee/shiv-pratap.jpg",
        portfolio: "https://www.linkedin.com/in/shiv-pratap-gupta-u24ch005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Moiz Ratlamwala",
        post: "Student Coordinator (Sponsorships)",
        photo: "/organizing-committee/moiz-ratlamwala.jpg",
        portfolio: "https://www.linkedin.com/in/moiz-ratlamwala-983811319/"
      },
      {
        name: "Zohair Nalawala",
        post: "Student Coordinator (Website	&	Social	Media	Committee )",
        photo: "/organizing-committee/zohair.jpg",
        portfolio: "https://www.linkedin.com/in/zoher-nalawala-ab09932a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
    ],
  },
];

export default function OrganizingCommittee() {
  return (
    <div className="mt-14 py-12 bg-white min-h-screen">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">


        {/* Patron row with both members */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
            {committee[0].role}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {committee[0].members.map((member, mIdx) => (
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

        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Organizing Committee
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>

        {/* Render the rest of the committee */}
        <div className="space-y-12">
          {committee.slice(1).map((section, idx) => (
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
