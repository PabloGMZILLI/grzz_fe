import { createContext } from "react";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
  error: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export default AuthContext;