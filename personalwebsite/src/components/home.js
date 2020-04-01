import React from "react";
import NavBar from "../compTools/navbar";
import { Avatar, Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Expansion from "../compTools/expansion"
import IntroTabs from "../compTools/introTabs"

const useStyles = makeStyles({
  rootsub: {
    border: "solid 1px red",
    margin: "5% auto",
    width:"90%",
  
  },
  root:{
    border:"solid 2px purple",
    background: "linear-gradient(to bottom, #1d4350, #a43931)",
  },
  CardHeader: {
    textAlign: "center"
  },
  Cardbox: {
    border: "solid 1px black",
    width: "40%",
    boxSizing:"border-box",
    background: "linear-gradient(to top, #333333, #dd1818);",

  },
  Cardbox2: {
    border: "solid 2px #333333",
    width: "40%",
    background: "linear-gradient(to left, #333333, #dd1818);",    
  },
  CardContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  title:{
    padding:"3%",
    textAlign:"center",
    textDecoration:"underline"
  },
  subtitle:{
    borderBottom:'solid 1px black', 
    padding:"1%", 
    textAlign:"center",
  
  },
  body1:{
    border: "solid 2px red",
    margin:"0 auto"
  },
  skillsTitle:{
      border:"solid 1px #333333",
      textAlign:"center",
      padding:"3%",
      background:"linear-gradient(to left, #333333, #dd1818);",
  },
  subtitle2:{
      padding: "1%",
      border:"solid 2px blue",
      background:"linear-gradient(to left, #333333, #dd1818);"

  },
  Avatar:{
      margin:"1% auto",
      background:"#dd1818"
  }
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Card className={classes.rootsub}>
      <Avatar className={classes.Avatar}>DR</Avatar>
        <CardHeader
          className={classes.CardHeader}
          title="Portfolio"
          subheader="Projects/Tech Blogs"
        />

        <CardMedia />
      </Card>

      <div className={classes.CardContainer}>
        <Card className={classes.Cardbox}>
          <Typography className={classes.title} variant="h5">Career Aspriations</Typography>

          <Typography className={classes.subtitle}  variant="body1" gutterBottom>
            <IntroTabs />
          </Typography>

          <br />

          
        </Card>

        <Card className={classes.Cardbox2}>
        <Typography variant="h5" className={classes.skillsTitle}>
        Tech Arsenal
        </Typography>

       

        <Typography variant="body1" >
            {/* */}
<Expansion />
        </Typography>
        
        </Card>
      </div>
    </div>
  );
}
export default Home;
