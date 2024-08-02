import HomePage from "./pages/homePage/homePage";
import {Layout, RequireAuth} from "./pages/layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListingPage from "./pages/listingPage/ListingPage";
// import SingleItem from "./pages/singleItemPage/SingleItemPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SingleProperty from "./pages/singlePropertyPage/SinglePropertyPage";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import CreatePost from "./pages/createPost/CreatePost";
import { SinglePropertyLoader } from "./lib/loader";

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
          loader: SinglePropertyLoader
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
        {
          path: "/create",
          element: <CreatePost />,
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App