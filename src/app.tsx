import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes";

import { Sidebar } from "./components/sidebar/Sidebar";


import "../src/styles/css/global.css"


export function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <RouterProvider router={router} />
      </div>
      
    </div>
  )
}

