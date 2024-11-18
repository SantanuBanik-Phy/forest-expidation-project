import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import AdventureDetails from "../components/AdventureDetails";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import DynamicTitle from "../components/DynamicTitle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DynamicTitle />
        <HomeLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const adventureRes = await fetch("/adventure.json");
          const adventureData = await adventureRes.json();
          const feedBackRes = await fetch("/happyClients.json");
          const feedBackData = await feedBackRes.json();
          const specialDealsRes = await fetch("/specialDeals.json");
          const specialDealsData = await specialDealsRes.json();

          return { adventureData, feedBackData, specialDealsData };
        },
      },
      {
        path: "/adventure/:id",
        element: (
          <PrivateRoute>
            <AdventureDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/adventure.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: (
      <>
        <DynamicTitle />
        <AuthLayout />
      </>
    ),
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

export default router;
