import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";


const Routes = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      errorElement: [],
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

export default Routes;