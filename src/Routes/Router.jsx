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
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../components/UpdateBook/UpdateBook";
import CategorizedBook from "../Pages/CategorizedBook/CategorizedBook";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";




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
        {
            path:"/allBook",
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
        {
          path:"/single/:_id",
          element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
        },
        {
          path:"/book/:category",
          element:<PrivateRoute><CategorizedBook></CategorizedBook></PrivateRoute>,
        },
        {
          path:"/bookDetails/:_id",
          element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        },
        {
          path:"/borrowed",
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        }
      ]
    },
  ]);


  export default router;