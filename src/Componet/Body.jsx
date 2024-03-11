import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesDetails from "./MoviesDetails";
import MoviesRecommendtions from "./MoviesRecommendtions";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviesinfo/:movieId",
      element: <MoviesDetails />,
    },
    {
      path:"/recommandmoive/:movieId",
      element:<MoviesRecommendtions/>
    }
   
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
