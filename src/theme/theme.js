import { createTheme } from "@mui/material";

const theme = createTheme({

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'red',
                    border: '2px solid transparent',
                    background: 'linear-gradient(#212121, #212121) padding-box,linear-gradient(145deg, transparent 35%,#d3d3d3, #808080) border-box',
                    borderRadius: '8px',
                    transformOrigin: 'right bottom',
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                    color: 'white',
                },
            },
        },
        MuiCardContent: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        width: '210px',
                        height: '260px',
                    },
                },
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(#212121, #212121) padding-box,linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                text: {
                    color: 'white',
                }
            }
        }
       
    },
    
}); 

export default theme;