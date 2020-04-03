import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea, CardActions, CardContent,CardHeader, CardMedia, Button, Typography} from '@material-ui/core';
import Navbar from "../compTools/navbar"
import Bottomnav from "../compTools/bottomNav"
import Rick from "../images/rick.PNG"
import ToDo from "../images/todo.PNG"
import Sauti from "../images/sauti.PNG"
import Project from "../images/ProjectMY.PNG"


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
    width:"60%",
    margin:"3% auto",
    padding:"3%"
  }
});

export default function Projects() {
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
          src={Rick}
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
          alt="The ToDo List"
          height="140"
          src={ToDo}
          title="The ToDo List"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The ToDo list: powered by Javascript
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           The ToDo list: powered by Javascript
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://hungry-meninsky-73a0d3.netlify.com/">
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
         src={Sauti}
          title="project3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sauti African Marketplace
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Sauti African Marketplace
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://dlray89.github.io/SautiAfrica/">
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
          alt="ProjectMY"
          height="140"
          src={Project}
          title="project4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ProjectMY
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ProjectMY application coming soon!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="*">
          Visit site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <Bottomnav />
    </div>
  );
}