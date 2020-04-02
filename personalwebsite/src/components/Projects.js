import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea, CardActions, CardContent,CardHeader, CardMedia, Button, Typography} from '@material-ui/core';
import Navbar from "../compTools/navbar"


const useStyles = makeStyles({
    root:{
        background:"linear-gradient(to bottom, #333333, #dd1818)",
    },
  Card1: {
  
   width:"25%",
   margin:" 2% 0 0 0"
  },
  Card2:{
   
    width:"25%",
    margin:" 2% 0 0 0"
  },
  cardContainer:{
      display:"flex",
      justifyContent:"space-evenly"
  },
  introCard:{
   
    textAlign:"center",
    width:"90%",
    margin:"3% auto",
    padding:"3%"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Navbar />
      <div >
          <Card className={classes.introCard}>
              <CardHeader title="Projects" subheader="Fullstack web development">

              </CardHeader>
          </Card>

      </div>
      <div className={classes.cardContainer}>
    <Card className={classes.Card1}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Rick and Morty Fan Page"
          height="140"
          image=""
          title="Rick and Morty Fan Page"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rick and Morty fan page
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Website of your favorite characters
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://dreamy-banach-3759ab.netlify.com/">
          Visit site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
   
    <Card className={classes.Card2}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project2"
          height="140"
          image=""
          title="project2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            project2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Project2
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://dreamy-banach-3759ab.netlify.com/">
          Visit site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className={classes.cardContainer}>
    <Card className={classes.Card1}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project3"
          height="140"
          image=""
          title="project3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            project3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           project3
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://dreamy-banach-3759ab.netlify.com/">
          Visit site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
   
    <Card className={classes.Card2}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project4"
          height="140"
          image=""
          title="project4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            project4
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Project4
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://dreamy-banach-3759ab.netlify.com/">
          Visit site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}