import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountDown = () => {
  const counters = [
    { value: 7, text: "Years of Exeprience" },
    { value: 65, text: "Projects Done" },
    { value: 200, text: "Satisfied Clients" },
    { value: 150, text: "Designed Projects" },
    // { value: 200, text: "Team members across the globe" },
    // { value: 300, text: "Positive reviews from our users" },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      className="w-full m-[50px] py-[100px] bg-[#FF4814] flex flex-col items-center justify-center"
      ref={ref} // Attach ref to this section
    >
      <div className="flex flex-col items-start w-[90%]">
        <h1 className="font-bold text-6xl text-white w-[50%]">
          We are city making design leader
        </h1>

        <div className="grid grid-cols-2 gap-6 p-4 mt-[40px] w-full">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col p-4">
              {inView && ( // Start counter animation only when in view
                  <p 
                  className="text-[70px] text-white"
                  >

                <CountUp
                  end={counter.value}
                  duration={2}
                  />
                  +
                  </p>
              )}
              <p className="text-white text-xl">{counter.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
