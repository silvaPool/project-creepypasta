import { SignOutButton, SignedOut } from "@clerk/clerk-react";
import { Box, Button, Typography } from "@mui/material";

function Title() {
  function formulario() {
    window.open("https://form.jotform.com/240523126805651");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "45vh",
        padding: "25px",
      }}
    >
      <Typography variant="h1" sx={{fontFamily: "Protest Revolution"}}>CreepyPastas</Typography>
      <Typography variant="body1" sx={{fontFamily: "Caveat", fontSize: '1.5rem'}}>
        Todas as histórias encontran-se logo abaixo. Tem alguma história e quer
        que todos veem e desfrutem da sua imaginação? Então clique no botão e
        envie a história pra gente!
      </Typography>
      {/* <Typography variant="body1">Divirta-se</Typography> */}
      <button class="learn-more" onClick={formulario}>
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Enviar</span>
      </button>
    </Box>
  );
}

export default Title;
