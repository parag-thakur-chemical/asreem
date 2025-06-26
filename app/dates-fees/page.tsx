import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Important Dates & Fees | ASREEM 2026",
  description: "Important dates and registration fees for ASREEM 2026 International Conference"
};

export default function DatesAndFees() {
  const importantDates = [
    { 
      title: "Abstract Submission Opens",
      date: "January 15, 2025"
    },
    { 
      title: "Abstract Submission Deadline",
      date: "August 31, 2025"
    },
    { 
      title: "Notification of Acceptance",
      date: "October 15, 2025"
    },
    { 
      title: "Early Bird Registration Deadline",
      date: "November 15, 2025"
    },
    { 
      title: "Full Paper Submission Deadline",
      date: "December 15, 2025"
    },
    { 
      title: "Conference Dates",
      date: "January 27-29, 2026"
    }
  ];

  const registrationFees = [
    {
      category: "Indian Delegates (INR)",
      earlyBird: "15,000",
      regular: "18,000",
      onsite: "20,000"
    },
    {
      category: "International Delegates (USD)",
      earlyBird: "500",
      regular: "600",
      onsite: "700"
    },
    {
      category: "Research Scholars/Students (INR)",
      earlyBird: "10,000",
      regular: "12,000",
      onsite: "15,000"
    },
    {
      category: "Industry Participants (INR)",
      earlyBird: "20,000",
      regular: "25,000",
      onsite: "30,000"
    },
    {
      category: "Accompanying Person (INR)",
      earlyBird: "5,000",
      regular: "6,000",
      onsite: "7,000"
    }
  ];

  const additionalInfo = [
    "Registration fee includes conference kit, lunch, and tea/coffee during the conference days.",
    "Accommodation charges are not included in the registration fee.",
    "Early bird registration must be completed by November 15, 2025.",
    "For international participants, payment must be made in USD through bank transfer.",
    "A 10% discount is available for group registrations (5 or more participants from the same organization)."
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Important Dates & Fees</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mark your calendars and plan your participation in ASREEM 2026. 
            Early registration ensures you secure your spot at the best rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Important Dates */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Dates</h2>
            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="text-green-600 font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 text-sm">
                Please note that all deadlines are 11:59 PM Indian Standard Time (IST).
              </p>
            </div>
          </div>

          {/* Registration Fees */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Fees</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Early Bird</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Regular</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Onsite</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {fee.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {fee.earlyBird}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {fee.regular}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {fee.onsite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="text-amber-800 font-medium mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-amber-700">
                {additionalInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Details for Indian Participants (INR):</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><span className="font-medium">Account Name:</span> ASREEM 2026</p>
                <p className="text-gray-700"><span className="font-medium">Bank Name:</span> State Bank of India</p>
                <p className="text-gray-700"><span className="font-medium">Account Number:</span> XXXX XXXX XXXX</p>
                <p className="text-gray-700"><span className="font-medium">IFSC Code:</span> SBINXXXXXXX</p>
                <p className="text-gray-700"><span className="font-medium">Branch:</span> SVNIT Campus, Surat</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Details for International Participants (USD):</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><span className="font-medium">Account Name:</span> ASREEM 2026</p>
                <p className="text-gray-700"><span className="font-medium">Bank Name:</span> State Bank of India</p>
                <p className="text-gray-700"><span className="font-medium">SWIFT Code:</span> SBININBBXXX</p>
                <p className="text-gray-700"><span className="font-medium">Account Number:</span> XXXX XXXX XXXX</p>
                <p className="text-gray-700"><span className="font-medium">Branch:</span> SVNIT Campus, Surat</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              After making the payment, please email the transaction details to <a href="mailto:asreem2026@ched.svnit.ac.in" className="text-green-600 hover:underline">asreem2026@ched.svnit.ac.in</a>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Register?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Secure your spot at ASREEM 2026 by registering today. Early bird registration offers significant savings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors text-center"
            >
              Register Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
