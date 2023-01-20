import { ChildrenTypes } from "@/types/ChildrenTypes";
import React, { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: ChildrenTypes) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    //init netlify identity connection
    netlifyIdentity.init();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;
