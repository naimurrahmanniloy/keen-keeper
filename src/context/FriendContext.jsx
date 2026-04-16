import React, { Children, createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [personCallData, setPersonCallData] = useState([]);
  const handleCallBtn = (wholeData) => {
    setPersonCallData([...personCallData, wholeData]);
  };
  const [personTextData, setPersonTextData] = useState([]);
  const handleTextBtn = (wholeData) => {
    setPersonTextData([...personTextData, wholeData]);
  };
  const data = {
    handleCallBtn,
    personCallData,
    setPersonCallData,
    handleTextBtn,
    setPersonTextData,
    personTextData,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
