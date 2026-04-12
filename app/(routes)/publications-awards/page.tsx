"use client";

import React from "react";

export default function PublicationsAwards() {
  const journals = [
    {
      img: "/acs/acs_energy_materials.jpg",
      title: "ACS Applied Energy Materials",
      details: "Open Access • Q1 (Scopus & SCIE) • Impact Factor 6.4"
    },
    {
      img: "/acs/acs_energy_fuels.jpg",
      title: "ACS Energy & Fuels",
      details: "Open Access • Q1 (Scopus & SCIE) • Impact Factor 5.3"
    },
    {
      img: "acs/acs_industrial_engineering.jpg",
      title: "ACS Industrial & Engineering Chemistry Research (I&ECR)",
      details: "Open Access • Q1 (Scopus & SCIE) • Impact Factor 3.9"
    },
    {
      img: "/acs/acs_omega.jpg",
      title: "ACS Omega",
      details: "Open Access • Q2 (Scopus & SCIE) • Impact Factor 4.3"
    },
    {
      img: "acs/acs_applied_materials.jpg",
      title: "ACS Applied Engineering Materials",
      details: "Open Access • Q2 (Scopus & SCIE) • Impact Factor 3.5"
    },
    {
      img: "/acs/acs_sustainable.jpg",
      title: "ACS Sustainable Resource Management",
      details: "New peer-reviewed open-access journal (est. 2024)"
    }
  ]
  return (
    <section className=" mt-14 relative min-h-screen bg-gradient-to-br from-primary-darkGreen via-primary-forestGreen to-primary-sageGreen text-offWhite py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Publications And Awards
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <div className="space-y-10">
          <div className="bg-offWhite/5 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#00c950] ">Publications</h2>
            <ul className="list-decimal list-inside space-y-2 text-lg">
              <li>Registration is mandatory through Google form (see register tab) for taking part in any of the events of the conference.</li>
              <li>All accepted abstracts will be published in Conference Proceedings subject to the quality of presentation, originality check and author’s/authors’ consent.</li>
              <li className="font-bold flex flex-col gap-2">
                <span>Selected full length papers will be published in SCI/Scopus indexed journals</span>
                <div className="flex items-start gap-4 bg-offWhite/10 rounded-lg p-3">
                  <img src="/awards1.jpg" alt="Special Issue" className="w-28 h-28 object-contain rounded-lg bg-offWhite/20" />
                  <div className="text-base font-normal text-gray-800 text-justify">
                    Special Issue on “Applications and Challenges of Nano-Biotechnology” in the journal <strong>Current Pharmaceutical Biotechnology</strong>. This journal is Q2 journal indexed in SCIE and Scopus, with an Impact Factor of 2.6. If published as Open Access, your paper will be made available on ScienceDirect (Elsevier).
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-offWhite/10 rounded-lg p-3">
                  <img src="/wiley-water-publications.jpg" alt="Special Issue" className="w-28 h-28 object-contain rounded-lg bg-offWhite/20" />
                  <div className="text-base font-normal text-gray-800 text-justify">
                    Special Issue on "Frontiers in Energy and Environmental Sustainability towards wastewater" in the journal <strong>Water Environment Research</strong>. This Journal is Q2 Journal indexed in SCIE and Scopus, with an impact Factor of 1.9.
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-offWhite/10 rounded-lg p-3">
                  <img src="/institution_of_engineers.jpeg" alt="Special Issue" className="w-28 h-28 object-contain rounded-lg bg-offWhite/20" />
                  <div className="text-base font-normal text-gray-800 text-justify">
                    Special Issue of selected papers from ASREEM 2026  in the journal: <strong> Journal of Institution of Engineers (India)-Series E</strong>. This Journal is Q3 Journal indexed in Scopus, with an impact Score of 2.06.
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-offWhite/10 rounded-lg p-3">
                  <img src="/AECM-cover.png" alt="Advances in Energy Conversion and Management" className="w-28 h-28 object-contain rounded-lg bg-offWhite/20" />
                  <div className="text-base font-normal text-gray-800 text-justify">
                    <p className="mt-2"><strong>Advances in Energy Conversion and Management</strong> aims to serve as a hub for disseminating original research and critical reviews that advance science, technology, and application of energy conversion, utilization, and management systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-offWhite/10 rounded-lg p-3">
                  <img src="/discover_nano.webp" alt="Discover Nano - Special Issue" className="w-28 h-28 object-contain rounded-lg bg-offWhite/20" />
                  <div className="text-base font-normal text-gray-800 text-justify">
                    <p className="mt-2"><strong>Discover Nano</strong> — Special Issue. Q2 Journal (Scopus & SCIE) • Impact Factor 4.06. Discover Nano is an open access journal publishing research from across all areas of nanoscience and nanotechnology. Indexed in DOAJ, SCIE, PubMedCentral and Scopus with a CiteScore 2024 of 2.9</p>
                  </div>
                </div>
                <span className="text-base text-gray-700 mt-2">More journals will be updated soon.</span>
              </li>
            </ul>

          </div>
          <div className="bg-offWhite/5 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#00c950] mb-4">Awards</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li className="flex items-center gap-4"><img src="/awards4.png" alt="Best Oral Presentation Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Oral Presentation Award</span></li>
              <li className="flex items-center gap-4"><img src="/awards5.png" alt="Best Poster Presentation Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Poster Presentation Award</span></li>
              <li className="flex items-center gap-4"><img src="/awards6.png" alt="Best Research Documentary Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Research Documentary Award</span> <span className="text-sm">(maximum three minutes video)</span></li>
              <li className="flex items-center gap-4"><img src="/awards7.png" alt="Young Achiever Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Young Achiever Award</span> <span className="text-sm">(age ≤ 35 years)</span></li>
            </ul>
            <div className="mt-6 space-y-4">
              <div className="space-y-10">

                {/* ================= ACS Section ================= */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8">

                    <div className="w-28 h-14 sm:w-36 sm:h-16 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 mx-auto sm:mx-0">
                      <img
                        src="/acs/acs_logo.png"
                        alt="ACS Logo"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                        American Chemical Society (ACS)
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Best Paper Awards Sponsored by Leading ACS Journals
                      </p>
                    </div>
                  </div>

                  {/* Journals Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                    {journals.map((journal, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 md:p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
                      >
                        <div className="min-w-[48px] h-12 flex items-center justify-center bg-gray-50 rounded-md border border-gray-200 p-1">
                          <img
                            src={journal.img}
                            alt={journal.title}
                            className="max-h-full object-contain"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                            {journal.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 mt-1 leading-snug">
                            {journal.details}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>

                  {/* Award Benefits */}
                  <div className="mt-8 md:mt-10 pt-6 border-t border-gray-200">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                      Award Benefits
                    </h4>

                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-1"></span>
                        Official Journal Certificate
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-1"></span>
                        One-Year ACS Membership (Fully Sponsored)
                      </li>
                    </ul>
                  </div>
                </div>


                {/* ================= Eco-Needs Section ================= */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                    Eco-Needs Foundation
                  </h3>

                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-1"></span>
                      Ten Best Oral Presentation Awards
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-1"></span>
                      Ten Best Poster Presentation Awards
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}