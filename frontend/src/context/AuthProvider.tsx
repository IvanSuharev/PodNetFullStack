import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuth: (auth: boolean) => void;
};
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuth: () => { },
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

