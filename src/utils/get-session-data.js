import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.contexts";
import userService from "../services/user.services";

export function useSessionData() {
  const { user } = useContext(AuthContext);
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    user &&
      userService
        .getUserById(user._id)
        .then(({ data }) => {
          setSessionData(data);
        })
        .catch((err) => console.log(err));
  }, [user]);

  return sessionData;
}
