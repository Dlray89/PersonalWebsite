import React from "react"
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },
    title:{
        flexGrow:1,
        [theme.breakpoints.down("sm")]: {
            fontSize:"0.6rem"
        }
        
    },
    Appbar:{
        background: "linear-gradient(to left, #333333, #dd1818);",
        margin:"4% 0 0 0"
    },
    links:{
        textDecoration:"none",
        color:"white",
        [theme.breakpoints.down("sm")]: {
            fontSize:"0.7rem"
        }
    },
    Icons:{
        display:"flex",
        justifyContent:"space-evenly",
        width:"20%"
    }
}))

function NavBar(){
    const classes = useStyles()

    
    
    return( 
        <div className={classes.root}>
    <AppBar className={classes.Appbar} position="static">
        <Toolbar>
            <Typography className={classes.title} variant="body1" component="h1">
               &copy; 2020 DapTheDev        
            </Typography>
            <div className={classes.Icons}>
            <a style={{textDecoration:"none", color:"white"}} href="https://www.facebook.com/ImodelIspeak15"><FacebookIcon /></a> 


            <a style={{textDecoration:"none", color:"white"}} href="https://www.linkedin.com/in/dapperdave1914/"><LinkedInIcon /></a>

            <a style={{textDecoration:"none", color:"white"}} href="https://github.com/Dlray89"><GitHubIcon /></a>
            
            </div>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar