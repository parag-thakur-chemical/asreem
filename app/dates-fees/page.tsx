import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Important Dates & Fees | ASREEM 2026",
  description: "Important dates and registration fees for ASREEM 2026 International Conference"
};

export default function DatesAndFees() {
  const importantDates = [
    { 
      title: "Abstract Submission Deadline",
      date: "30 September 2025"
    },
    { 
      title: "Last Date of Registration",
      date: "15 December 2025"
    }
  ];

  const registrationFees = [
    {
      category: "Practicing Engineers/Professionals",
      fee: "₹7,080"
    },
    {
      category: "Faculty/Researchers",
      fee: "₹5,900"
    },
    {
      category: "PhD Student/JRF/SRF",
      fee: "₹3,540"
    },
    {
      category: "Students (UG/PG)",
      fee: "₹2,360"
    }
  ];

  const additionalInfo = [
    "All fees are inclusive of 18% GST as per institute norms.",
    "Single-bedded shared accommodation can be availed upon prior request (at additional cost).",
    "Payment can be made via NEFT/IMPS/UPI using the provided bank details.",
    "After payment, please complete the registration through the Google Form and email the transaction details to asreem2026@ched.svnit.ac.in"
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
            <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 text-sm">
                All fees are inclusive of 18% GST as per institute norms.
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
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {fee.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                        {fee.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-amber-800 font-medium mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
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
                <p className="text-gray-700"><span className="font-medium">Account Number:</span> 37030749143</p>
                <p className="text-gray-700"><span className="font-medium">IFSC Code:</span> SBIN0003320</p>
                <p className="text-gray-700"><span className="font-medium">Account Name:</span> Director, SVNIT-CCE</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Details for International Participants (USD):</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><span className="font-medium">Account Number:</span> 37030749143</p>
                <p className="text-gray-700"><span className="font-medium">IFSC Code:</span> SBIN0003320</p>
                <p className="text-gray-700"><span className="font-medium">Account Name:</span> Director, SVNIT-CCE</p>
                <p className="text-gray-700"><span className="font-medium">Bank Name:</span> State Bank of India</p>
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
            Secure your spot at ASREEM 2026 by registering today. Complete the registration through our Google Form.
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
