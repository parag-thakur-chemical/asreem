import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Important Dates & Fees | ASREEM 2026",
  description:
    "Important dates and registration fees for ASREEM 2026 International Conference",
};

export default function DatesAndFees() {
  const importantDates = [
    { title: "Last Date of Abstract Submission", date: "15th Feb. 2026" },
    { title: "Last Date of Abstract Acceptance", date: "20th Feb. 2026" },
    { title: "Last Date of Registration", date: "28th Feb. 2026" },
    { title: "Last Date of Fees Payment", date: "28th Feb. 2026" },
    { title: "Conference Dates", date: "15-17 May. 2026" },
  ];

  const registrationFeesOffline = [
    { category: "Practicing Engineers/Professionals", fee: "₹7,080" },
    { category: "Academicians/Scientists/Researchers", fee: "₹5,900" },
    { category: "PhD Students/Research Fellows", fee: "₹3,540" },
    { category: "Under/Post-Graduate Students", fee: "₹2,360" },
    { category: "Attendees", fee: "₹1,770" },
    { category: "Foreign Students (PhD/PG/UG)", fee: "₹8,565 (USD 100)" },
    { category: "Foreign Faculty/Scientist", fee: "₹12,850 (USD 150)" },
  ];

  const registrationFeesOnline = [
    { category: "Practicing Engineers/Professionals", fee: "₹5,900" },
    { category: "Academicians/Scientists/Researchers", fee: "₹3,540" },
    { category: "PhD Students/Research Fellows", fee: "₹2,360" },
    { category: "Under/Post-Graduate Students", fee: "₹1,770" },
    { category: "Attendees", fee: "₹1,180" },
    { category: "Foreign Students (PhD/PG/UG)", fee: "₹6,423 (USD 75)" },
    { category: "Foreign Faculty/Scientist", fee: "₹8,565 (USD 100)" },
  ];

  const additionalInfo = [
    "All fees are inclusive of 18% GST as per institute norms.",
    "Payment can be made via NEFT / RTGS / IMPS / UPI using the provided bank details",
    "After payment, please complete the registration through the Google Form to confirm your participation"
  ];

  return (
    <div className="mt-14 py-12 bg-gray-50">
      {/* Outer container restricts width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Important Dates & Fees</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mark your calendars and plan your participation in ASREEM 2026. Early registration ensures you secure your spot as early as possible.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">

          {/* Important Dates Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-full overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Dates</h2>
            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">{index + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 break-words">{item.title}</h3>
                    <p className="text-green-600 font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Fees Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-full overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Fees</h2>

            {/* Offline Fees */}
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Offline Participation</h3>
            <div className="w-full overflow-hidden">
              <table className="w-full table-fixed">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-2/3">Category</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider w-1/3">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFeesOffline.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 break-words">{fee.category}</td>
                      <td className="px-4 py-4 text-sm text-right font-medium text-gray-900 whitespace-nowrap">{fee.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Online Fees */}
            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">Online Participation</h3>
            <div className="w-full overflow-hidden">
              <table className="w-full table-fixed">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-2/3">Category</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider w-1/3">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFeesOnline.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 break-words">{fee.category}</td>
                      <td className="px-4 py-4 text-sm text-right font-medium text-gray-900 whitespace-nowrap">{fee.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-amber-800 font-medium mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
                {additionalInfo.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>

        </div>

        {/* Payment Information */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-full overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Information</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Details</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 break-words"><span className="font-medium">Account Number:</span> 37030749143</p>
                    <p className="text-gray-700 break-words"><span className="font-medium">IFSC Code:</span> SBIN0003320</p>
                    <p className="text-gray-700 break-words"><span className="font-medium">SWIFT Code:</span> SBININBB260</p>
                    <p className="text-gray-700 break-words"><span className="font-medium">Account Name:</span> Director, SVNIT</p>
                    <p className="text-gray-700 break-words"><span className="font-medium">Bank Name:</span> State Bank of India</p>
                    <p className="text-gray-700 break-words"><span className="font-medium">Branch:</span> SVNIT Campus, Surat</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <img src="/qr-code.png" alt="UPI QR Code" className="w-48 h-48 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Register?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Secure your spot at ASREEM 2026 by registering today. Complete the registration through our Google Form.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors text-center">
              Register Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}