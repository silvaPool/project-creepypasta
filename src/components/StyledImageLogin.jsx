import { Box } from "@mui/material";
import { styled } from "styled-components";
import Samarinha from '../assets/images/samara.jpg';

const StyledImageLogin = styled(Box)`
&& {
   /* display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 100vh; */
   /* padding-top: 125px; */
   /* text-align: center; */
    background-image: url(${Samarinha});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover; 
   height: 100vh;
   width: 50%;
   border: 1px solid red;
}
      


        
`

export default StyledImageLogin;