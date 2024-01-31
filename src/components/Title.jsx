import { Box, Typography } from "@mui/material";

function Title() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '45vh', padding: '25px'}}>
                <Typography variant="h1">CreepyPastas Title</Typography>
                <Typography variant="body1">Aqui você encontra todas as histórias disponíveis</Typography>
                <Typography variant="body1">Divirta-se</Typography>
        </Box>
    )
}

export default Title;