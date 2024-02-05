import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left"
        >
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <span>{item?.card?.info?.name}</span>
              <span>&#8377; {item?.card?.info?.price / 100}</span>
            </div>
            <div className="w-3/12 p-4 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 h-28 rounded-2xl"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <button
                  className="p-2 rounded-lg bg-green-400 text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
