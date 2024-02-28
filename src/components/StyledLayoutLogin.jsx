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
    color: white;
    text-align: center;
    background-color: hsl(263deg 100% 0%);
  }
`;

export default StyledLayoutLogin;
