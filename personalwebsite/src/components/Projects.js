import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Navbar from "../compTools/navbar"
import Bottomnav from "../compTools/bottomNav"
import Rick from "../images/rick.PNG"
import Port from "../images/port.PNG"
import Sauti from "../images/sauti.PNG"
import Project from "../images/Protask.PNG"
import "./project.css"


const useStyles = makeStyles((theme) => ({
    root:{
        background:"linear-gradient(to bottom, #333333, #dd1818)",
    },
  Card1: {
  
   width:"25%",
   margin:" 2% 0 0 0",
   [theme.breakpoints.down("sm")]: {
    margin:"0 auto",
    width:"90%"
},
  },
  Card2:{
   
    width:"25%",
    margin:" 2% 0 0 0",
    [theme.breakpoints.down("sm")]: {
      margin:"2% auto",
      width:"90%"
  }
  },
  cardContainer:{
      display:"flex",
      justifyContent:"space-evenly",
      [theme.breakpoints.down("sm")]: {
        display:"flex",
        flexDirection:"column",
        margin:"0 auto"
    }
  },
  introCard:{
   
    textAlign:"center",
    width:"60%",
    margin:"3% auto",
    padding:"3%"
  },
  header:{
    
    color:"#dd1818",
    fontSize:"2rem"
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Navbar />
      <div >
          <div className="introCard">
              <Typography className={classes.header} variant="h2" component="h1"> PROJECTS </Typography>
          </div>

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
          alt=" Port "
          height="140"
          src={Port}
          title="Port"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Personal Portfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Personal Portfolio
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://dapthedev.com">
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
            ProTask Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ProTask is still in development
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://pro-task-hddntv8dt.now.sh/">
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