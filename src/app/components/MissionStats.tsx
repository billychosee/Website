"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function MissionStats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <div
        className="px-5 md:px-24 bg-[#010626] md:min-h-full lg:min-h-screen text-center py-20 space-y-6 md:space-y-20"
        style={{ backgroundImage: "url('/world_bg.svg')" }}
      >
        <p className="text-sm font-bold text-[#00b956]">OUR MISSION</p>
        <h1 className="text-[#4A90A4] text-3xl xl:text-[53px] font-bold lg:text-4xl">
          Join us in embracing technology's possibilities.
        </h1>
        <p className="text-gray-400">
          At Smatech, we envision a future where seamless connectivity and
          <br />
          innovative technology empower businesses to transcend boundaries and
          <br />
          achieve their full potential.
        </p>

        <div className="flex flex-col items-center justify-between pt-6 space-y-14 md:flex-row md:space-y-0 md:pt-0">
          <StatItem value={3} suffix="hrs" label="Average time to resolve a technical bug." />
          <StatItem value={10} suffix="min" label="Average time to read and respond to an email" />
          <StatItem value={80} suffix="%" label="Calls answered within 15 seconds of calling" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-5 md:flex-row md:space-x-5">
      <h1 className="text-6xl font-bold text-[#00b956] lg:text-4xl xl:text-6xl">
        {inView ? <CountUp end={value} duration={2} /> : 0}
        {suffix}
      </h1>
      <p className="text-sm lg:text-xs xl:text-sm md:text-start text-white">{label}</p>
    </div>
  );
}
