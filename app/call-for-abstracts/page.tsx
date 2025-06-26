import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call for Abstracts | ASREEM 2026",
  description: "Submit your abstract for ASREEM 2026 International Conference"
};

export default function CallForAbstracts() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Call for Abstracts</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We invite researchers, academicians, and industry professionals to submit their abstracts for ASREEM 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Submission Guidelines */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Submission Guidelines</h2>
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
                <span>Clearly state objectives, methodology, results, and conclusions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Use Times New Roman, 12pt font, single spacing</span>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Important Dates</h2>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-amber-900">Abstract Submission Opens</div>
                <div className="text-gray-700">January 15, 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">Abstract Submission Deadline</div>
                <div className="text-gray-700">August 31, 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">Notification of Acceptance</div>
                <div className="text-gray-700">October 15, 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">Early Bird Registration</div>
                <div className="text-gray-700">November 15, 2025</div>
              </li>
            </ul>
          </div>

          {/* Presentation Formats */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Presentation Formats</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">Oral Presentation</h3>
                <p className="text-sm text-gray-600 mt-1">15 minutes presentation + 5 minutes Q&A</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">Poster Presentation</h3>
                <p className="text-sm text-gray-600 mt-1">Poster size: A0 (841 x 1189 mm), portrait orientation</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">Virtual Presentation</h3>
                <p className="text-sm text-gray-600 mt-1">Pre-recorded video presentation (10-12 minutes)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Topics of Interest */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Topics of Interest</h2>
          <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
            ASREEM will feature a comprehensive technical program covering the latest research and innovation in energy and environmental researches. 
            The conference will bring together leading researchers, engineers, and scientists in the domain of interest from around the world.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Water and Wastewater Treatment
              "Wastewater treatment systems and recycling/reuse",
              "Nutrient recovery from wastewaters",
              "Application of nanotechnology in wastewater treatment",
              "Membrane bioreactor and Wastewater Treatment",
              "Desalination and water purification processes",
              "Industrial wastewater treatment",
              
              // Bioenergy and Bioelectrochemical Systems
              "Bioelectrochemical Systems (MFC, MEC, MDC, OMFC, MSC, etc.)",
              "Biomass: Algae-based treatment, bio-energy production",
              "Conversion of biomass into valuable products",
              "Biogas synthesis",
              "Bio-fuel synthesis",
              "Green energy generation",
              
              // Membrane Technology
              "Proton exchange membranes",
              "Forward Osmosis Process: Sustainable Process for Resource Recovery",
              "Fouling studies",
              "Novel membrane materials",
              "Hollow fibre membranes",
              "Supported liquid membrane",
              "UF/MF/NF/RO/FO/PRO",
              
              // Waste Management and Resource Recovery
              "Solid waste management",
              "Onsite segregation of solid waste and conversion",
              "Recovery of resources from Urine and Excreta",
              "Waste to energy conversion",
              "Onsite waste minimization",
              "Advances in Septic tanks and resource recovery",
              
              // Green Chemistry and Processes
              "Green synthesis using biotechnology and biocatalysts",
              "Sustainability and climate change",
              "Life cycle analysis",
              "Advanced oxidation processes",
              "Sonochemistry",
              "Process intensification",
              
              // Materials and Nanotechnology
              "3D printing",
              "Biopolymers",
              "Nano-fluids and application in wastewater treatment",
              "Hydrogels and applications",
              "New Materials for Energy and Environment",
              "Soft material",
              
              // Energy Systems
              "Power Management systems for energy storage and supply",
              "Electrochemical energy conversion",
              "Batteries and storage devices",
              "Carbon capture and storage",
              "Renewable and alternative fuels/energy",
              "Micro-reactors",
              
              // Engineering and Design
              "Computational fluid dynamics",
              "Modelling and Simulation",
              "Process intensification & Process Design",
              "Scale-Up: Treatment of domestic waste, biofuel and biogas production",
              "Computational tools for enhancing efficiency and forecast",
              "Techno-Economic Feasibility",
              
              // Environmental and Industrial Applications
              "Industrial Safety and Hazards Management",
              "Environmental Policies",
              "Circular economy and its role in sustainable development",
              "Impact assessment of renewable techniques",
              "Sustainable cities",
              "Micro-plastics"
              
            ].map((topic, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8 italic">
            * The above list is not exhaustive. Related topics are also welcome.
          </p>
        </div>

        {/* Submission Buttons */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Submit Your Abstract?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Submit your abstract through our online submission system. For any queries, please contact the conference secretariat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/submit-abstract" 
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors text-center"
            >
              Submit Abstract
            </Link>
            <Link 
              href="/download-template" 
              className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors text-center"
            >
              Download Template
            </Link>
            <Link 
              href="/registration" 
              className="px-8 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
