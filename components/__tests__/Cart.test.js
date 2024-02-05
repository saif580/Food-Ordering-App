import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import Header from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<RestaurantMenu />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Cart (1 items)"));
//   const foodItems = screen.getAllByTestId("foodItems");
  expect(screen.queryAllByTestId("foodItems").length).toBe(1);
});
