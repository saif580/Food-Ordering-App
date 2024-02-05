import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);


  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between">
      <div className="logo">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "👌✅" : "❌🔴"}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4"><Link to={'/cart'}>Cart ({cartItems.length} items)</Link></li>
          <button
            onClick={() => {
              if (btnNameReact === "login") {
                setBtnNameReact("logout");
              } else {
                setBtnNameReact("login");
              }
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
