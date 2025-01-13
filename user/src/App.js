import Login from "./components/Auth/login";

import Home from "./components/homepage/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
     
        <Route path="/home" element={<Home></Home>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
