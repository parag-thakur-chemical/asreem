import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call for Abstracts | ASREEM 2026",
  description: "Submit your abstract for ASREEM 2026 International Conference",
};

export default function CallForAbstracts() {

  return (
    <div className="py-12 bg-white">
      <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Call for Abstracts
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We invite researchers, academicians, and industry professionals to
            submit their abstracts for ASREEM 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Submission Guidelines */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Submission Guidelines
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Abstracts should be 250-300 words</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Include title, authors, affiliations, and keywords</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  Clearly state objectives, methodology, results, and
                  conclusions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Format of Abstract and Camera Ready Paper is given below in the template</span>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Important Dates
            </h2>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-amber-900">
                  Last Date of Abstract Submission:
                </div>
                <div className="text-gray-700">1 Nov. 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  Last Date of Abstract Acceptance:
                </div>
                <div className="text-gray-700">15 Nov. 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  Last Date of Fees Payment:
                </div>
                <div className="text-gray-700">30 Nov. 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  Conference Dates:
                </div>
                <div className="text-gray-700">6-8 Feb. 2026</div>
              </li>
            </ul>
          </div>

          {/* Presentation Formats */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Presentation Formats
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Oral Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  10 minutes presentation + 3 minutes Q&A
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Poster Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Poster size: A0 (841 x 1189 mm), portrait orientation
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Virtual Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pre-recorded video presentation (10-12 minutes)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Buttons */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Submit Your Abstract?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Submit your abstract through our online submission system. For any
            queries, please contact the conference secretariat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://forms.gle/B8QHHTja4SRSoTw38"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors text-center"
            >
              Submit Abstract
            </a>
            <a
              href="/abstract-template.doc"
              download
              className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors text-center"
            >
              Download Template
            </a>
            <Link
              href="/register"
              className="px-8 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
        {/* Conference Tracks and Topics */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Conference Tracks & Topics
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
            Research papers, review papers, case studies, etc. are welcome on the below topics. The following list is not inclusive; nearby topics based on the theme are welcome.
          </p>
          <div className="space-y-8">
            {/* Track 1 */}
            <div className="bg-green-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Track 1: Sustainable Water Governance, Policy, and Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Water governance and regulatory frameworks at local, regional, and national levels</li>
                    <li>Integrated Water Resources Management (IWRM) and challenges for efficient urban water management</li>
                    <li>Water security and access for all (SDG 6)</li>
                    <li>Water economics, pricing, and financing mechanisms</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Role of stakeholders and participatory decision-making</li>
                    <li>Policy implementation for sustainable water and sanitation systems</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 2 */}
            <div className="bg-amber-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Track 2: Water Conservation, Treatment, and Resource Recovery</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Sustainable water use and conservation practices</li>
                    <li>Wastewater treatment technologies and recycling/reuse</li>
                    <li>Zero Liquid Discharge (ZLD) and reject management</li>
                    <li>Industrial wastewater regulation and sustainable practices</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Membrane technology advancements for purification and desalination</li>
                    <li>Circular economy in the water sector</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 3 */}
            <div className="bg-blue-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Track 3: Climate Change, Ecosystems, and the Water–Energy Nexus</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Impacts of climate change and extreme weather events on water systems</li>
                    <li>Watershed and wetland management, aquatic habitat protection</li>
                    <li>Water–Energy Nexus: water use in energy production and renewable energy for water management</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Energy efficiency in water distribution and treatment</li>
                    <li>Hydropower generation and sustainable management</li>
                    <li>Ecosystem services and biodiversity conservation</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 4 */}
            <div className="bg-purple-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Track 4: Emerging Materials, Nanotechnology, and Advanced Treatment Technologies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Nanotechnology for energy conservation and water treatment</li>
                    <li>Advanced oxidation processes and sonochemistry for emerging contaminants</li>
                    <li>Advanced materials and 3D printing for environmental applications</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Biosensors and green synthesis using biocatalysts and biotechnology</li>
                    <li>Smart materials for separation, purification, and catalysis</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 5 */}
            <div className="bg-yellow-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Track 5: Waste Management and Circular Economy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Solid waste, e-waste, and hazardous waste management</li>
                    <li>Waste-to-energy concepts and sustainable practices</li>
                    <li>Plastics and biodegradable polymers: challenges and innovations</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Digitalization and traceability using Blockchain, IoT, and AI</li>
                    <li>Industrial symbiosis and resource recovery</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 6 */}
            <div className="bg-pink-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Track 6: Sustainable and Green Process Technologies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Sustainable and green chemistry for environmental remediation</li>
                    <li>Catalysis and reaction engineering for clean product formation</li>
                    <li>Refining and petrochemical sustainability</li>
                    <li>Fuel cells, bioenergy, and renewable fuels</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Process intensification, modelling, and simulation (CFD)</li>
                    <li>Artificial intelligence and machine learning for sustainable process design</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 7 */}
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Track 7: Sustainable Development Goals, Policy, and Entrepreneurship</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Sustainable Development Goals (SDGs) and climate-smart cities</li>
                    <li>Water quality and public health assessment</li>
                    <li>Entrepreneurship and innovation in environmental management</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Environmental policy, regulation, and implementation strategies</li>
                    <li>Economic valuation and financing of sustainable infrastructure</li>
                    <li>Education, awareness, and community engagement for sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 8 */}
            <div className="bg-indigo-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Track 8: Innovative Technologies and Digital Solutions for Water and Environment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Smart water systems and Digital Twin technology</li>
                    <li>Remote sensing and data analytics for monitoring</li>
                    <li>Decentralized and modular water treatment systems</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>AI-driven predictive tools for environmental management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}