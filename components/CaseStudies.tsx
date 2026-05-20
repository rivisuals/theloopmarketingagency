const caseStudies = [
  {
    brand: "TheorieMaatjes",
    platform: "TikTok",
    platformColor: "bg-black text-white",
    headline: "Van 0 naar 32K volgers vanaf nul opgebouwd",
    result: "+32.000 volgers organisch",
    description:
      "TheorieMaatjes startte zonder enige social media aanwezigheid. Wij bouwden hun TikTok-account van de grond af op — met een herkenbaar format, consistente contentstrategie en video's die precies aansloten op hun doelgroep van studenten.",
    accent: "#FF2D55",
    tag: "Organische Groei",
  },
  {
    brand: "Jumbo Laakweg",
    platform: "Instagram",
    platformColor: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black",
    headline: "Lokale supermarkt zet social in voor omzetgroei",
    result: "Aantoonbare groei in winkelomzet",
    description:
      "Via gerichte short-form content en lokale community-opbouw op Instagram en TikTok zorgden wij voor meer merkbekendheid in de buurt en een directe stijging van het winkelbezoek en de omzet van Jumbo Laakweg.",
    accent: "#F5A623",
    tag: "Lokale Groei",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-28 px-6 bg-gray-50" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase">
            Case Studies
          </span>
          <h2
            className="font-syne text-4xl md:text-5xl text-[#0A0F2C] mt-3 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Het werk. <br className="hidden md:block" />
            De resultaten.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.brand}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <p
                  className="font-syne text-xl text-[#0A0F2C]"
                  style={{ fontWeight: 700 }}
                >
                  {cs.brand}
                </p>
                <div className="flex gap-2 flex-wrap justify-end">
                  <span
                    className={`text-xs font-dm font-semibold px-3 py-1 rounded-full ${cs.platformColor}`}
                  >
                    {cs.platform}
                  </span>
                  <span className="text-xs font-dm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {cs.tag}
                  </span>
                </div>
              </div>

              <h3
                className="font-syne text-2xl text-[#0A0F2C] mb-2 leading-tight"
                style={{ fontWeight: 700 }}
              >
                {cs.headline}
              </h3>
              <p
                className="font-dm font-semibold text-base mb-4"
                style={{ color: cs.accent }}
              >
                {cs.result}
              </p>
              <p className="font-dm text-gray-500 text-sm leading-relaxed">
                {cs.description}
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <a
                  href="#contact"
                  className="font-dm text-sm font-semibold text-[#0057FF] hover:underline underline-offset-4"
                >
                  Zulke resultaten voor jouw merk? →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
