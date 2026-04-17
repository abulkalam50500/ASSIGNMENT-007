import React, { useContext, useEffect, useState } from "react";
import FirendImg from "../../assets/Friends/jesika.png";
import { DataContext } from "../../context/DataProvider";
import SingleTimeline from "../../UI/SingleTimeline";
const Timeline = () => {
  const { processData } = useContext(DataContext);


  const [filterData,setFilterData] = useState([]);


  useEffect(() => {
  setFilterData(processData);
}, [processData]);


const HandleFilterTimeline = (e) => {
  
          const filter_value = e.target.value;

        const filtered = processData.filter(
      (item) => item.Intereaction === filter_value
    );
          setFilterData(filtered);

          console.log(filterData);
          



};

  let MainItem = '';
 if(filterData.length>0){
    MainItem=<>
  <div className="inline-cards mt-8">
        
          {filterData.map((item, index) => (
            <SingleTimeline key={index} item={item} />
          ))}
        </div></>;
 }else{
    MainItem=<>
     <div className="inline-cards mt-8 bg-gray-200 p-16 rounded">
        

           <h1 className="text-3xl text-center font-bold text-black-500">Item Not Found.</h1>

        </div></>
 }

  return (
    <div className="mt-10">
      <div className="max-w-[1110px] w-full mx-auto">
        <div className="headline">
          <h2 className="text-[48px] pl-7 md:pl-1 font-bold text-[#1F2937]">Timeline</h2>
        </div>
        <div className="sort mt-3 ml-4 md:ml-1">
          <select defaultValue="Sort" className="select" onChange={(e) => HandleFilterTimeline(e)}>
            <option disabled={true}>Sort</option>
            <option value="call">Call</option>
            <option value="sms">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

          {
            MainItem
          }
        
      </div>
    </div>
  );
};

export default Timeline;
