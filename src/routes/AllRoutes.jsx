import React from "react";
import useStoreContext from "../context";
import AuthRoutes from "./AuthRoutes";
import { Route, Routes } from "react-router";
import NotFound from "../pages/pageNotFound/NotFound";
import ProtectedRoutes from "./ProtectetedRoutes";


const AllRoutes = () => {
  const { user } = useStoreContext();
  console.log("user", user);

  return (
    <>
        {user ? <ProtectedRoutes /> : <AuthRoutes />}
          <Routes>
</Routes>
    </>
    

  );
};

export default AllRoutes;
