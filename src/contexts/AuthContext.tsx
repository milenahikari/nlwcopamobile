import { createContext, ReactNode } from "react";

type UserProps = {
  name: string;
  avatarUrl: string;
};

export type AuthContextDataProps = {
  user: UserProps;
  signIn: () => Promise<void>;
};

type AutProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AutProviderProps) {
  async function signIn() {
    console.log("Fazer login");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Milena Hikari",
          avatarUrl: "https://github.com/milenahikari.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
