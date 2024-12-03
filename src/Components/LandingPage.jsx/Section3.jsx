import React from "react";
import "./Section3.css";

export const Section3 = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse justify-center items-center DISPLAY">
      <div className="lg:w-[750px] lg:h-[600px] Section3Image">
        <img src="./assets/section3.png" className="scale-75" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-[600px] lg:h-[600px] mr-14 space-y-6 px-4 ADJUSTMENT23">
        <div className="text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-[#B24592] to-[#F15F79] font-bold adjust_size">
          Ideathon 7.0
        </div>
        <div className="text-justify text-[1.2rem] text-base Sec3AdjustContent">
          Innovative brain and enthusiasm to convert ideas into reality is key
          to solve real-life problems. Do you have a desire to solve the daily
          life problems around you? There is a well-known proverb “There is a
          way there is will”. If you want to present your creative idea to solve
          the problems in day to day life or the problems of great significance
          in human life, then we have a challenge for you.
        </div>
        <div className="text-justify text-[1.2rem] text-base Sec3AdjustContent">
          Compete with the innovative and enthusiastic minds of the nation in
          IDEATHON 7.0. Come and join us at DSPM IIIT Naya Raipur to showcase
          your innovative and creative ideas and prototypes to solve real life
          problems.
        </div>
      </div>
    </div>
  );
};
