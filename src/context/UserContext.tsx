import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
};

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const defaultUser: User = {
  firstName: "",
  lastName: "",
};

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState(defaultUser);

  function resetUser() {
    setUser(defaultUser);
  }

  return (
    <UserContext.Provider value={{ user, setUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
