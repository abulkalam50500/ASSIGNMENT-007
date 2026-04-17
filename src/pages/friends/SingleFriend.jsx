import React from 'react';

const SingleFriend = ({friend}) => {

 
    const status_color = {
        'almost due':'badge badge-warning',
        'overdue':'badge badge-error',
        'on-track':'badge badge-neutral',
    }


    return (
        <>
         <div className='friend-card p-5 text-center shadow rounded'>
                        <div className="friend-img flex justify-center">
                            <img className='max-w-[80px]' src={friend.picture} alt="" />
                        </div>
                        <div className='basic-info space-y-1 mt-5'>
                            <h2 className='text-[20px] font-semibold text-[#1F2937]'>{friend.name}</h2>
                            <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
                            <p>
                                {
                                    friend.tags.map((tag,index)=> <div key={index} className="badge bg-[#CBFADB]">{tag}</div>)
                                }
                               
                                </p>
                            <p className='mt-2'><div className={`text-white ${status_color[friend.status]}`}>{friend.status}</div></p>
                        </div>
                    </div>
                    </>
    );
};

export default SingleFriend;