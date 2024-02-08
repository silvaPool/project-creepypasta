import { Box, Button, Typography } from "@mui/material";

function Title() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '45vh', padding: '25px'}}>
                <Typography variant="h1">CreepyPastas</Typography>
                <Typography variant="body1">Todas as histórias encontran-se logo abaixo. Tem alguma história e quer que todos veem e desfrutem da sua imaginação? Então clique no botão e envie a história pra gente!</Typography>
                {/* <Typography variant="body1">Divirta-se</Typography> */}
                <Button>Enviar</Button>
        </Box>
    )
}

export default Title;