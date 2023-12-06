import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componenets/Root";
import Home from "./componenets/Home";
import Login from "./componenets/Login";
import Register from "./componenets/Register";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./componenets/Orders";
import PrivaleRoutes from "./Routes/PrivateRoutes";
import Profile from "./componenets/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: <PrivaleRoutes><Orders></Orders></PrivaleRoutes>
      },
      {
        path: '/profile',
        element: <PrivaleRoutes><Profile></Profile></PrivaleRoutes>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
