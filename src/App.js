import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-30">
      <Navbar />
      </div>
     
      <div className="h-screen">
        <Outlet />
      </div>

      
    </div>
  );
}

export default App;
