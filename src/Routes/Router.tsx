import { createBrowserRouter } from "react-router-dom";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";


// react router for routing
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1/>, 
    },
    {
        path: "/page2",
        element: <Page2/>,
    },  
  ]);