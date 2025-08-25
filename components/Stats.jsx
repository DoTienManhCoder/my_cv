"use client";

import CountUp from "react-countup";

const StatsData = [
  { num: 0, text: "Years of Experience" },
  { num: 5, text: "Projects Completed" },
  { num: 9, text: "Technologies experienced" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {StatsData.map((item, index) => (
            <div
              className="flex flex-col items-center xl:items-start text-center xl:text-left"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={1}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="leading-snug text-white/80 max-w-[150px] mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
