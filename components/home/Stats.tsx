"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

function CountUp({ start = 0, end, suffix = "", duration = 1.5 }: { start?: number; end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startVal = start;
    const endValue = end;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = Math.round(startVal + (endValue - startVal) * progress * (2 - progress));
      
      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, start, end, duration]);

  return (
    <span ref={ref} className="font-bold text-[#B89B5E]">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      num: 1986,
      start: 1970,
      suffix: "",
      label: "Audit Practice Since",
      desc: "ICAP registered audit licensing",
    },
    {
      num: 100,
      start: 0,
      suffix: "+",
      label: "Professionals",
      desc: "Chartered accountants and advisors",
    },
    {
      num: 3,
      start: 0,
      suffix: "",
      label: "Office Locations",
      desc: "Peshawar, Islamabad, and Kabul",
    },
  ];

  return (
    <section className="bg-[#123C32] py-24 text-white overflow-hidden relative border-y border-white/5">
      {/* Subtle lines background inside statistics */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-12 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
          <line x1="10" y1="0" x2="90" y2="100" stroke="white" strokeWidth="1" />
          <line x1="30" y1="0" x2="110" y2="100" stroke="white" strokeWidth="1" />
          <line x1="50" y1="0" x2="130" y2="100" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-site relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
          >
            <div className="text-5xl md:text-6xl tracking-tight">
              <CountUp start={stat.start} end={stat.num} suffix={stat.suffix} />
            </div>
            <div className="h-px w-8 bg-[#A8BDAF] opacity-30 my-1" />
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#A8BDAF]">
              {stat.label}
            </p>
            <p className="text-xs text-[#A8BDAF]/70 leading-normal max-w-[240px]">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
