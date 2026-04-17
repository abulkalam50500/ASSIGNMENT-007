import React from "react";
import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1110px] w-full mx-auto">
        <h2 className="text-center font-bold text-[48px] text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-center text-[#64748B] font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-center text-white mt-5 block mx-auto flex">
          <Plus /> Add Friend
        </button>
      </div>
    </div>
  );
};

export default Hero;
