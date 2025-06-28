"use client";

import React from "react";

export default function PublicationsAwards() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-darkGreen via-primary-forestGreen to-primary-sageGreen text-offWhite py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent-earthYellow drop-shadow-lg">
          Publications & Awards
        </h1>
        <div className="space-y-10">
          <div className="bg-offWhite/5 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#00c950] mb-4">Publications</h2>
            <ul className="list-decimal list-inside space-y-2 text-lg">
              <li>Registration is mandatory through Google form (see register tab) for taking part in any of the events of the conference.</li>
              <li>All accepted abstracts will be published in Conference Proceedings subject to the quality of presentation, originality check and author’s/authors’ consent.</li>
              <li>Selected full-length papers will be considered for publication in reputed journals (SCI/Scopus indexed) as below details and will follow regular peer review process as per the norms of a particular journal. It will be the responsibility of the authors to ensure originality of their contributions.</li>
            </ul>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <img src="/awards1.jpg" alt="Energy Nexus" className="w-32 h-32 object-contain rounded-lg bg-offWhite/20" />
                <div>
                  <h3 className="text-xl font-bold text-accent-earthYellow mb-1">1. Energy Nexus (Elsevier Journal)</h3>
                  <p className="mb-1">The organizing committee of ASREEM 2021 would like to invite high-quality papers for submission at the Energy Nexus journal (ELSEVIER). <span className="font-semibold text-green-400">No article processing charges.</span></p>
                  <p className="mb-1">Special Issue for the Conference on <span className="italic">“Circular Economy for the Sustainable Development.”</span></p>
                  <p>This Special Issue (SI) aims to publish the original, critical review and high-quality scientific articles containing significant results in the area of new technologies across all fields of “Circular Economy for the Sustainable Development”.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/awards2.jpg" alt="Environmental Science and Pollution Research" className="w-32 h-32 object-contain rounded-lg bg-offWhite/20" />
                <div>
                  <h3 className="text-xl font-bold text-accent-earthYellow mb-1">2. Environmental Science and Pollution Research</h3>
                  <p>As a special issue for the conference ASREEM-2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/awards3.jpg" alt="Bioresource Technology Reports" className="w-32 h-32 object-contain rounded-lg bg-offWhite/20" />
                <div>
                  <h3 className="text-xl font-bold text-accent-earthYellow mb-1">3. Bioresource Technology Reports (Elsevier)</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-offWhite/5 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#00c950] mb-4">Awards</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li className="flex items-center gap-4"><img src="/awards4.png" alt="Best Oral Presentation Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Oral Presentation Award</span></li>
              <li className="flex items-center gap-4"><img src="/awards5.png" alt="Best Poster Presentation Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Poster Presentation Award</span></li>
              <li className="flex items-center gap-4"><img src="/awards6.png" alt="Best Research Documentary Award" className="w-14 h-14 object-contain rounded-lg bg-offWhite/20" /><span className="font-bold text-accent-earthYellow">Best Research Documentary Award</span> <span className="text-sm">(maximum two minutes video)</span></li>
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