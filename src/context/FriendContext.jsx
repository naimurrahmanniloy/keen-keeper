import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState([]);

  const handleBtn = (data) => {
    setPersonalData([...personalData, data]);
    {
      data.type == "Call" ? toast.success(`Call with ${data.name}`) : "";
    }
    {
      data.type == "Text" ? toast.success(`Text with ${data.name}`) : "";
    }
    {
      data.type == "Video" ? toast.success(`Video Call with ${data.name}`) : "";
    }
  };
  const data = {
    handleBtn,
    setPersonalData,
    personalData,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
