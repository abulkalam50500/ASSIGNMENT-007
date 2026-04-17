import React, { use } from 'react';

import FirendImg from "../../assets/Friends/jesika.png";
import SingleFriend from './SingleFriend';

const loadFriends = fetch('/friends.json').then(res=>res.json());


const Friends = () => {

     const FriendData = use(loadFriends);

  
     

    return (
        <div className='mt-9'>
            <div className='max-w-[1110px] w-full mx-auto'>
                 <h3 className='text-[24px] font-semibold text-[#1F2937]'>Your Friends</h3>

                <div className='friend-cards mt-3.5 grid grid-cols-4 gap-5'>

                    {
                        FriendData.map((friend,index)=><SingleFriend key={index} friend={friend} />)
                    }
                    
                   

                  
                   
                </div>

            </div>
        </div>
    );
};

export default Friends;