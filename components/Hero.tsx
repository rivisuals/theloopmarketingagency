"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Accent glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,87,255,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          <span className="inline-block text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase mb-6 border border-[#0057FF]/20 bg-[#0057FF]/5 px-4 py-1.5 rounded-full">
            Social Media Marketing
          </span>
          <h1
            className="font-syne text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-[#0A0F2C] mb-6"
            style={{ fontWeight: 800 }}
          >
            Wij laten jouw <br />
            merk groeien <br />
            <span className="text-[#0057FF]">op social.</span>
          </h1>
          <p className="font-dm text-gray-500 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
            Van short-form content tot killer ad creatives — wij zorgen dat
            jouw merk gezien, onthouden en gekozen wordt.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#0057FF] text-white font-syne font-bold text-sm px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
            >
              Gratis Audit Aanvragen
            </a>
            <a
              href="#work"
              className="border border-[#0A0F2C]/20 text-[#0A0F2C] font-syne font-bold text-sm px-8 py-4 rounded-full hover:border-[#0057FF] hover:text-[#0057FF] transition-all duration-200"
            >
              Bekijk Ons Werk
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["N", "B", "T", "O"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-dm">
              <span className="font-semibold text-[#0A0F2C]">10+ merken</span>{" "}
              laten groeien in 2025
            </p>
          </div>
        </div>

        {/* Right — floating metric cards */}
        <div className="relative flex flex-col gap-5 items-end">
          {/* Card 1 */}
          <div className="animate-float w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
            <p className="text-xs font-dm text-gray-400 mb-1 uppercase tracking-widest">
              Volgers Gewonnen
            </p>
            <p
              className="font-syne text-3xl text-[#0A0F2C]"
              style={{ fontWeight: 800 }}
            >
              +48.2K
            </p>
            <p className="text-xs text-gray-400 font-dm mt-1">
              afgelopen 30 dagen
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-green-600 font-medium font-dm">
                +12% t.o.v. vorige maand
              </span>
            </div>
          </div>

          {/* Card 2 — blue */}
          <div className="animate-float-delayed w-64 bg-[#0057FF] rounded-2xl shadow-xl shadow-blue-200 p-5 self-start ml-8">
            <p className="text-xs font-dm text-blue-200 mb-1 uppercase tracking-widest">
              Engagement Rate
            </p>
            <p
              className="font-syne text-3xl text-white"
              style={{ fontWeight: 800 }}
            >
              8.4%
            </p>
            <p className="text-xs text-blue-200 font-dm mt-1">
              Industrie gem.: 2.1%
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-blue-400/40 overflow-hidden">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "84%" }}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="animate-float-slow w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
            <p className="text-xs font-dm text-gray-400 mb-1 uppercase tracking-widest">
              Organisch Bereik
            </p>
            <p
              className="font-syne text-3xl text-[#0A0F2C]"
              style={{ fontWeight: 800 }}
            >
              2.1M
            </p>
            <p className="text-xs text-gray-400 font-dm mt-1">vertoningen</p>
            <div className="mt-3 flex gap-1">
              {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-[#0057FF]/20"
                  style={{ height: `${h * 0.4}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
