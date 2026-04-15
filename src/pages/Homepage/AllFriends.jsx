import React, { use } from "react";

const friends = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
  const friendsData = use(friends);
  console.log(friendsData);
  return (
    <div className="pt-10">
      <h1 className="text-2xl font-bold">Your Friends</h1>
      <div className="mt-4">
        {friendsData.map((friendData) => {
          return (
            <div
              key={friendData.id}
              className="card bg-base-100 w-96 shadow-sm"
            >
              <figure className="px-10 pt-10">
                <img
                  src={friendData.picture}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friendData.name}</h2>
                <p>{friendData.days_since_contact} Days Ago</p>
                <div className="flex gap-3">
                  {friendData.tags.map((tag) => {
                    return <div className="badge badge-success">{tag}</div>;
                  })}
                </div>
                <div
                  className={`${friendData.status === "Overdue" ? "bg-[#ef4444] text-white rounded-xl p-1" : ""} &&  ${friendData.status === "Almost Overdue" ? "bg-[#efad44] text-white rounded-xl p-1" : ""} && ${friendData.status === "On-track" ? "bg-[#244d3f] text-white rounded-xl p-1" : ""}  `}
                >
                  {friendData.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFriends;
