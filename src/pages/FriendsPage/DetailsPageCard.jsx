const DetailsPageCard = ({ expectedData }) => {
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-92 p-10 shadow-sm">
          <figure className=" mx-auto">
            <img
              src={expectedData.picture}
              alt={expectedData.name}
              className=" w-48 h-48 rounded-full object-cover p-1"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{expectedData.name}</h2>
            <p>{expectedData.days_since_contact} Days Ago</p>
            <div className="flex gap-3">
              {expectedData.tags.map((tag) => {
                return <div className="badge badge-success">{tag}</div>;
              })}
            </div>
            <div
              className={`${expectedData.status === "Overdue" ? "bg-[#ef4444] text-white rounded-xl p-1" : ""} &&  ${expectedData.status === "Almost Overdue" ? "bg-[#efad44] text-white rounded-xl p-1" : ""} && ${expectedData.status === "On-track" ? "bg-[#244d3f] text-white rounded-xl p-1" : ""}  `}
            >
              {expectedData.status}
            </div>

            <p className="text-gray-500 italic text-[15px]">
              "{expectedData.bio}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageCard;
