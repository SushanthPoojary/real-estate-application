import HomePage from "./pages/homePage/homePage";
import Layout from "./pages/layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListingPage from "./pages/listingPage/ListingPage";
// import SingleItem from "./pages/singleItemPage/SingleItemPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SingleProperty from "./pages/singlePropertyPage/SinglePropertyPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListingPage />,
        },
        {
          path: "/:id",
          element: <SingleProperty />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App