import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState([]);
  const handleCallBtn = (wholeData) => {
    setPersonalData([...personalData, wholeData]);

    toast.success(`Calling ${wholeData.name}`);
  };

  const handleBtn = (data) => {
    setPersonalData([...personalData, data]);
    toast.success(`Texting ${data.name}`);
  };
  const data = {
    handleCallBtn,
    handleBtn,
    setPersonalData,
    personalData,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
