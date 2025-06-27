import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | ASREEM 2026",
  description: "Registration for ASREEM 2026 International Conference",
};

export default function RegisterPage() {
  const registrationFees = [
    { category: "Practicing Engineers/Professionals", fee: "₹7,080/-" },
    { category: "Faculty/Researchers", fee: "₹5,900/-" },
    { category: "PhD Student/JRF/SRF", fee: "₹3,540/-" },
    { category: "Students (UG/PG)", fee: "₹2,360/-" },
  ];

  const importantDates = [
    { event: "Last Date of Abstract Submission", date: "30 September 2025" },
    { event: "Last Date of Registration", date: "15 December 2025" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Register now to secure your participation in ASREEM 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* Registration Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Registration Details
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Department of Chemical Engineering,
                <br />
                Sardar Vallabhbhai National Institute of Technology, Surat
                (Gujarat)
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Registration Fees (inclusive of 18% GST):
              </h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fee (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registrationFees.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-400 mb-6">
                <p className="text-amber-800 text-sm">
                  The course fee includes 18% GST as per institute norms.
                  Single-bedded shared accommodation can be availed upon prior
                  request (at additional cost).
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Participants can pay the registration fees via NEFT/IMPS/UPI
                using the following account details or QR code.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Bank Account Details:
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-2">
                      <span className="font-medium">Account Number:</span>{" "}
                      37030749143
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">IFSC Code:</span>{" "}
                      SBIN0003320
                    </p>
                    <p>
                      <span className="font-medium">Account Name:</span>{" "}
                      Director, SVNIT-CCE
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-xs mb-2">
                      QR Code
                    </div>
                    <p className="text-sm text-gray-600">Scan here to pay</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Register?
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to complete your registration through
                  our Google Form.
                </p>
                <a
                  href="https://forms.gle/rMxZBFtKKkhtywDWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md text-lg transition-colors"
                >
                  Register Now
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  After making the payment, please complete the registration
                  through the Google Form and email the transaction details to{" "}
                  <a
                    href="mailto:asreem2026@ched.svnit.ac.in"
                    className="text-green-600 hover:underline"
                  >
                    asreem2026@ched.svnit.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Important Dates
            </h2>
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
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact for Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                asreem2026@ched.svnit.ac.in
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +91-261-2201642
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
