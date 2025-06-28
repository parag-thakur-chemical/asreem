const internationalAdvisory = [
  {
    name: "Dr. Ioannis Ieropoulos",
    post: "Professor - Bioenergy and Self-sustainable System, Bristol Robotics Laboratory, UWE Bristol, United Kingdom"
  },
  {
    name: "Dr. Deepak Pant",
    post: "Senior Scientist, Flemish Institute for Technological Research (VITO), Belgium"
  },
  {
    name: "Prof. Muthupandian Ashokkumar",
    post: "Assistant Deputy Vice Chancellor, University of Melbourne, Australia"
  },
  {
    name: "Dr. Eldon R. Rene",
    post: "Senior Lecturer in Resource Recovery Technology, IHE Delft Institute for Water Education, Netherlands"
  },
  {
    name: "Dr. Iwona Gajda",
    post: "Senior Research Fellow, Bristol Robotics Laboratory, UWE Bristol, United Kingdom"
  },
  {
    name: "Dr. Nancy G. Love",
    post: "Borchardt and Glysson Collegiate Professor, University of Michigan"
  },
  {
    name: "Dr. Yaqian Zhao",
    post: "Visiting Professor, University of Dublin"
  },
  {
    name: "Dr. Dyllon Randall",
    post: "Associate Professor, University of Cape Town, South Africa"
  },
  {
    name: "Dr. Sherub Phuntsho",
    post: "Senior Lecturer, University of Technology Sydney"
  },
  {
    name: "Dr. Treavor Boyer",
    post: "Associate Professor, Arizona State University"
  },
  {
    name: "Dr. Harold Leverenz",
    post: "Research Engineer, University of California, Davis, United States"
  },
  {
    name: "Dr. Muhammad A. Batiha",
    post: "Associate Professor, Chemical Engineering, AlHussein Bin Talal University, Jordan"
  },
  {
    name: "Dr. Ludo Diels",
    post: "Research Leader, Institute for Environment & Sustainable Development, Flemish Institute for Technological Research (VITO), Belgium"
  },
  {
    name: "Dr. Jaume Puigagut",
    post: "Associate Professor, Polytechnic University of Catalonia, Barcelona, Spain"
  },
  {
    name: "Dr. Abdullah Al-Mamun",
    post: "Associate Professor, Sultan Qaboos University, Muscat, Oman"
  },
  {
    name: "Dr. Nguyen Dinh Duc",
    post: "Professor, The Head of Laboratory A, Vietnam National University, Hanoi"
  },
  {
    name: "DI Dr. Techn. Hans-Jörg Bart",
    post: "Professor, Technical University of Kaiserslautern, Germany"
  },
  {
    name: "Dr. Pietro Bartocci",
    post: "Researcher, Biomass Research Center, University of Perugia, Italy"
  },
  {
    name: "Dr. Hafiz Muhammad Ali",
    post: "Professor, King Fahd University of Petroleum and Minerals, 31261 Dhahran, Saudi Arabia"
  },
  {
    name: "Dr. Hong Liu",
    post: "Professor, Biological and Ecological Engineering, Oregon State University, USA"
  },
  {
    name: "Dr. Uwe Schröder",
    post: "Institute of Environmental and Sustainable Chemistry, Technical University of Braunschweig, Germany"
  },
];

const nationalAdvisory = [
  {
    name: "Dr. Makarand M. Ghangrekar",
    post: "Director, National Institute of Technology Puducherry"
  },
  {
    name: "Dr. Asheesh Kumar Yadav",
    post: "Principal Scientist, CSIR-Institute of Minerals & Materials Technology, Bhubaneswar - 751 013, Odisha, INDIA"
  },
  {
    name: "Dr. S. Venkata Mohan",
    post: "Senior Scientist, CSIR-Indian Institute of Chemical Technology (CSIR-IICT), Hyderabad"
  },
  {
    name: "Dr. Indumathi M Nambi",
    post: "Professor, Environment and Water Resources Division, Indian Institute of Technology, Madras"
  },
  {
    name: "Dr. S. Gajalakshmi",
    post: "Assistant Professor, Pollution Control and Environmental Engineering, Pondicherry University, Pondicherry"
  },
  {
    name: "Dr. Dipak Ashok Jadhav",
    post: "Assistant Professor, Agricultural Engineering, Maharashtra Institute of Technology, Aurangabad"
  },
  {
    name: "Dr. Surajbhan Sevda",
    post: "Assistant Professor, NIT, Warangal"
  },
  {
    name: "Dr. Sunil A. Patil",
    post: "Assistant Professor, Environmental Sciences, Indian Institute of Science Education and Research IISER Mohali"
  },
  {
    name: "Dr. Sushil Kumar",
    post: "Associate Professor, Department of Chemical Engineering, MNNIT Allahabad"
  },
  {
    name: "Dr. Parag Sadgir",
    post: "Professor, Civil Engineering Department, College of Engineering, Pune"
  },
  {
    name: "Dr. K. D. Yadav",
    post: "Associate Professor, Civil Engineering Department, SVNIT, Surat"
  },
  {
    name: "Dr. Abhilasha Singh Mathuriya",
    post: "Head, Department of Life Sciences, Sharda University"
  },
  {
    name: "Arun Kumar",
    post: "Assistant Professor, Division of Civil Engineering, Cochin University of science and Technology"
  },
  {
    name: "Dr. Somya Pandit",
    post: "Assistant Professor, Life Sciences, Sharda University"
  },
  {
    name: "Dr. Shriram Sonawane",
    post: "Professor, Department of Chemical Engineering, VNIT, Nagpur"
  },
  {
    name: "Dr. Pradeep Kumar",
    post: "Distinguished Professor, Sharda University"
  },
  {
    name: "Dr. Shrish Sonawane",
    post: "Professor, Department of Chemical Engineering, NIT, Warangal"
  },
  {
    name: "Dr. Anand Kishore Kola",
    post: "Professor, Department of Chemical Engineering NIT, Warangal"
  },
  {
    name: "Dr. Ajay R. Tembhurkar",
    post: "Professor, Civil Engineering Department VNIT, Nagpur"
  },
  {
    name: "Dr. R S Sapkal",
    post: "Professor, Chemical Technology, SGBA University, Amravati, Maharastra"
  },
  {
    name: "Dr. Priyanand Agale",
    post: "Founder and Advisor, Eco-Needs Foundation"
  },
];

export default function AdvisoryCommittee() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Advisory Committee
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">International Advisory Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-12">
          {internationalAdvisory.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 via-white to-green-100 rounded-xl shadow-xl flex flex-col items-center p-6 border-2 border-blue-200 hover:scale-105 transition-transform duration-200 group">
              <div className="text-lg font-bold text-blue-900 text-center mb-2 group-hover:text-green-700 transition-colors">{member.name}</div>
              <div className="text-sm text-gray-700 text-center">{member.post}</div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">National Advisory Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {nationalAdvisory.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50 via-white to-green-100 rounded-xl shadow-xl flex flex-col items-center p-6 border-2 border-amber-200 hover:scale-105 transition-transform duration-200 group">
              <div className="text-lg font-bold text-amber-900 text-center mb-2 group-hover:text-green-700 transition-colors">{member.name}</div>
              <div className="text-sm text-gray-700 text-center">{member.post}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}