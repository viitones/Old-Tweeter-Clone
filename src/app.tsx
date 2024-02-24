import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";

import "../src/styles/css/global.css"

export function App() {
  return (
    <div className="layout">

      <Sidebar />

      <Content />
      

    </div>
  )
}

