import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo2 from "../../assets/headerLogo.webp";
import logo from "../../assets/headerLogo2.webp";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import useStoreContext from "../../context";

const pages = [
  {
    link: "/",
    page: "Home",
  },
  { link: "/ourwrite", page: "Write" },
  { link: "/aboutus", page: "About Us" },
  { link: "/OurStory", page: "Our Story" },
  { link: "/contactus", page: "Contact Us" },
];
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrolled, setScrolled } = useStoreContext();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (location.pathname === "/") {
        if (scrollY > 300) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, setScrolled]);

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <>
      <header className={`${scrolled ? "scrolled" : "simple"}`}>
        <div className="inner">
        <Link to='/'>
        <div className="logo">
            {scrolled ? (

              <img src={logo} alt="logo" />
            ) : (
              <img src={logo2} alt="logo" />
            )}
          </div></Link>

        
          <ul className={`nav ${open ? "open-menu" : "close-menu"}`}>
            {pages.map((value, index) => (
              <li key={index}>
                <Link
                  className={`${scrolled ? "scrolled" : "nav-links"}`}
                  to={value.link}
                >
                  {value.page}
                </Link>
              </li>
            ))}
          </ul>
          <div className="side">
            <button className="sign" onClick={handleLoginClick}>
              Sign in
            </button>
            <span className={`get ${scrolled ? "bordering" : ""}`}>
              <a href="/signup" className={`${scrolled ? "scrolled" : "nav-links"}`}>
                Get started
              </a>
            </span>
          </div>
          <div className="both">
            <div >
              <Link className={`replace ${scrolled ? "scrolled" : "nav-links"}`}
                to="/login"
              >
                <CiLogin />
              </Link>
            </div>
            {open ? (
              <div className="cross" onClick={() => setOpen(!open)}>
                X
              </div>
            ) : (
              <div
                className={`menu ${scrolled ? "scrolled" : "nav-links"}`}
                onClick={() => setOpen(!open)}
              >
                <IoMenu />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
