import React, { createContext, useState } from "react";
export const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [loggedinuser, setloggedinuser] = useState()
    
     return (
      <UserContext.Provider value={{loggedinuser,setloggedinuser}}>
        {children}
      </UserContext.Provider>
    );
}
export default UserProvider
