import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

const navCols = [
  {
    heading: "Diensten",
    links: [
      "Content Strategie",
      "Video-editing & Productie",
      "Community Management",
      "Ad Creative Productie",
      "A/B Testing",
      "Brand Identity",
    ],
  },
  {
    heading: "Bedrijf",
    links: ["Over Ons", "Case Studies", "Vacatures", "Pers", "Blog"],
  },
  {
    heading: "Contact",
    links: [
      "Gratis Audit",
      "info@theloopmarketingagency.nl",
      "+31 6 84 909 371",
    ],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/theloopmarketingagency" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@theloopmarketingagency" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3">
              <p className="font-syne text-2xl leading-none" style={{ fontWeight: 800 }}>
                The<span className="text-[#0057FF]">Loop</span>
              </p>
              <p
                className="font-syne text-[9px] tracking-[0.18em] uppercase text-white/40 mt-0.5"
                style={{ fontWeight: 600 }}
              >
                Marketing Agency
              </p>
            </div>
            <p className="font-dm text-blue-300 text-sm leading-relaxed max-w-xs">
              Premium social media marketing voor merken die willen groeien —
              snel, slim en met resultaten die je ziet.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0057FF] hover:border-[#0057FF] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <p
                className="font-syne text-xs uppercase tracking-widest text-blue-300 mb-4"
                style={{ fontWeight: 700 }}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-dm text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-white/40">
            © 2025 TheLoop Marketing Agency. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            {["Privacybeleid", "Algemene Voorwaarden", "Cookiebeleid"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="font-dm text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
