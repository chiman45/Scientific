import React from "react";

export const Timeline3 = () => {
  return (
    <div className="flex flex-row-reverse md:flex-col justify-center items-center space-y-2 w-[240px]">
      <div className="h-[57px] md:h-[187px]  w-1 rounded-t rounded-b bg-gradient-to-b from-[#272727] to-[#272727CC] relative">
        <div className="absolute md:top-0 left-3 flex flex-col justify-center items-start md:justify-start md:items-start w-[210px] space-y-0.5">
          <div className="text-transparent text-xl font-extrabold bg-clip-text bg-gradient-to-r whitespace-normal xl:whitespace-pre from-[#272727] to-[#272727CC] ">
            Screening of Applications
          </div>
          <div className=" text-transparent text-base font-bold bg-clip-text bg-gradient-to-r from-[#606C88] to-[#3F4C6B]">
            December 20, 2024
          </div>
          <div className="text-black font-medium text-sm">
            Shortlisted candidates will be notified through email
          </div>
        </div>
      </div>
      <div>
        <div className="hex3 w-[117px] sm:w-[147px] h-[117px] sm:h-[147px]  rotate-90 bg-gradient-to-t from-[#272727] to-[#272727CC] relative">
          <div className="absolute h-fit px-7 sm:px-10 top-[20%] sm:top-[25%] left-1 -rotate-90 flex flex-col justify-center items-end text-white">
            <div className="text-5xl">20</div>
            <div className="text-xl">Dec</div>
          </div>
        </div>
      </div>
    </div>
  );
};
