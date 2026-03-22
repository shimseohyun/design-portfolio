import { Global } from "@emotion/react";
import router from "@V01/router/router";
import { RouterProvider } from "react-router-dom";
import { global } from "./styles/global";

const App = () => {
  return (
    <>
      <Global styles={global("1920px")} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
