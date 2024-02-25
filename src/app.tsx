import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes";



export function App() {
  return (
    <RouterProvider router={router} />
  )
}

