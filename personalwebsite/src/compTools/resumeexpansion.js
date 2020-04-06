import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Resume from "../images/DavidRayResume.PNG"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    margin:"2% auto",
    [theme.breakpoints.down("sm")]: {
      width:"90%"
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  resumepic:{
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      textAlign:"center"
    }
  },
  button:{
    margin: "0 auto",
    border:"solid 1px #dd1818"
    
  },
  links:{
    textDecoration:"none",
    color: "#dd1818",
    margin: "0 auto",

  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Resume</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           <img className={classes.resumepic} src={Resume} alt="Resume from david" />
           <Button className={classes.button} variant="outlined" color="primary"><a className={classes.links} download href={Resume}>DOWNLOAD</a></Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
     
    </div>
  );
}