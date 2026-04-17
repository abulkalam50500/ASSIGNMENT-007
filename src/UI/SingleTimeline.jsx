import React from "react";
import { Video,Handshake,MessageSquareMore  } from 'lucide-react';
const SingleTimeline = ({item}) => {

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };


  const iconsShow = {
    'call':<Handshake className="text-yellow-500" size={42} />,
    'sms':<MessageSquareMore className="text-gray-500" size={42}  />,
    'video':<Video className="text-yellow-500" size={42}  />,
  }
  const StatusShow = {
    'call':"Call",
    'sms':'Text',
    'video':'Video Call',
  }

  return (
    <div className="single-inline-card mt-3 shadow rounded p-5 items-center flex gap-7">
      <div>
          {iconsShow[item.Intereaction]}
      </div>
      <div className="inline-card-info">
        <p>
          <strong className="text-[#244D3F] text-[20px] font-medium">
            {
                StatusShow[item.Intereaction]
            }
          </strong>{" "}
          <span className="text-[#64748B] text-[18px]">
            with {item.name}
          </span>
        </p>
        <p className="font-medium text-[#64748B]">{formatDate(item.IntereactionDate)}</p>
      </div>
    </div>
  );
};

export default SingleTimeline;
