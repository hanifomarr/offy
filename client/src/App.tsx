import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout, RequireAuth } from "./pages/layout/layout";
import Home from "./pages/home/home";
import OfficeList from "./pages/officeList/officeList";
import OfficeDetails from "./pages/officeDetails/officeDetails";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

import "./assets/styles/main.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "space",
          children: [
            { index: true, element: <OfficeList /> },
            { path: ":office_id", element: <OfficeDetails /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [{ path: "profile", element: <Profile /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
