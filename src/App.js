import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return <div className="w-screen min-h-screen overflow-x-hidden">
     <Routes>

        <Route path="/" element={<Homepage/>}/>

     </Routes>
  </div>;
}

export default App;
