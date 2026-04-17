import React from 'react';
import FirendImg from "../../assets/Friends/jesika.png";
const Timeline = () => {
    return (
        <div className='mt-10'>
             <div className='max-w-[1110px] w-full mx-auto'>
                  <div className="headline">
                    <h2 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h2>
                  </div>
                  <div className="sort mt-3">
                       <select name="" className='' id="">
                        <option value="">Filter</option>
                       </select>
                  </div>

                 <div className='inline-cards mt-8'>

                     <div className='single-inline-card shadow-xl p-3'>
                          <img className='max-w-[50px]' src={FirendImg} alt="" />
                          <div className="inline-card-info">
                             <p><strong className='text-[#244D3F] text-[20px] font-medium'>Meetup</strong> <span className='text-[#64748B] text-[18px]'>with Tom Baker</span> </p>
                             <p className='font-medium text-[#64748B]'>March 29, 2026</p>
                          </div>
                     </div>

                 </div>

             </div>
        </div>
    );
};

export default Timeline;