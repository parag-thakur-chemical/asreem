'use client';

import { useState } from 'react';

export function AboutConference() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="py-12 md:py-16 bg-gray-100 text-gray-800 md:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About the Conference
        </h2>
        
        <div className="md:hidden space-y-6 px-2">
          <h3 className="text-2xl font-semibold text-primary-forestGreen">
            Welcome to ASREEM-2025!
          </h3>
          
          <p className="text-justify">
            The fast depleting natural resources intensify the need for new sustainable energy resources. 
            If you are actively taking part in building new opportunities in the field of Energy and 
            Environment then please consider joining the platform of ASREEM-2025!
          </p>
          
          <p className="text-justify">
            This conference invites people from different walks of life, who share a common vision towards 
            the implementation of sustainable processes for the management of environmental hazards. It will 
            provide a platform for discussion on issues that are prevalent in the field of applied energy 
            and environmental research.
          </p>

          {!isExpanded && (
            <button 
              onClick={toggleExpand}
              className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Read More
            </button>
          )}

          {isExpanded && (
            <div className="space-y-6">
              <p className="text-justify">
                The focus will be on the research studies and findings that can have 
                a 'Lab to Field' approach. We believe that the findings of research studies should be motivated 
                to go for a market application. This can solve the day-to-day problems that are faced by people 
                of industrial background, wastewater treatment managers, energy suppliers, environmental 
                activists etc.
              </p>
              
              <p className="text-justify">
                This will be an on-ground conference held at the Chemical Engineering Department, SVNIT, Surat, 
                Gujarat. The organisers are working in the field of the 'Energy and Environmental Management' 
                sector for the past decade. They share a common thought process for the development of 
                'solution-oriented research'.
              </p>
              
              <p className="text-justify">
                The conference is organised to gather like-minded people of 
                academic and industrial origin who can share their views regarding advances in sustainable 
                research for energy and environmental management.
              </p>

              <button 
                onClick={toggleExpand}
                className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
        
        <div className="hidden md:flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary-forestGreen">
              Welcome to ASREEM-2025!
            </h3>
            
            <p className="text-justify">
              The fast depleting natural resources intensify the need for new sustainable energy resources. 
              If you are actively taking part in building new opportunities in the field of Energy and 
              Environment then please consider joining the platform of ASREEM-2025!
            </p>
            
            <p className="text-justify">
              This conference invites people from different walks of life, who share a common vision towards 
              the implementation of sustainable processes for the management of environmental hazards. It will 
              provide a platform for discussion on issues that are prevalent in the field of applied energy 
              and environmental research.
            </p>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <p className="text-justify">
              The focus will be on the research studies and findings that can have 
              a 'Lab to Field' approach. We believe that the findings of research studies should be motivated 
              to go for a market application. This can solve the day-to-day problems that are faced by people 
              of industrial background, wastewater treatment managers, energy suppliers, environmental 
              activists etc.
            </p>
            
            <p className="text-justify">
              This will be an on-ground conference held at the Chemical Engineering Department, SVNIT, Surat, 
              Gujarat. The organisers are working in the field of the 'Energy and Environmental Management' 
              sector for the past decade. They share a common thought process for the development of 
              'solution-oriented research'.
            </p>
            
            <p className="text-justify">
              The conference is organised to gather like-minded people of 
              academic and industrial origin who can share their views regarding advances in sustainable 
              research for energy and environmental management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
