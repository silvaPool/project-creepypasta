import { SignInButton } from "@clerk/clerk-react";
import { Box } from "@mui/material";

function LayoutLogin() {
    return (
        <Box>
            Faça Login
            <SignInButton />
        </Box>
    )
}

export default LayoutLogin;