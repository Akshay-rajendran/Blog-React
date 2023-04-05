import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [loggedinuser, setloggedinuser] = useState()

    useEffect(()=>{
      let user=JSON.parse(localStorage.getItem("loggedinuser")) ///to get user info from localstorage in window broser
      console.log("user info from local storage",user);
     setloggedinuser(user)
    },[])
    
     return (
      <UserContext.Provider value={{loggedinuser,setloggedinuser}}>
        {children}
      </UserContext.Provider>
    );
}
export default UserProvider
