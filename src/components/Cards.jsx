import { Box, Button, CardActionArea, Grid } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import cards from "../data/Cards";

function Cards() {

  const handleTwitterShare = (contentLink) => {
    const shareText = `Confira esta história de terror interessante! ${contentLink}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterShareUrl, '_blank');
  }

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "5rem",
        marginTop: "2rem",
        border: "1px solid red",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xl={4} md={4}>
          <a>
            <div class="book">
              <p>{cards[0].conteudo}</p>
              <div class="cover">
                <p>{cards[0].titulo}</p>
              </div>
            </div>
          </a>
        </Grid>

        <Grid item xl={4} md={4}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cards[1].titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cards[1].conteudo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>

        <Grid item xl={4} md={4}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cards[2].titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cards[2].conteudo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>

         
        <Grid item xl={4} md={4}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cards[3].titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cards[3].conteudo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary" onClick={() => handleTwitterShare(item.url)}>
                  kkkkk
                </Button>
                
              </CardActions>
            </Card>
          </a>
        </Grid>
      

        <Grid item xl={4} md={4}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cards[4].titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cards[4].conteudo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>

        <Grid item xl={4} md={4}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cards[5].titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cards[5].conteudo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cards;
