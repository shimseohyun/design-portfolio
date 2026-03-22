import Application from "@V01/layouts/Application";
import HyundaiAutoever from "@V01/pages/HyundaiAutoever";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "application",
    element: <Application />,
    children: [{ path: "hyundai-autoever", element: <HyundaiAutoever /> }],
  },
]);

export default router;
