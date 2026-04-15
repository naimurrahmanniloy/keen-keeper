import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage/Homepage";
import FriendsPage from "../pages/FriendsPage/FriendsPage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendsPage />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
