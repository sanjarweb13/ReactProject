import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("sky"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const myValue = { currentUser, setCurrentUser, logout };

  return (
    <AuthContext.Provider value={myValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
