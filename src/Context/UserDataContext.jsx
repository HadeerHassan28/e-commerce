import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
export let userDataContext = createContext();
const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  const values = {
    userData: userData,
    saveUserData: saveUserData,
  };
  return (
    <userDataContext.Provider value={values}>
      {children}
    </userDataContext.Provider>
  );
};
export default UserDataContextProvider;
