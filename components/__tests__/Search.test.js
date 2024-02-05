import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render the body component with search field and search for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);
  //expect screen to load 3 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
  expect(searchButton).toBeInTheDocument();
});
