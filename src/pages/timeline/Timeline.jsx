import React, { useContext } from "react";
import FirendImg from "../../assets/Friends/jesika.png";
import { DataContext } from "../../context/DataProvider";
import SingleTimeline from "../../UI/SingleTimeline";
const Timeline = () => {
  const { processData } = useContext(DataContext);

  return (
    <div className="mt-10">
      <div className="max-w-[1110px] w-full mx-auto">
        <div className="headline">
          <h2 className="text-[48px] font-bold text-[#1F2937]">Timeline</h2>
        </div>
        <div className="sort mt-3">
          <select defaultValue="Sort" className="select">
            <option disabled={true}>Sort</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>

        <div className="inline-cards mt-8">
          {processData.map((item, index) => (
            <SingleTimeline key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
