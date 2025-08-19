"use client";

import CountUp from "react-countup";

const StatsData = [
  { num: 12, text: "Years of Experience" },
  { num: 50, text: "Projects Completed" },
  { num: 100, text: "Technologies mastered" },
  { num: 5, text: "Code commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {StatsData.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span className="text-sm xl:text-base opacity-70">
                  {item.label}
                </span>
                <p className={`${item.text<15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                    {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
