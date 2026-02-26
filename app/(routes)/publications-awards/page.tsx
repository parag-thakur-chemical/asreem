"use client";

import React from "react";

export default function PublicationsAwards() {
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
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-1">American Chemical Society (ACS)</h3>
                <ul className="list-disc list-inside ml-5 text-base space-y-1">
                  <li>Ten Presentation Awards (5 Oral & 5 Poster).</li>
                  <li>The winners will get an ACS journal certificate and a one-year complimentary ACS Membership.</li>
                  <li>All attendees of the conference will get a <span className="font-semibold text-accent-earthYellow">50% discount</span> on ACS Membership.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-1">Eco-Needs Foundation</h3>
                <ul className="list-disc list-inside ml-5 text-base space-y-1">
                  <li>Ten Best Oral Presentation Awards</li>
                  <li>Ten Best Poster Presentation Awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}