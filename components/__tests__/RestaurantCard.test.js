import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard compoenet with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  //   expect(result).toBe(5);
  expect(name).toBeInTheDocument("Pizza Hut");
});
