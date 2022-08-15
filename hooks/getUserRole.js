import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../config/firebase";

const Role = () => {
  const [endUser, setEndUser] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getRole = async () => {
      const request = await fetch(
        `https://ll-luxury-living.herokuapp.com/user/${user?.displayName}`
      );
      const response = await request.json();
      setEndUser(response);
    };
    getRole();
  }, [user]);

  return endUser[0]?.role;
};

export default Role;
