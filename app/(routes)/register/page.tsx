import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | ASREEM 2026",
  description: "Registration for ASREEM 2026 International Conference",
};

export default function RegisterPage() {
  const registrationFeesOffline = [
    { category: "Practicing Engineers/Professionals", fee: "₹7,080/-" },
    { category: "Academicians/Scientists/Researchers", fee: "₹5,900/-" },
    { category: "PhD Students/Research Fellows", fee: "₹3,540/-" },
    { category: "Under/Post-Graduate Students", fee: "₹2,360/-" },
    { category: "Attendees", fee: "₹1,770/-" },
    { category: "Foreign Students (PhD/PG/UG)", fee: "₹8,565 (USD 100)/-" },
    { category: "Foreign Faculty/Scientist", fee: "₹12,850 (USD 150)/-" },
  ];

  const registrationFeesOnline = [
    { category: "Practicing Engineers/Professionals", fee: "₹5,900/-" },
    { category: "Academicians/Scientists/Researchers", fee: "₹3,540/-" },
    { category: "PhD Students/Research Fellows", fee: "₹2,360/-" },
    { category: "Under/Post-Graduate Students", fee: "₹1,770/-" },
    { category: "Attendees", fee: "₹1,180/-" },
    { category: "Foreign Students (PhD/PG/UG)", fee: "₹6,423 (USD 75)/-" },
    { category: "Foreign Faculty/Scientist", fee: "₹8,565 (USD 100)/-" },
  ];

  const importantDates = [
    { event: "Last Date of Abstract Submission", date: "30th Mar. 2026" },
    { event: "Last Date of Abstract Acceptance", date: "10th Apr. 2026" },
    { event: "Last Date of Registration", date: "15th Apr. 2026" },
    { event: "Last Date of Fees Payment", date: "15th Apr. 2026" },
    { event: "Conference Dates", date: "15-17 May. 2026" },
  ];

  return (
    <div className="mt-14 py-4 sm:py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Registration
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Register now to secure your participation in ASREEM 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* How to Apply */}
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">How to Apply</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Abstract submission is closed for ASREEM 2026.</li>
              
              <li>After receiving confirmation from the organizing committee of ASREEM 2.0, participants need to pay registration fees as given below.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Fees (inclusive of 18% GST)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Offline Participation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Fee (INR)</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {registrationFeesOffline.map((item, index) => (
                      <tr key={`offline-${index}`}>
                        <td className="py-3 text-sm text-gray-700">{item.category}</td>
                        <td className="py-3 text-sm font-medium text-gray-900 text-right">{item.fee}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Online Participation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Fee (INR)</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {registrationFeesOnline.map((item, index) => (
                      <tr key={`online-${index}`}>
                        <td className="py-3 text-sm text-gray-700">{item.category}</td>
                        <td className="py-3 text-sm font-medium text-gray-900 text-right">{item.fee}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center px-2">
              <p className="text-gray-700 mb-4">For confirmation of registration, fill out the following Google form:</p>
              <a
                href="https://forms.gle/VoHdkZ5edvM88vqQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base"
              >
                Google Form for Registration
              </a>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Participants can pay the registration fees via NEFT/IMPS/UPI
              using the following account details or QR code.
            </p>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div>
                  <p className="mb-2">
                    <span className="font-medium">Account Number:</span>{" "}
                    37030749143
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">IFSC Code:</span>{" "}
                    SBIN0003320
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">SWIFT Code:</span>{" "}
                    SBININBB260
                  </p>
                  <p>
                    <span className="font-medium">Account Name:</span>{" "}
                    Director, SVNIT
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-xs mb-2 mx-auto">
                    <img
                      src="/qr-code.png"
                      alt="Registration QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Scan here to pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
            <ul className="space-y-4">
              {importantDates.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <span className="text-gray-700">{item.event}</span>
                  <span className="font-medium text-gray-900 bg-green-50 px-3 py-1 rounded-full text-sm">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Department of Chemical Engineering,
              </h3>
              <p className="text-gray-700">
                Sardar Vallabhbhai National Institute of Technology,
              </p>
              <p className="text-gray-700">Surat - 395 007, Gujarat, India</p>
            </div>
            <div>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+918287505262" className="hover:underline block sm:inline">
                    8287505262
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+919904173019" className="hover:underline block sm:inline">
                    9904173019
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+918999254795" className="hover:underline block sm:inline">
                    8999254795
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}