import React from 'react'

export const setCookie = (key, value, timeInSeconds) => {
    let expires = "";
    if (timeInSeconds) {
      const date = new Date();
      date.setTime(date.getTime() + timeInSeconds *  1000); 
      expires = "; expires=" + date.toUTCString(); 
  }
  document.cookie = key + "=" + (value || "") + expires + "; path=/";
}
