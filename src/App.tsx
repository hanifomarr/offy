import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import OfficeList from "./pages/officeList/officeList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "list", element: <OfficeList /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
