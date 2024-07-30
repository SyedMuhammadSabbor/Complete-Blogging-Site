// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './pages/Homepage/HomePage';
import AboutUs from './pages/Aboutus/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import SignUp from './pages/Signup/SignUp';
import Posts from './pages/Posts/Posts';
import Stories from './pages/Stories/Stories';
import OurWrite from './pages/Ourwrite/OurWrite';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import OurStory from './pages/OurStory/OurStory';
import NotFound from './pages/pageNotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { StoreProvider } from './context/userContext';
import Login from './pages/login/login';
import './App.scss'
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
          <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/post" element={<ProtectedRoute><Posts /></ProtectedRoute>} />
          <Route path="/stories" element={<ProtectedRoute><Stories /></ProtectedRoute>} />
          <Route path="/ourwrite" element={<ProtectedRoute><OurWrite /></ProtectedRoute>} />
          <Route path="/createprofile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
          <Route path="/ourstory" element={<ProtectedRoute><OurStory /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
