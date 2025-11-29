// components/ConferenceMarquee.js
"use client";

export default function ConferenceMarquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-text text-red-600 ">
        The dates of the conference have been updated
      </div>

      <style jsx>{`
        .marquee-container {
        width: 30%;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        }

        /* Tablets */
        @media (max-width: 1024px) {
        .marquee-container {
            width: 50%;
        }
        }

        /* Large phones */
        @media (max-width: 768px) {
        .marquee-container {
            width: 80%;
        }
        }

        /* Small phones */
        @media (max-width: 480px) {
        .marquee-container {
            width: 80%;
        }
        }


        .marquee-text {
          display: inline-block;
          padding: 0.5rem 0;
          font-size: 1rem;
          font-weight: 600;
          animation: slide-left 7s linear infinite;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

