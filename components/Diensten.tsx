import {
  Video,
  BarChart2,
  Users,
  Megaphone,
  Layers,
  Zap,
} from "lucide-react";

const diensten = [
  {
    pillar: "Organische Short-Form Content",
    pillarColor: "text-[#0057FF]",
    icon: Video,
    title: "Content Strategie & Planning",
    description:
      "Elke post heeft een doel. Wij bouwen content-kalenders die aansluiten op jouw doelgroep, jouw platform en jouw groeistrategie — geen giswerk, wel resultaat.",
  },
  {
    pillar: "Organische Short-Form Content",
    pillarColor: "text-[#0057FF]",
    icon: Zap,
    title: "Video-editing & Productie",
    description:
      "Van ruwe footage naar scroll-stoppende video's. Wij editen voor TikTok, Reels en Shorts — met de juiste hook in de eerste seconde, scherpe captions en trending audio.",
  },
  {
    pillar: "Organische Short-Form Content",
    pillarColor: "text-[#0057FF]",
    icon: Users,
    title: "Community & Groei",
    description:
      "Reageren, engagen, laten groeien. Wij zorgen dat jouw volgers actief blijven en dat nieuwe ogen jouw account vinden — organisch, consistent en menselijk.",
  },
  {
    pillar: "Creatives voor Paid Ads",
    pillarColor: "text-purple-600",
    icon: Megaphone,
    title: "Ad Creative Strategie",
    description:
      "De beste advertentie begint bij de juiste boodschap. Wij duiken in jouw doelgroep, analyseren concurrenten en bouwen creatives die converteren — vóórdat we ook maar één pixel plaatsen.",
  },
  {
    pillar: "Creatives voor Paid Ads",
    pillarColor: "text-purple-600",
    icon: Layers,
    title: "Video & Static Ad Productie",
    description:
      "Van UGC-style video's tot strakke statics — wij produceren ad creatives die performen op Meta, TikTok en LinkedIn. Hooks getest, formaten geoptimaliseerd.",
  },
  {
    pillar: "Creatives voor Paid Ads",
    pillarColor: "text-purple-600",
    icon: BarChart2,
    title: "A/B Testing & Optimalisatie",
    description:
      "Wij testen hooks, formaten en boodschappen continu om te verbeteren. Jouw ROAS stijgt niet vanzelf — maar met ons wel.",
  },
];

const pillars = [
  {
    key: "Organische Short-Form Content",
    label: "01 — Organisch",
    color: "bg-[#0057FF]/8",
    dot: "bg-[#0057FF]",
  },
  {
    key: "Creatives voor Paid Ads",
    label: "02 — Paid Ads",
    color: "bg-purple-50",
    dot: "bg-purple-500",
  },
];

export default function Diensten() {
  return (
    <section className="py-28 px-6 bg-white" id="diensten">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <span className="text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase">
            Wat Wij Doen
          </span>
          <h2
            className="font-syne text-4xl md:text-5xl text-[#0A0F2C] mt-3 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Twee pijlers. <br className="hidden md:block" />
            Eén doel: groeien.
          </h2>
        </div>

        {/* Pillar legend */}
        <div className="flex flex-wrap gap-3 mb-14">
          {pillars.map((p) => (
            <span
              key={p.key}
              className={`inline-flex items-center gap-2 text-xs font-dm font-semibold px-4 py-2 rounded-full ${p.color}`}
            >
              <span className={`w-2 h-2 rounded-full ${p.dot}`} />
              {p.label}: {p.key}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diensten.map(({ pillar, pillarColor, icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Blue left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-[#0057FF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              {/* Pillar label */}
              <span className={`font-dm text-[10px] font-bold uppercase tracking-widest ${pillarColor} mb-4 block`}>
                {pillar}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(0,87,255,0.08)" }}
              >
                <Icon className="w-6 h-6 text-[#0057FF]" strokeWidth={1.8} />
              </div>
              <h3
                className="font-syne text-lg text-[#0A0F2C] mb-2"
                style={{ fontWeight: 700 }}
              >
                {title}
              </h3>
              <p className="font-dm text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
