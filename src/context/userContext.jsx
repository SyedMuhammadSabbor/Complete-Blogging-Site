import React, { createContext, useState } from "react";
import { getCookie } from "../utils/getCookie";
import { jwtDecode } from "jwt-decode";

const token = getCookie("accessToken");
let userInfo = null;
if (token) {
  userInfo = jwtDecode(token);
}
const UserContext = createContext({
  user: userInfo,
  accessToken: token,
  setUser: () => {},
  setAccessToken: () => {},
});

const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(userInfo);
  const [accessToken, setAccessToken] = useState(token);
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const values = {scrolled, setScrolled , showPopup ,setShowPopup, user, setUser, accessToken, setAccessToken };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { StoreProvider, UserContext };
