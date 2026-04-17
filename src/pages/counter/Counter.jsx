import React from 'react';

const Counter = () => {
    return (
        <div className='mt-9'>
            <div className='max-w-[1110px] w-full mx-auto'>
                 <div className='counter-boxs grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px]'>
                    <div className='single-counter-box p-6 shadow'>
                        <h3 className='font-semibold text-[32px] text-[#244D3F] text-center'>10</h3>
                        <p className='text-[#64748B] text-center pt-[2px]'>Total Friends</p>
                    </div>
                     <div className='single-counter-box p-6 shadow'>
                        <h3 className='font-semibold text-[32px] text-[#244D3F] text-center'>3</h3>
                        <p className='text-[#64748B] text-center pt-[2px]'>On Track</p>
                    </div>
                    <div className='single-counter-box p-6 shadow'>
                        <h3 className='font-semibold text-[32px] text-[#244D3F] text-center'>6</h3>
                        <p className='text-[#64748B] text-center pt-[2px]'>Need Attention</p>
                    </div>
                     <div className='single-counter-box p-6 shadow'>
                        <h3 className='font-semibold text-[32px] text-[#244D3F] text-center'>12</h3>
                        <p className='text-[#64748B] text-center pt-[2px]'>Interactions This Month</p>
                    </div>
                 </div>
                 
                 <div className='devider border-b border-[#E9E9E9] mt-10 '>

                 </div>

            </div>
        </div>
    );
};

export default Counter;