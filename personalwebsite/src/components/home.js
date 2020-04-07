import React from "react";
import NavBar from "../compTools/navbar";
import BottomNav from "../compTools/bottomNav"
import {
  Card,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Techtabs from "../compTools/tabs";
import IntroTabs from "../compTools/introTabs";
import ResumeExpansion from "../compTools/resumeexpansion"
import "./home.css"



const useStyles = makeStyles((theme) => ({
  root: {
    border: "solid 2px black",
    background: "linear-gradient(to bottom, #1d4350, #a43931)"
  },
  intro:{
    color:"#dd1818",
  },
  CardHeader: {
    textAlign: "center"
  },
  Cardbox: {
    border: "solid 1px black",
    width: "40%",
    boxSizing: "border-box",
    background: "linear-gradient(to top, #333333, #dd1818);",
    margin:" 0 auto",
    [theme.breakpoints.down("sm")] : {
      width:"90%"
    }
    
  },
  Cardbox2: {
    border: "solid 2px #333333",
    width: "40%",
    background: "linear-gradient(to left, #333333, #dd1818);",
    margin:"0 auto",
    [theme.breakpoints.down("sm")] : {
      width:"90%"
    }
  },
  title: {
    padding: "3%",
    textAlign: "center",
    textDecoration: "underline"
  },
  subtitle: {
    borderBottom: "solid 1px black",
    padding: "1%",
    textAlign: "center"
  },
  body1: {
    border: "solid 2px red",
    margin: "0 auto"
  },
  skillsTitle: {
    border: "solid 1px #333333",
    textAlign: "center",
    padding: "3%",
    background: "linear-gradient(to left, #333333, #dd1818);",
    color:"white"
  },
  subtitle2: {
    padding: "1%",
    border: "solid 2px blue",
    background: "linear-gradient(to left, #333333, #dd1818);"
  },
  resumeTitle:{
    border: "solid 2px yellow",
    width:"43%",
    margin:"2% auto"
  }
 
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />

      <div className="introPanel">
        <Typography className={classes.intro} variant="h2" component="h1">
          TECH PORTFOLIO
        </Typography>

       
      </div>

      <div className={classes.CardContainer}>

        <Card className={classes.Cardbox}>
          <Typography className={classes.title} variant="h5">
            Career Aspriations
          </Typography>

          <Typography className={classes.subtitle} variant="body1" gutterBottom>
            <IntroTabs />
          </Typography>

          <br />
        </Card>
        <div>
          <ResumeExpansion />
        </div>

        <Card className={classes.Cardbox2}>
          <Typography variant="h5" className={classes.skillsTitle}>
            Fullstack Tech Arsenal
          </Typography>

          <Typography variant="body1">
            <Techtabs />
          </Typography>
        </Card>
      </div>

     
      <BottomNav />
    </div>
  );
}
export default Home;
