import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./pages/Homepage/Homepage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/friends",
        element: <FriendsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
