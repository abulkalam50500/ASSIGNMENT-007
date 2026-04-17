import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";

import {
  BellDot,
  ArchiveRestore,
  Trash,
  PhoneForwarded,
  MailMinus,
  Video,
} from "lucide-react";
import { DataContext } from "../../context/DataProvider";

const FriendDetail = () => {
  const { id } = useParams();
  
  const {handleInteraction,processData}= useContext(DataContext); 



  const AllFriend = useLoaderData();

  const FindFriend = AllFriend.find((friend) => friend.id == id);

 
  const status_color = {
    "almost due": "badge badge-warning",
    overdue: "badge badge-error",
    "on-track": "badge badge-neutral",
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-9">
      <div className="firend-detail max-w-[1110px] w-full mx-auto">
        <div className="friend-wrap grid grid-cols-[1fr_2fr] gap-5">
          <div className="left-sidebar">
            <div className="p-5 text-center shadow-sm rounded">
              <div className="friend-img flex justify-center">
                <img className="max-w-[80px]" src={FindFriend.picture} alt="" />
              </div>
              <div className="basic-info space-y-1 mt-5">
                <h2 className="text-[20px] font-semibold text-[#1F2937]">
                  {FindFriend.name}
                </h2>

                <div className="mt-2">
                  <div
                    className={`text-white ${status_color[FindFriend.status]}`}
                  >
                    {FindFriend.status}
                  </div>
                </div>
                <div className="mt-2">
                  {FindFriend.tags.map((tag, index) => (
                    <div key={index} className="badge bg-[#CBFADB]">
                      {tag}
                    </div>
                  ))}
                </div>

                <p className="text-[#64748B] font-medium inter-font">
                  {FindFriend.bio}
                </p>

                <p className="text-[#64748B] pt-2">
                  Preferred: {FindFriend.email}
                </p>
              </div>
            </div>

            <div className="p-3 text-center mt-9 shadow-sm rounded">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <BellDot />{" "}
                <p className="font-medium text-[16px] text-[#1F2937]">
                  Snooze 2 weeks
                </p>
              </div>
            </div>

            <div className="p-3 text-center mt-5 shadow-sm rounded">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <ArchiveRestore />{" "}
                <p className="font-medium text-[16px] text-[#1F2937]">
                  Archive
                </p>
              </div>
            </div>

            <div className="p-3 text-center mt-5 shadow-sm rounded ">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <Trash className="text-red-500" />{" "}
                <p className="font-medium text-[16px] text-red-500">Delete</p>
              </div>
            </div>
          </div>

          <div className="right-sidebar">
            <div className="right-side-top-grid grid grid-cols-3 gap-4">
              <div className="top-single-box p-3 shadow">
                <h3 className="font-semibold text-[32px] text-[#244D3F] text-center">
                  {FindFriend.days_since_contact}
                </h3>
                <p className="text-[#64748B] text-center pt-[2px]">
                  Days Since Contact
                </p>
              </div>

              <div className="top-single-box p-3 shadow">
                <h3 className="font-semibold text-[32px] text-[#244D3F] text-center">
                  {FindFriend.goal}
                </h3>
                <p className="text-[#64748B] text-center pt-[2px]">
                  Goal (Days)
                </p>
              </div>

              <div className="top-single-box p-3 shadow">
                <h3 className="font-semibold text-[32px] text-[#244D3F] text-center">
                  {formatDate(FindFriend.next_due_date)}
                </h3>
                <p className="text-[#64748B] text-center pt-[2px]">Next Due</p>
              </div>
            </div>

            <div className="p-5 right-side-middle  mt-15 shadow-sm rounded ">
              <div className="flex items-center p-1 justify-between gap-2">
                <p className="font-medium text-[16px] text-[#244D3F]">
                  Relationship Goal
                </p>
                <button className="btn">Edit</button>
              </div>
              <p className="p-1">
                <span className="text-[#64748B]"> Connect every</span>{" "}
                <strong>{FindFriend.goal} days</strong>
              </p>
            </div>

            <div className="p-5 right-side-bottom  mt-5 shadow-sm rounded ">
              <h3 className="text-[20px] font-medium text-[#244D3F]">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 p-1 mt-3 gap-4">
                <div className="top-single-box  p-3 shadow" onClick={()=>handleInteraction(FindFriend,'call')}>
                  <PhoneForwarded className="block mx-auto" />
                  <p className=" text-center text-[18px] pt-[4px]">Call</p>
                </div>

                <div className="top-single-box p-3 shadow" onClick={()=>handleInteraction(FindFriend,'sms')}>
                  <MailMinus className="block mx-auto" />
                  <p className=" text-center text-[18px] pt-[4px]">Text</p>
                </div>

                <div className="top-single-box p-3 shadow" onClick={()=>handleInteraction(FindFriend,'video')}>
                  <Video className="block mx-auto" />
                  <p className=" text-center text-[18px] pt-[4px]">Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
