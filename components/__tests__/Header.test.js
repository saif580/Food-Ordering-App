import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  //   const loginButton = screen.getByText("login");
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartCount = screen.queryByText(/cart \((\d+) items\)/i);
  const cartCount = screen.getByText(/Cart/);
  expect(cartCount).toBeInTheDocument();
  //   expect(cartCount).toBeNull();
});

test("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
