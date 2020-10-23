import React, { createContext, useCallback } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContext {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContextImp = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("auth", {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContextImp.Provider value={{ name: "raphael", signIn }}>
      {children}
    </AuthContextImp.Provider>
  );
};
