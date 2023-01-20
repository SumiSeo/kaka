import { ChildrenTypes } from "@/types/ChildrenTypes";
import { AuthContetTypes } from "@/types/AuthContextTypes";
import React, { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext<AuthContetTypes>({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: ChildrenTypes) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    //init netlify identity connection
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const context = {
    user,
    login,
    logout: () => {},
    authReady: false,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
