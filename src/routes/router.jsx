import {
    Navigate,
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
// import HomeLayout from "../layouts/HomeLayout";
// import CategoryNews from "../pages/CategoryNews";
// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import NewsDetails from "../pages/NewsDetails";
// import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:async ()=> {
            const adventureRes  = await fetch("/adventure.json");
            const adventureData = await adventureRes.json()

            return adventureData
        }
        },
        // {
        //   path: "/category/:id",
        //   element: <CategoryNews></CategoryNews>,
        //   loader: ({ params }) =>
        //     fetch(
        //       `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //     ),
        // },
      ],
    },
    {
        path: "auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element:<Register></Register>,
          
        },
      ],

    },
    
    

  
    {
        path: "*",
      element: <div>Page not found</div>,
    }
  ]);
  export default router;