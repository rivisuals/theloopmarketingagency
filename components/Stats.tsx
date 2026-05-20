"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 340, suffix: "%", label: "Meer Bereik", prefix: "" },
  { value: 12, suffix: "M+", label: "Vertoningen Gegenereerd", prefix: "" },
  { value: 10, suffix: "+", label: "Tevreden Klanten", prefix: "" },
  { value: 98, suffix: "%", label: "Klantbehoud", prefix: "" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({
  value,
  suffix,
  prefix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, 2000, active);
  return (
    <div className="text-center">
      <p
        className="font-syne text-5xl md:text-6xl text-white mb-3"
        style={{ fontWeight: 800 }}
      >
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="font-dm text-blue-200 text-sm tracking-wide">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) return;
    const el = ref.current;
    if (!el) return;

    const tryActivate = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        setActive(true);
        window.removeEventListener("scroll", tryActivate);
        clearInterval(poll);
      }
    };

    // Scroll listener + polling fallback — ensures Safari compatibility
    const poll = setInterval(tryActivate, 200);
    window.addEventListener("scroll", tryActivate, { passive: true });
    tryActivate(); // check immediately on mount

    return () => {
      window.removeEventListener("scroll", tryActivate);
      clearInterval(poll);
    };
  }, [active]);

  return (
    <section className="bg-[#0A0F2C] py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase">
            Cijfers Die Tellen
          </span>
          <h2
            className="font-syne text-4xl md:text-5xl text-white mt-3 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Resultaten die <br className="hidden md:block" />
            voor zichzelf spreken.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-blue-300 font-dm text-sm max-w-xl mx-auto">
            Gemeten over 10+ merken in 2025. Resultaten variëren per branche en beginpositie.
          </p>
        </div>
      </div>
    </section>
  );
}
