import { useState } from "react";
import Cookies from "js-cookie";
import { Box } from "@mui/material";

function AppCookies() {
  const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", true);
    setCookie(true);
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent");
    setCookie("false");
  };

  return (
   <Box sx={{border: '1px solid red'}}>
        Matheus
   </Box>
  )
  ;
}

export default AppCookies;
