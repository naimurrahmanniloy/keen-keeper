import React, { use } from "react";
import FriendCard from "../ui/FriendCard";

const friends = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
  const friendsData = use(friends);

  return (
    <div className="pt-10">
      <h1 className="text-2xl font-bold">Your Friends</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {friendsData.map((friendData) => {
          return (
            <FriendCard
              friendData={friendData}
              key={friendData.id}
            ></FriendCard>
          );
        })}
      </div>
    </div>
  );
};

export default AllFriends;
