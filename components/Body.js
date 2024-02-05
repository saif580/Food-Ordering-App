import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [topResData, setTopResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTopResData, setFilteredTopResData] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8407224&lng=80.9933538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[4]);
    setTopResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredTopResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterHandler = () => {
    const filteredRestaurant = topResData.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setTopResData(filteredRestaurant);
  };

  const searchChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchRestaurantHandler = () => {
    const searchedRestaurant = topResData.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(searchText);
    });
    setFilteredTopResData(searchedRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like You're Offline!!! Please Check Your Internet Connection.
      </h1>
    );
  }

  if (topResData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={searchChangeHandler}
            alt="SEARCH RESTAURANT"
          />
          <button
            className="px-6 bg-green-100 m-4 rounded-xl"
            onClick={searchRestaurantHandler}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-6 bg-green-100 m-4 rounded-xl"
            onClick={filterHandler}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4">
          <label>Username:-</label>
          <input
            className="px-6 m-4 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredTopResData.length > 0 ? (
          filteredTopResData.map((restuarant) => {
            return (
              <Link
                to={"/restaurant/" + restuarant.info.id}
                key={restuarant.info.id}
              >
                <RestaurantCard resData={restuarant.info} />
              </Link>
            );
          })
        ) : (
          <p>No Data Found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
