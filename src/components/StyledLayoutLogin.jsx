import { Box } from "@mui/material";
import { styled } from "styled-components";
import Samarinha from '../assets/images/samara.jpg';

const StyledLayoutLogin = styled(Box)`
&& {
   display: flex;
   flex-direction: column;
   height: 100vh;
   padding-top: 125px;
   text-align: center;
   background-image: url(${Samarinha});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;    
}
      


        
`

export default StyledLayoutLogin;