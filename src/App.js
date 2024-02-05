import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import RestaurantMenu from "../components/RestaurantMenu";
import UserClass from "../components/UserClass";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "../components/Cart";

//Lazing loading..... wrap this in suspense tag!!!
const About = lazy(() => import("../components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //suppose we're writing som authentication logic here
  useEffect(() => {
    //suppose we have made the request to the with username and passwor and return we get user name
    const data = {
      name: "Saiful Hasan",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/userclass", element: <UserClass /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
