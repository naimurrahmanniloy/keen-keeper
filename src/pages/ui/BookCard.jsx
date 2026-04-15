import React from "react";
import { Link } from "react-router";

const BookCard = ({ friendData }) => {
  return (
    <Link to={`/friendDetails/${friendData.id}`}>
      <div className="card bg-base-100 w-80% p-10 shadow-sm">
        <figure className=" mx-auto">
          <img
            src={friendData.picture}
            alt={friendData.name}
            className=" w-48 h-48 rounded-full object-cover p-1"
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
    </Link>
  );
};

export default BookCard;
