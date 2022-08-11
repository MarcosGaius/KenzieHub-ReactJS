import { createContext, useEffect, useState } from "react";
import { getUserProfile } from "../../services/api";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [IsFetchingUser, setIsFetchingUser] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const doesTokenExistsOnLocalStorage = () => {
    const id = localStorage.getItem("@kenziehub:userId");
    const token = localStorage.getItem("@kenziehub:token");

    if (id === null || token === null) {
      return false;
    }

    return true;
  };

  const isTokenExpired = () => {
    const token = localStorage.getItem("@kenziehub:token");
    const tokenArray = token.split(".");
    const decodedPayload = JSON.parse(atob(tokenArray[1]));
    const tokenExp = Number(decodedPayload.exp + "000");
    const currentDate = Date.now();

    if (currentDate >= tokenExp) {
      return true;
    }
    return false;
  };

  const isTokenValid = doesTokenExistsOnLocalStorage() === true && isTokenExpired() === false;

  useEffect(() => {
    if (isTokenValid) {
      setIsLoading(true);
      const token = localStorage.getItem("@kenziehub:token");

      try {
        getUserProfile(token).then((response) => {
          if (response.request.status !== 200) {
            throw response;
          }
          setUserInfo(response.data);
          setIsLoading(false);
          setIsFetchingUser(false);
        });
      } catch (error) {
        localStorage.clear();
        setIsLoading(false);
        setIsFetchingUser(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [isTokenValid]);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        setIsLoading,
        doesTokenExistsOnLocalStorage,
        isTokenValid,
        userInfo,
        setUserInfo,
        IsFetchingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
