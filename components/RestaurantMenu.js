import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === 0) return <Shimmer />;

  const name = resInfo?.data?.cards[0]?.card?.card?.info?.name;
  const cuisines = resInfo?.data?.cards[0]?.card?.card?.info?.cuisines;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      {cuisines && (
        <p className="text-lg text-gray-600">{cuisines.join(", ")}</p>
      )}
      {/* Accordian categories */}
      {Array.isArray(categories) &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
