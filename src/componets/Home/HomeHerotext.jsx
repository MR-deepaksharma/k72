import React from "react";
import Video from "./Video";

const HomeHerotext = () => {
  return (
    <div className=" text-amber-50 font-[font1] pt-1 text-center">
      <div className="text-[9vw] uppercase leading-[9.vw]">The spark</div>
      <div className="text-[9vw] uppercase leading-[9.5vw] flex items-center justify-center">
        who 
        <div className="h-[10vw] rounded-full overflow-hidden">
          <Video />
        </div>
        generates
      </div>
      <div className="text-[9vw] uppercase leading-[9.5vw]">
        there creativity
      </div>
    </div>
  );
};

export default HomeHerotext;
