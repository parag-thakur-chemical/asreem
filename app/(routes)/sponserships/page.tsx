export default function Sponsorships() {
    return (
      <div className="py-12 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Sponsorships
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-lg border-2 border-green-200 p-8 mb-8 hover:scale-105 transition-transform duration-200">
            <p className="text-lg text-gray-700 text-center mb-6">
              If you are selling Industrial Products, Instruments, Processors, or Simulation Softwares related to Chemical Engineering, Environmental Engineering, or Mechanical Engineering –
            </p>
            <ul className="list-disc text-gray-700 mb-8 max-w-2xl mx-auto pl-6">
              <li className="mb-2">Advertise your product, process and services through the Organizing Team to reach the right people.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">We organize 3 Flagship Events:</h2>
            <ol className="list-decimal text-gray-700 mb-8 max-w-2xl mx-auto pl-6">
              <li className="mb-2">5 days Short-Term Training Program on ‘Instrumentation Techniques for Environmental Remediation’ (ITER) <span className="italic">(Every year 3rd Week of May)</span></li>
              <li className="mb-2">5 days Short-Term Training Program on ‘Simulation tools for Engineering Problem’ (STEP) <span className="italic">(Every year 2nd Week of January)</span></li>
              <li className="mb-2">International Conference on ‘Advances in sustainable research for energy and environmental Management (ASREEM)’ <span className="italic">(Biennial Event, Occurs after every two years)</span></li>
            </ol>
            <p className="text-lg text-gray-700 text-center">
              Nearby Hotels and Travel Agencies can also become our official accommodation and travel partners for all three flagship events.
            </p>
          </div>
        </div>
      </div>
    );
  }