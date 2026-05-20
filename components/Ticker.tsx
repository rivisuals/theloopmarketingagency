const platforms = [
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Facebook",
  "YouTube",
  "Reels",
  "Shorts",
];

export default function Ticker() {
  const items = [...platforms, ...platforms];

  return (
    <section className="bg-[#0A0F2C] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((platform, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 text-white font-dm text-sm font-medium tracking-widest uppercase"
          >
            <span className="text-[#0057FF] text-lg leading-none">•</span>
            {platform}
          </span>
        ))}
        {items.map((platform, i) => (
          <span
            key={`dup-${i}`}
            className="inline-flex items-center gap-4 mx-6 text-white font-dm text-sm font-medium tracking-widest uppercase"
          >
            <span className="text-[#0057FF] text-lg leading-none">•</span>
            {platform}
          </span>
        ))}
      </div>
    </section>
  );
}
