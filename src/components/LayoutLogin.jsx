import { SignInButton } from "@clerk/clerk-react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import StyledLayoutLogin from "./StyledLayoutLogin";
import { Link, useNavigate } from "react-router-dom";
import StyledImageLogin from "./StyledImageLogin";
import { Swiper, SwiperSlide } from "swiper/react";
import Samarinha from "../assets/images/samara.jpg";
import { dark } from "@clerk/themes";
import styled from "styled-components";


function LayoutLogin() {
  const navigate = useNavigate();

  return (
    <>
      <StyledLayoutLogin>

     
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "50%",
            width: "45%",
            margin: "0 auto",
          }}
        >
           
           <Typography variant="div" className="ribbon" sx={{fontFamily: "Protest Revolution"}}>CreepyPastas</Typography>
          <Typography sx={{ fontSize: "2rem", fontFamily: "Caveat" }}>
            Contos, histórias, lendas e relatos assustadores. Entre e divirta-se
            no maior acervo de creepyPastas do Brasil.
          </Typography>
          <SignInButton afterSignInUrl="/dashboard">Entrar</SignInButton>{" "}
          
        </Box>
        
       

        <StyledImageLogin></StyledImageLogin>
      </StyledLayoutLogin>
    </>
  );
}

export default LayoutLogin;
