import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //State Variables
  const [onlineStatus, setOnlineStatus] = useState(true);

  //Check If User Is Online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
