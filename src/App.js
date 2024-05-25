import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useLocation} from "react-router-dom";
import { Provider } from "react-redux";
import "../index.css";

import Header from "./components/Header";
import AppBody from "./components/AppBody";
import About from "./components/About";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import {useEffect} from "react"
import { DataContextProvider } from "./components/DataContextProvider";
import appStore from "./utils/appStore";

const App = () => {
  const location = useLocation();
  const{pathname}= location;

  useEffect(()=>{
    document.title = "Order Food Online from India's Best Food Delivery Service | Swiggy";
  },[]);

  return (
    <Provider store={appStore}>
      <DataContextProvider >
        <div className="select-none">
          {pathname==="/about"? null : <Header/>}
          <Outlet />
        </div>
      </DataContextProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <AppBody />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);