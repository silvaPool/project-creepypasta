import { createTheme } from "@mui/material";

const theme = createTheme({

    components: {
        MuiCardContent: {
                styleOverrides: {
                    root: {
                        color: 'blue',
                    },
                },
        },
    },
    
}); 

export default theme;