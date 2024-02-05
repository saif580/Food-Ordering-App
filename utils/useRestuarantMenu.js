import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestuarantMenu;
