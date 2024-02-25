import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes";


import "../src/styles/css/global.css"


export function App() {
  return (
    <RouterProvider router={router} />
  )
}

