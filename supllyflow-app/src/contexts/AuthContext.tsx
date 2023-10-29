// authContext.tsx

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  saveToken: (token: string) => void;
  getToken: () => string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = React.useState<string | null>(null);

  const saveToken = (newToken: string) => {
    setToken(newToken);
    AsyncStorage.setItem("token", newToken);
  };

  const getToken = () => {
    AsyncStorage.getItem("token").then((tokenSave) => {
      setToken(tokenSave);
    });

    return token;
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
