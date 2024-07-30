  import { Routes, Route } from "react-router-dom";
  import Login from "../pages/login/login";
  import SignUp from "../pages/Signup/SignUp";
  
  
  export default function AuthRoutes() {
    return (
      <Routes>     
        <Route path="/login" element={<Login />}  />    
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  }
