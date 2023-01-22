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
  const [authReady, setAuthReady] = useState<boolean>(false);

  useEffect(() => {
    //event listener for login
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    //event listener for logout
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    //event listener for init
    netlifyIdentity.on("init", (user) => {
      setAuthReady(true);
      console.log("init event");
      setUser(user);
    });
    //init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    user,
    login,
    logout,
    authReady,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
