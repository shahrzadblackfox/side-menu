import React,{useContext, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openSider, setOpenSider] = useState (false);
  const isopenSider = () =>{

    setOpenSider(true)
  }
  const closeSider = () => {
    setOpenSider(false)
  }

  return <AppContext.Provider value={{isopenSider, openSider, closeSider}}>{children}</AppContext.Provider>;
};

export const  GlobalContext= () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
