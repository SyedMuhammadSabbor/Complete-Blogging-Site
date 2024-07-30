import React from "react";
import { Routes, Route } from "react-router-dom";
import NextPage from "../pages/nextpage/nextPage";
import HomePage from "../pages/Homepage/HomePage";
import AboutUs from "../pages/Aboutus/AboutUs";
import Login from "../pages/login/login";
import OurStory from "../pages/OurStory/OurStory";
import SignUp from "../pages/Signup/SignUp";
import ContactUs from "../pages/contactus/ContactUs";
import Posts from "../pages/Posts/Posts";
import Stories from "../pages/Stories/Stories";
import OurWrite from "../pages/Ourwrite/OurWrite";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import ProtectedRoute from "./ProtectedRoute";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<ProtectedRoute><Posts /></ProtectedRoute>} />
      <Route path="/stories" element={<ProtectedRoute><Stories /></ProtectedRoute>} />
      <Route path="/ourwrite" element={<ProtectedRoute><OurWrite /></ProtectedRoute>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/createprofile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
      <Route path="/OurStory" element={<ProtectedRoute><OurStory /></ProtectedRoute>} />
    </Routes>
  );
}
