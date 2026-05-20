const testimonials = [
  {
    initials: "AL",
    color: "#0057FF",
    quote:
      "Wij hadden geen idee wat social media voor een supermarkt als de onze kon betekenen. TheLoop heeft ons laten zien hoe je lokale klanten bereikt via TikTok en Instagram — en we merken het gewoon in de winkel. Meer jonge mensen, meer drukte, meer omzet. Dat zegt genoeg.",
    name: "Aart Ligthart",
    role: "Filiaal Manager, Jumbo Laakweg",
  },
  {
    initials: "MS",
    color: "#FF6B6B",
    quote:
      "De content die TheLoop voor ons maakt voelt écht herkenbaar voor onze buurt. Klanten zien ons online en komen speciaal langs. Het heeft onze band met de Laakweg-community echt versterkt — iets waar ik trots op ben.",
    name: "Mohammed Sidi",
    role: "Assistent Filiaal Manager, Jumbo Laakweg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-white" id="over-ons">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase">
            Klanten Aan Het Woord
          </span>
          <h2
            className="font-syne text-4xl md:text-5xl text-[#0A0F2C] mt-3 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Geloof ons niet. <br className="hidden md:block" />
            Geloof hen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map(({ initials, color, quote, name, role }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span
                className="font-syne text-5xl leading-none block mb-4"
                style={{ color: "#0057FF", fontWeight: 800 }}
              >
                &ldquo;
              </span>
              <p className="font-dm text-gray-600 text-base leading-relaxed mb-8">
                {quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div>
                  <p
                    className="font-syne text-sm text-[#0A0F2C]"
                    style={{ fontWeight: 700 }}
                  >
                    {name}
                  </p>
                  <p className="font-dm text-xs text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
