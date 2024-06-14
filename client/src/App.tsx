import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import OfficeList from "./pages/officeList/officeList";
import OfficeDetails from "./pages/officeDetails/officeDetails";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "list",
          children: [
            { index: true, element: <OfficeList /> },
            { path: ":office_id", element: <OfficeDetails /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
