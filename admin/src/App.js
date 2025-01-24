import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/homepage/home";
import Login from "./components/Auth/login";
import { Dataprovider } from "./components/ContextApi/context";

function App() {
  return (
    <Dataprovider>
        <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/" element={<Navigate to="/home/adddata"></Navigate>}></Route>
      </Routes>
    </Router>
   
    </Dataprovider>
   
  );
}

export default App;
