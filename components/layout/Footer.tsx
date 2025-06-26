import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contacts = [
    {
      name: "Dr. A. K. Mungray",
      phone: "+91-261-2201605",
      email: "akm@ched.svnit.ac.in"
    },
    {
      name: "Dr. V. N. Lad",
      phone: "+91-261-2201684",
      email: "vnl@ched.svnit.ac.in"
    },
    {
      name: "Dr. Alka A. Mungray",
      phone: "+91-261-2201716",
      email: "bag@ched.svnit.ac.in"
    },
    {
      name: "Dr. Mausumi Chakraborty",
      phone: "+91-261-2201",
      email: "mchakraborty@ched.svnit.ac.in"
    }
  ];

  return (
    <footer className="bg-green-900 text-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About ASREEM</h3>
            <p className="text-green-100">
              International Conference on Advances in Sustainable Resources, Energy, and Environmental Management
            </p>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-300" />
              <span className="text-green-100">SVNIT, Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-conference" className="text-green-100 hover:text-white transition-colors">About Conference</Link></li>
              <li><Link href="/call-for-abstracts" className="text-green-100 hover:text-white transition-colors">Call for Abstracts</Link></li>
              <li><Link href="/keynote-speakers" className="text-green-100 hover:text-white transition-colors">Keynote Speakers</Link></li>
              <li><Link href="/dates-fees" className="text-green-100 hover:text-white transition-colors">Important Dates</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-semibold text-green-50">{contact.name}</h4>
                  <div className="flex items-center space-x-2 text-green-100">
                    <FaPhoneAlt className="w-4 h-4" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-100">
                    <FaEnvelope className="w-4 h-4" />
                    <a href={`mailto:${contact.email}`} className="hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Venue</h3>
            <div className="space-y-2 text-green-100">
              <p>Department of Chemical Engineering</p>
              <p>Sardar Vallabhbhai National Institute of Technology</p>
              <p>Surat - 395 007, Gujarat, India</p>
              <div className="pt-2">
                <a 
                  href="https://www.svnit.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <FaGlobe className="mr-2" />
                  www.svnit.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-200">
          <p>© {currentYear} ASREEM. All Rights Reserved | SVNIT, SURAT</p>
        </div>
      </div>
    </footer>
  );
}
