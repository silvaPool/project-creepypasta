import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material";
import cards from "../data/Cards";

function Cards() {


  const handleTwitterShare = (contentLink) => {

    const shareText = `Confira este conteúdo interessante! ${contentLink}`;

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterShareUrl, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        padding: "5rem",
        // marginTop: "2rem",
        background: 'lch(3% 4 115)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {cards.map((item) => (
        <div key={item.id}>
           <Grid item xl={4} md={4}>
            <a>
              <Card >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.titulo}
                    </Typography>
                    <Typography variant="body2" color="hsl(151deg 50% 100%)" sx={{textAlign: 'left'}}>
                      {item.conteudo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => handleTwitterShare(item.url)}
                  >
                    Entrar
                  </Button>
                </CardActions>
              </Card>
            </a>
          </Grid>
        </div>
      ))}
    </Box>
  );
}

export default Cards;
