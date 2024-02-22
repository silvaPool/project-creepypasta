import { Box } from "@mui/material";
import { styled } from "styled-components";
import Samarinha from "../assets/images/samara.jpg";

const StyledLayoutLogin = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    color: black;
    text-align: center;
    background: rgba(255, 255, 255, 0.46);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export default StyledLayoutLogin;
