import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/provider/theme-provider";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import Error from "./pages/Error";
import Success from "./pages/success";
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";
import CreateProduct from "./components/custom/CreateProduct";
import AllProducts from "./components/custom/AllProducts";
import Analytics from "./components/custom/Analytics";
import Orders from "./components/custom/Orders";
import Settings from "./components/custom/Settings";
import { Provider } from "@radix-ui/react-tooltip";
import { store } from "./../redux/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout children={<Home />} />,
    },
    {
      path: "/login",
      element: <RootLayout children={<Login />} />,
    },

    {
      path: "/signup",
      element: <RootLayout children={<Signup />} />,
    },

    {
      path: "/product",
      element: <RootLayout children={<Product />} />,
    },

    {
      path: "/login",
      element: <RootLayout children={<Login />} />,
    },

    {
      path: "/checkout",
      element: <RootLayout children={<Checkout />} />,
    },

    {
      path: "/admin/login",
      element: <RootLayout children={<AdminLogin />} />,
    },

    {
      path: "/admin/dashboard",
      element: <AdminLayout children={<CreateProduct />} />,
    },
    {
      path: "/admin/dashboard/all-products",
      element: <AdminLayout children={<AllProducts />} />,
    },
    {
      path: "/admin/dashboard/analytics",
      element: <AdminLayout children={<Analytics />} />,
    },
    {
      path: "/admin/dashboard/orders",
      element: <AdminLayout children={<Orders />} />,
    },
    {
      path: "/admin/dashboard/settings",
      element: <AdminLayout children={<Settings />} />,
    },

    {
      path: "/*",
      element: (
        <>
          <Error />
        </>
      ),
    },

    {
      path: "/success",
      element: (
        <>
          <Success />
        </>
      ),
    },
  ]);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
