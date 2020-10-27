import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContext {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContextImp = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@auth.token");
    const user = localStorage.getItem("@auth.user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("auth", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@auth.token", token);
    localStorage.setItem("@auth.user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@auth.token");
    localStorage.removeItem("@auth.user");
    setData({} as AuthState );
  }, []);

  return (
    <AuthContextImp.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContextImp.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContextImp);

  if (!context)
    throw new Error("useAuth must be  used  within an AuthProvider");

  return context;
}
