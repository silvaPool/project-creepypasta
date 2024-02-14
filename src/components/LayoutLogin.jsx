import { SignInButton } from "@clerk/clerk-react";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import StyledLayoutLogin from "./StyledLayoutLogin";
import { Link, useNavigate } from "react-router-dom";


function LayoutLogin() {

    const navigate = useNavigate();



    return (
        <StyledLayoutLogin>

           

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', height: '50%', width: '50%', margin: '0 auto'}}>
                <Typography sx={{fontSize: '3.5rem', color: 'red'}}>
                    CreepyPastas
                </Typography>

                <Typography sx={{fontSize: '2rem', color: 'red'}}>
                    Contos, histórias, lendas e relatos assustadores. Entre e diverta-se no maior acervo de creepyPastas do Brasil.
                </Typography>


                <SignInButton afterSignInUrl="/dashboard">
                    Entrar    
                </SignInButton> 

         

           </Box>

            
        </StyledLayoutLogin>
    )
}

export default LayoutLogin;