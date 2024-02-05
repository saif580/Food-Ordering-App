import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    props.resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[230px] bg-[#f0f0f0] rounded-lg"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="flex flex-wrap text-sm text-gray-600">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-lg font-semibold">{avgRating}</h4>
      <h4 className="text-gray-600">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
