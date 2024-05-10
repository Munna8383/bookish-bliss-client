import {
    createBrowserRouter,
  } from "react-router-dom"
import Layout from "../components/Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "../Routes/PrivateRoute"


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
      ]
    },
  ]);


  export default router;