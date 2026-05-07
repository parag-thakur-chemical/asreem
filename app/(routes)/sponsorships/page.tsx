export default function Sponsorships() {
  const tiers = [
    {
      icon: "fas fa-crown",
      tier: "Title",
      price: "₹10,00,000",
      benefits: [
        "5 conference delegates",
        "20 minutes corporate presentation",
        "Continous publicity",
        "Logo on all conference banners",
        "Key Position on the homepage of conference website",
        "A3 size ad on conference souvenir back cover",
        "Industrial session",
        "2 Market stalls",
      ],
      gradient: "from-blue-500 to-blue-400",
      bodyGradient: "from-blue-100 to-blue-200",
      svgIcon: "/icons/title-icon.svg",
    },
    {
      icon: "fas fa-gem",
      tier: "Diamond",
      price: "₹5,00,000",
      benefits: [
        "3 conference delegates",
        "15 minutes corporate presentation",
        "Logo on all conference banners",
        "Position on conference website",
        "A4 size ad on conference souvenir front cover",
        "Industrial session",
        "Market stall",
      ],
      gradient: "from-purple-500 to-purple-400",
      bodyGradient: "from-purple-100 to-purple-200",
      svgIcon: "/icons/diamond-icon.svg",
    },
    {
      icon: "fas fa-medal",
      tier: "Gold",
      price: "₹3,00,000",
      benefits: [
        "2 conference delegates",
        "10 minutes corporate presentation",
        "Logo on all conference banners",
        "Position on conference website",
        "Ad inside conference souvenir",
        "Industrial session",
        "Market stall",
      ],
      gradient: "from-yellow-500 to-yellow-400",
      bodyGradient: "from-yellow-100 to-yellow-200",
      svgIcon: "/icons/gold-icon.svg",
    },
    {
      icon: "fas fa-star",
      tier: "Silver",
      price: "₹1,00,000",
      benefits: [
        "1 conference delegate",
        "Logo on all conference banners",
        "Position on conference website",
        "Ad inside conference souvenir",
        "Market stall",
      ],
      gradient: "from-gray-400 to-gray-400",
      bodyGradient: "from-gray-100 to-gray-200",
      svgIcon: "/icons/silver-icon.svg",
    },
  ];

  return (
    <div className="mt-14 py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Sponsorships
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
{/* Proud Sponsors Section */}
<div className="flex flex-col items-center justify-center mb-10">
  <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 tracking-wide">
    Our Proud Sponsors
  </p>

  {/* Single sponsors container — highlight diamond inline */}
  {(() => {
    const sponsors = [
      { src: '/sponsors/luthra.jpg', alt: 'Luthra', name: '' },
      { src: '/sponsors/gcst.jpeg', alt: 'GUJCOST', name: 'GUJCOST' },
      { src: '/sponsors/anrf.jpeg', alt: 'ANRF', name: '' },
      { src: '/sponsors/csir.jpeg', alt: 'CSIR', name: 'CSIR' },
    ];

    const isDiamondFn = (s: { src: string; alt: string; name: string }) => s.alt === 'Luthra' || s.name === 'Luthra';
    const diamond = sponsors.find(isDiamondFn);
    const others = sponsors.filter((s) => !isDiamondFn(s));

    return (
      <div className="w-full bg-white border-2 border-green-200 rounded-xl px-6 py-6 shadow-md transition-transform duration-200">
        {/* Diamond sponsor in its own first row */}
        {diamond && (
          <div className="w-full flex items-center justify-center mb-6">
            <div className="relative w-full max-w-3xl flex items-center justify-center bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border-2 border-purple-200 shadow-xl">
              <div className="absolute -top-3 left-3 bg-gradient-to-r from-purple-500 to-purple-400 text-white text-xs font-bold px-2 py-0.5 rounded-md shadow-md">
                Diamond Sponsor
              </div>
              <img
                src={diamond.src}
                alt={diamond.alt}
                className="object-contain max-h-36 sm:max-h-44 w-auto"
              />
            </div>
          </div>
        )}

        {/* Other sponsors below */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {others.map((sponsor) => (
            <div key={sponsor.alt} className="flex items-center gap-4 bg-white p-3 rounded-md">
              <img src={sponsor.src} alt={sponsor.alt} className="object-contain max-h-20 sm:max-h-28" />
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900">{sponsor.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })()}
</div>

          {/* Description */}
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-lg border-2 border-green-200 p-8 mb-8 hover:scale-105 transition-transform duration-200">
            <p className="text-lg text-gray-700 text-justify mb-6">
              If you are selling Industrial Products, Instruments, Processors, or Simulation Softwares related to Chemical Engineering, Environmental engineering or Mechanical Engineering then, Advertise your product, process or services through the International Conference on ‘Advances in sustainable research for energy and environmental Management (ASREEM 2.0)’ to reach the right people.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Nearby Hotels and Travel Agencies can also become our official accommodation and Travel partners.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md flex flex-col h-full hover:scale-105 transition-transform duration-200"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-b ${tier.gradient} text-white text-center p-4 flex flex-col items-center`}
                >
                  <img
                    src={tier.svgIcon}
                    alt={`${tier.tier} icon`}
                    className="w-10 h-10 mb-2"
                    style={{ backgroundColor: "transparent" }}
                  />
                  <h2 className="font-semibold text-lg">{tier.tier}</h2>
                </div>

                {/* Body */}
                <div
                  className={`bg-gradient-to-b ${tier.bodyGradient} text-center p-6 flex-grow`}
                >
                  <div className="text-1xl sm:text-3xl font-bold text-blue-900 mb-4">
                    {tier.price}
                  </div>

                  <ul className="text-left text-blue-900 space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 ${i < tier.benefits.length - 1
                            ? "border-b border-blue-300 pb-2"
                            : ""
                          }`}
                      >
                        <img
                          src="/tick.webp"
                          alt="tick"
                          className="w-5 h-5 mt-1 bg-transparent"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Stall Only Note */}
          <p className="mt-4 text-center text-gray-800 bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-lg mx-auto">
            <strong>Stall Only :</strong> If you wish to only put up a stall of dimensions 8×16 ft , you can do so for <strong>₹30,000</strong>.
            you can get additional space at ₹10,000 per 3×3 ft
          </p>

          {/* Disclaimer */}
          <p className="mt-2 text-sm text-gray-600 text-center italic">
            * All above mentioned prices for sponsorships are exclusive of 18% GST.
          </p>


        </div>
      </div>
      );
}
