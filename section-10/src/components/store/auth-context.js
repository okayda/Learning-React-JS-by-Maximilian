import react, { useState, useEffect } from "react";

const AuthContext = react.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = function (prop) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInformation === "1") {
      return setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = function () {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = function () {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {prop.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
