import Application from "@V01/layouts/Application";
import HyundaiAutoever from "@V01/pages/HyundaiAutoever";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "share",
    element: <Application />,
    children: [{ path: "autoever", element: <HyundaiAutoever /> }],
  },
]);

export default router;
