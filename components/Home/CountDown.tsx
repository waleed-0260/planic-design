import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import boards from "../../public/images/boards.svg"
import goals from "../../public/images/goals.svg"
import oriented from "../../public/images/oriented.svg"
import years from "../../public/images/years.svg"
import Image from "next/image";
const CountDown = () => {
  const counters = [
    { value: 7, text: "Years of Exeprience", img: goals },
    { value: 65, text: "Projects Done", img: boards},
    { value: 200, text: "Satisfied Clients", img: oriented},
    { value: 150, text: "Designed Projects", img: years},
    // { value: 200, text: "Team members across the globe" },
    // { value: 300, text: "Positive reviews from our users" },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      className="w-full m-[50px] py-[100px] bg-[#2e302e] flex flex-col items-center justify-center"
      ref={ref} // Attach ref to this section
    >
      <div className="flex flex-col items-start w-[90%]">
        <h1 className="font-bold md:text-4xl text-2xl text-white md:w-[50%]">
          We are city making design leader
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-4 mt-[40px] w-full">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-row items-center space-x-6 ">
            <div  className="flex flex-col p-4">
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
            <div>
            <Image src={counter.img} alt="img" className="object-cover w-[100px] h-[100px]"/>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
